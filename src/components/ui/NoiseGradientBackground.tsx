import { cls } from "@/lib/utils";

type NoiseGradientBackgroundProps = {
  position: "fixed" | "absolute";
};

const NoiseGradientBackground = ({ position }: NoiseGradientBackgroundProps) => {
  return (
    <div className={cls(position, "inset-0 -z-10 overflow-hidden bg-background-accent/10 pointer-events-none select-none", position === "absolute" && "mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]")} aria-hidden="true">
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-background via-background-accent/10 to-background-accent/20" />
      <div className="absolute inset-0 bg-repeat mix-blend-overlay opacity-10 bg-[url(https://storage.googleapis.com/webild/default/noise.webp)] bg-size-[512px]" />
    </div>
  );
};

export default NoiseGradientBackground;
