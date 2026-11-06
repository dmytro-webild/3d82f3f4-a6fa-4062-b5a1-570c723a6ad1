"use client";

import { type ReactNode } from "react";

import {
  StyleContext,
  type ButtonVariant,
  type HeroBackgroundVariant,
  type SiteBackgroundVariant,
} from "@/components/ui/useStyle";

interface StyleProviderProps {
  buttonVariant?: ButtonVariant;
  siteBackground?: SiteBackgroundVariant;
  heroBackground?: HeroBackgroundVariant;
  children: ReactNode;
}

export function StyleProvider({
  buttonVariant = "default",
  siteBackground = "none",
  heroBackground = "none",
  children,
}: StyleProviderProps) {
  return (
    <StyleContext.Provider value={{ buttonVariant, siteBackground, heroBackground }}>
      {children}
    </StyleContext.Provider>
  );
}

export default StyleProvider;
