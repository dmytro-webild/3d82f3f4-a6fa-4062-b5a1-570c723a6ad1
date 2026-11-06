import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
    // CRITICAL for the e2b shared pool: forbid Vite's default behaviour of
    // auto-picking another port on EADDRINUSE. The pool maps each port to a
    // specific projectSlug; if Vite for project A silently lands on the slot
    // belonging to project B, /webild-ready.json on the e2b host responds
    // with B's project id and the frontend sanity check fails (slugMismatch),
    // or worse, the iframe loads B's preview instead of A's. Better to crash
    // loudly so the outer while-loop + stop-sentinel can clean up.
    strictPort: true,
    // E2B exposes each port on `<port>-<sandboxId>.sandbox.webild.io`.
    // Vite 8's host check rejects unknown Host headers with 403 even when
    // `allowedHosts: true` is set (boolean form was tightened upstream),
    // so we whitelist the parent domain explicitly. Leading dot = wildcard
    // for any subdomain.
    allowedHosts: ['.sandbox.webild.io', 'localhost', '127.0.0.1'],
    hmr: {
      // Browser connects via the same e2b-proxied https host on port 443,
      // but the dev server itself listens on raw `port`. Without this Vite
      // tells the client to open `wss://localhost:3000` and HMR fails.
      clientPort: 443,
      protocol: 'wss',
      // Suppress Vite's default red full-screen error overlay inside the
      // sandbox iframe. The iframe is what the END user sees in the Webild
      // editor — they should never see a stack trace or `Failed to resolve
      // import` panel from Vite internals. When a transient broken state
      // lands (e.g. an edit that introduces a typo), the Bob-AI auto-fix
      // loop catches the build error and pushes a corrected commit within
      // seconds; until then the iframe simply renders nothing (or the
      // previous successful build's content if HMR can't apply the bad
      // patch). The frontend has its own loader UI around the iframe; the
      // raw Vite overlay only adds noise.
      overlay: false,
    },
  },
})
