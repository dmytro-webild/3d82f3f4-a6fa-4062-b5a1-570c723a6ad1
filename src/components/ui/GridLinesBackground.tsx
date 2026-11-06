import { cls } from "@/lib/utils";

type GridLinesBackgroundProps = {
  position: "fixed" | "absolute";
};

const GridLinesBackground = ({ position }: GridLinesBackgroundProps) => {
  return (
    <div
      className={cls(position, "inset-0 -z-10 overflow-hidden bg-background pointer-events-none select-none mask-[radial-gradient(circle_at_center,white_0%,transparent_90%)] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-background-accent)_17.5%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-background-accent)_17.5%,transparent)_1px,transparent_1px)] bg-size-[10vw_10vw]")}
      aria-hidden="true"
    />
  );
};

export default GridLinesBackground;
