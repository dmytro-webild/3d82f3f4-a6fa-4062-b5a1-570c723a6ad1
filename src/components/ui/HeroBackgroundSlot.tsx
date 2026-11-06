"use client";

import { useStyle } from "@/components/ui/useStyle";
import CornerGlowBackground from "@/components/ui/CornerGlowBackground";
import GradientBarsBackground from "@/components/ui/GradientBarsBackground";
import HorizonGlowBackground from "@/components/ui/HorizonGlowBackground";
import LightRaysCenterBackground from "@/components/ui/LightRaysCenterBackground";
import LightRaysCornerBackground from "@/components/ui/LightRaysCornerBackground";
import RadialGradientBackground from "@/components/ui/RadialGradientBackground";

const HeroBackgroundSlot = () => {
  const { heroBackground } = useStyle();

  switch (heroBackground) {
    case "cornerGlow":
      return <CornerGlowBackground position="absolute" />;
    case "gradientBars":
      return <GradientBarsBackground position="absolute" />;
    case "horizonGlow":
      return <HorizonGlowBackground position="absolute" />;
    case "lightRaysCenter":
      return <LightRaysCenterBackground position="absolute" />;
    case "lightRaysCorner":
      return <LightRaysCornerBackground position="absolute" />;
    case "radialGradient":
      return <RadialGradientBackground position="absolute" />;
    default:
      return null;
  }
};

export default HeroBackgroundSlot;
