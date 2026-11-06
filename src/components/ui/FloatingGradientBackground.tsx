import { cls } from "@/lib/utils";

type FloatingGradientBackgroundProps = {
  position: "fixed" | "absolute";
};

const FloatingGradientBackground = ({ position }: FloatingGradientBackgroundProps) => {
  return (
    <div
      className={cls(position, "inset-0 -z-10 overflow-hidden pointer-events-none select-none blur-[40px] mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]")}
      aria-hidden="true"
    >
      <div
        className="absolute opacity-[0.075]"
        style={{
          background: "radial-gradient(circle at center, var(--color-background-accent) 0, transparent 50%)",
          mixBlendMode: "hard-light",
          width: "80%",
          height: "80%",
          top: "calc(50% - 30%)",
          left: "calc(50% - 30%)",
          transformOrigin: "center center",
          animation: "floating-move-vertical 20s ease infinite",
        }}
      />
      <div
        className="absolute opacity-[0.125]"
        style={{
          background: "radial-gradient(circle at center, var(--color-accent) 0, transparent 50%)",
          mixBlendMode: "hard-light",
          width: "80%",
          height: "80%",
          top: "calc(50% - 30%)",
          left: "calc(50% - 30%)",
          transformOrigin: "calc(50% - 400px)",
          animation: "floating-move-in-circle 20s reverse infinite",
        }}
      />
      <div
        className="absolute opacity-[0.125]"
        style={{
          background: "radial-gradient(circle at center, var(--color-primary-cta) 0, transparent 50%)",
          mixBlendMode: "hard-light",
          width: "60%",
          height: "60%",
          top: "calc(50% - 40% + 200px)",
          left: "calc(50% - 40% - 500px)",
          transformOrigin: "calc(50% + 400px)",
          animation: "floating-move-in-circle 30s linear infinite",
        }}
      />
      <div
        className="absolute opacity-[0.15]"
        style={{
          background: "radial-gradient(circle at center, var(--color-background-accent) 0, transparent 50%)",
          mixBlendMode: "hard-light",
          width: "60%",
          height: "60%",
          top: "calc(50% - 40%)",
          left: "calc(50% - 40%)",
          transformOrigin: "calc(50% - 200px)",
          animation: "floating-move-horizontal 30s ease infinite",
        }}
      />
      <div
        className="absolute opacity-[0.075]"
        style={{
          background: "radial-gradient(circle at center, var(--color-primary-cta) 0, transparent 50%)",
          mixBlendMode: "hard-light",
          width: "120%",
          height: "120%",
          top: "calc(50% - 80%)",
          left: "calc(50% - 80%)",
          transformOrigin: "calc(50% - 800px) calc(50% + 200px)",
          animation: "floating-move-in-circle 20s ease infinite",
        }}
      />
    </div>
  );
};

export default FloatingGradientBackground;
