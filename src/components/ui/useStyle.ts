"use client";

import { createContext, useContext } from "react";

export type ButtonVariant =
  | "default"
  | "arrow"
  | "bounce"
  | "bubble"
  | "elastic"
  | "expand"
  | "flip"
  | "magnetic"
  | "pill"
  | "shift"
  | "slide"
  | "stagger";

export type SiteBackgroundVariant =
  | "none"
  | "aurora"
  | "cornerGlow"
  | "floatingGradient"
  | "gridDots"
  | "gridLines"
  | "noise"
  | "noiseGradient";

export type HeroBackgroundVariant =
  | "none"
  | "lightRaysCenter"
  | "lightRaysCorner"
  | "gradientBars"
  | "radialGradient"
  | "cornerGlow"
  | "horizonGlow";

export interface StyleContextValue {
  buttonVariant: ButtonVariant;
  siteBackground: SiteBackgroundVariant;
  heroBackground: HeroBackgroundVariant;
}

export const DEFAULT_STYLE_VALUE: StyleContextValue = {
  buttonVariant: "default",
  siteBackground: "none",
  heroBackground: "none",
};

export const StyleContext = createContext<StyleContextValue>(DEFAULT_STYLE_VALUE);

export function useStyle(): StyleContextValue {
  return useContext(StyleContext);
}
