import { cls } from "@/lib/utils";

type CornerGlowBackgroundProps = {
  position: "fixed" | "absolute";
};

const CornerGlowBackground = ({ position }: CornerGlowBackgroundProps) => {
  return (
    <div className={cls(position, "inset-0 -z-10 overflow-hidden pointer-events-none select-none", position === "absolute" && "mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]")} aria-hidden="true">
      <div
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-9/10 md:w-6/10 aspect-square rounded-full opacity-20 [background:radial-gradient(circle_at_center,var(--color-background-accent)_35%,transparent_70%)]"
      />
      <div
        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-9/10 md:w-6/10 aspect-square rounded-full opacity-20 [background:radial-gradient(circle_at_center,var(--color-background-accent)_35%,transparent_70%)]"
      />
    </div>
  );
};

export default CornerGlowBackground;
