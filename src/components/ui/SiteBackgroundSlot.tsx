"use client";

import { useStyle } from "@/components/ui/useStyle";
import AuroraBackground from "@/components/ui/AuroraBackground";
import CornerGlowBackground from "@/components/ui/CornerGlowBackground";
import FloatingGradientBackground from "@/components/ui/FloatingGradientBackground";
import GridLinesBackground from "@/components/ui/GridLinesBackground";
import NoiseBackground from "@/components/ui/NoiseBackground";
import NoiseGradientBackground from "@/components/ui/NoiseGradientBackground";

const SiteBackgroundSlot = () => {
  const { siteBackground } = useStyle();

  switch (siteBackground) {
    case "aurora":
      return <AuroraBackground position="fixed" />;
    case "cornerGlow":
      return <CornerGlowBackground position="fixed" />;
    case "floatingGradient":
      return <FloatingGradientBackground position="fixed" />;
    case "gridLines":
      return <GridLinesBackground position="fixed" />;
    case "noise":
      return <NoiseBackground position="fixed" />;
    case "noiseGradient":
      return <NoiseGradientBackground position="fixed" />;
    default:
      return null;
  }
};

export default SiteBackgroundSlot;
