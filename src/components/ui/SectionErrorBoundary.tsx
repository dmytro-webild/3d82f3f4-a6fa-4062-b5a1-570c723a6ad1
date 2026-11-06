import { Component, type ErrorInfo, type ReactNode } from "react";

/**
 * Per-section error boundary inserted around every assembled section by the
 * backend's page-assembler. Goal: a single section that throws at runtime
 * (missing required prop, broken `.map`, etc.) shows a small placeholder
 * instead of taking down the entire page with a white screen.
 *
 * Also reports the failure via the `/__webild/render-status` probe channel
 * so Bob-AI's post-commit poll picks up the section name + error message and
 * the model gets the signal to fix the right section on the next loop turn.
 *
 * The probe POST is best-effort and silent — sandbox-only (gated by
 * `window.parent !== window`), so production deploys never call it.
 */

interface Props {
  /** Section slug — same value the wrapping `<div data-section="…">` uses. */
  name: string;
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage?: string;
  fixRequested: boolean;
}

const RENDER_STATUS_URL = "/__webild/render-status";

export default class SectionErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, fixRequested: false };

  static getDerivedStateFromError(error: unknown): State {
    return {
      hasError: true,
      errorMessage:
        error instanceof Error ? error.message : String(error ?? "unknown"),
      fixRequested: false,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (typeof window === "undefined") return;
    if (window.parent === window) return;
    try {
      fetch(RENDER_STATUS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ok: false,
          reason: "section_error_boundary",
          section: this.props.name,
          error: String(error?.message || error || "unknown"),
          stack: String(error?.stack || "").slice(0, 4000),
          componentStack: String(info?.componentStack || "").slice(0, 4000),
          t: Date.now(),
        }),
        keepalive: true,
      }).catch(() => {});
    } catch {
      /* ignore */
    }
  }

  requestFix = () => {
    if (this.state.fixRequested) return;
    this.setState({ fixRequested: true });
    try {
      window.parent.postMessage(
        {
          type: "webild-fix-section-request",
          data: {
            section: this.props.name,
            error: (this.state.errorMessage || "unknown render error").slice(0, 600),
          },
        },
        "*"
      );
    } catch {
      /* ignore */
    }
  };

  render() {
    if (this.state.hasError) {
      const inEditor =
        typeof window !== "undefined" && window.parent !== window;
      return (
        <div
          aria-label="Section render error placeholder"
          data-section-render-error={this.props.name}
          className="relative w-content-width mx-auto my-8 overflow-hidden rounded border-2 border-dashed border-amber-500/50"
        >
          {/* Frosted body — the section itself can't render, so this panel
              stands in for the "blurred broken content" look. */}
          <div className="bg-foreground/[0.04] backdrop-blur-sm px-6 py-14 flex flex-col items-center text-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
              {/* wrench (inline — this boundary must not depend on any import) */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            <p className="text-base font-medium text-foreground">
              This section broke.
            </p>
            <p className="text-xs text-foreground/50 max-w-xl break-words">
              <code className="font-mono">{this.props.name}</code>
              {this.state.errorMessage ? ` — ${this.state.errorMessage}` : null}
            </p>
            {inEditor ? (
              <button
                type="button"
                onClick={this.requestFix}
                disabled={this.state.fixRequested}
                className="mt-2 inline-flex h-9 items-center justify-center rounded-full bg-amber-600 px-5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-default"
              >
                {this.state.fixRequested ? "Fix requested…" : "Fix section"}
              </button>
            ) : null}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
