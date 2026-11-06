import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboardScroll from "@/components/sections/hero/HeroBillboardScroll";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FeaturesBorderGlow from "@/components/sections/features/FeaturesBorderGlow";
import AboutText from "@/components/sections/about/AboutText";
import PricingLayeredCards from "@/components/sections/pricing/PricingLayeredCards";
import TeamOverlayCards from "@/components/sections/team/TeamOverlayCards";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimpleReveal from "@/components/sections/footer/FooterSimpleReveal";
import { Shield, AlertTriangle, Bug, FileWarning, Skull, Lock, Clock, Zap, Layers } from "lucide-react";
import "./theme.css";

export default function MerydianTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" heroBackground="lightRaysCenter" buttonVariant="arrow">
        <SiteBackgroundSlot />

        <NavbarCentered
          logo="MERYDIAN"
          navItems={[
            { name: "Security", href: "#security" },
            { name: "Process", href: "#process" },
            { name: "Pricing", href: "#pricing" },
            { name: "Team", href: "#team" },
          ]}
          ctaButton={{ text: "Book Discovery Call", href: "#contact" }}
        />

        <div id="hero" data-section="hero">
          <HeroBillboardScroll
            textAnimation="slide-up"
            tag="Enterprise AI Infrastructure"
            title="Secure AI Infrastructure. Owned by You."
            description="Enterprise-grade AI operations deployed in your environment. Save 10–20 hours per week without exposing your data."
            primaryButton={{ text: "Book Discovery Call", href: "#contact" }}
            secondaryButton={{ text: "Learn More", href: "#security" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/merydian/breakdown.avif"
          />
        </div>

        <div id="about" data-section="about">
          <AboutText
            textAnimation="slide-up"
            title="OpenClaw is the most powerful AI agent on the planet. 247,000+ stars. 900+ contributors. Every business should run it. Almost none can deploy it safely."
            primaryButton={{ text: "Book Discovery Call", href: "#contact" }}
            secondaryButton={{ text: "Learn More", href: "#security" }}
          />
        </div>

        <div id="security" data-section="security">
          <FeaturesBento
            textAnimation="slide-up"
            tag="The Problem"
            title="Powerful to deploy. Dangerous to deploy wrong."
            description="OpenClaw is under attack. Community-built skills are stealing data, injecting code, and compromising supply chains."
            primaryButton={{ text: "Book Discovery Call", href: "#contact" }}
            secondaryButton={{ text: "Learn More", href: "#process" }}
            features={[
              {
                bentoComponent: "orbiting-icons",
                centerIcon: AlertTriangle,
                orbitIcons: [Bug, FileWarning, Skull, Lock],
                title: "Malicious Skills",
                description: "341 dangerous skills identified on ClawHub stealing user data.",
              },
              {
                bentoComponent: "tilted-stack-cards",
                stackCards: [
                  { icon: Skull, title: "Credential theft", subtitle: "47 incidents", detail: "Active" },
                  { icon: Bug, title: "Session hijacking", subtitle: "23 cases", detail: "Growing" },
                  { icon: FileWarning, title: "Token exposure", subtitle: "18 reports", detail: "Critical" },
                ],
                title: "Data Extraction",
                description: "Credential theft with 47 incidents documented this quarter.",
              },
              {
                bentoComponent: "chat-marquee",
                aiIcon: Bug,
                userIcon: Shield,
                exchanges: [
                  { userMessage: "Execute deployment script", aiResponse: "Injecting malicious payload..." },
                  { userMessage: "Check system status", aiResponse: "Exfiltrating credentials..." },
                  { userMessage: "Run diagnostics", aiResponse: "Installing backdoor..." },
                ],
                placeholder: "Enter command...",
                title: "Code Injection",
                description: "Remote execution with 128 unauthorized injections detected.",
              },
              {
                bentoComponent: "icon-text-marquee",
                centerIcon: FileWarning,
                marqueeTexts: ["Compromised packages: 166", "Malicious dependencies: 89", "Vulnerable imports: 42", "Unsafe modules: 31"],
                title: "Supply Chain",
                description: "Compromised dependencies with 166 malicious packages found.",
              },
            ]}
          />
        </div>

        <div id="outcomes" data-section="outcomes">
          <FeaturesBorderGlow
            textAnimation="slide-up"
            tag="Outcomes"
            title="Real outcomes from secure AI operations"
            description=""
            features={[
              { icon: Clock, title: "10 Hours Saved", description: "Per team, per department. Automated workflows." },
              { icon: Zap, title: "24/7 Operations", description: "AI agents working around the clock." },
              { icon: Layers, title: "50+ Integrations", description: "Connect across all your platforms." },
            ]}
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingLayeredCards
            textAnimation="slide-up"
            tag="Pricing"
            title="One-time deployment. No subscriptions."
            description="You pay once. You own the infrastructure. No recurring fees, no vendor lock-in."
            plans={[
              {
                tag: "Single Department",
                price: "$5,000",
                description: "AI automation for one department.",
                primaryButton: { text: "Get Started", href: "#contact" },
                features: [
                  "Multiple OpenClaw instances",
                  "Docker containerization",
                  "Management dashboard",
                  "14-day support",
                ],
              },
              {
                tag: "Multi-Department",
                price: "$12,000",
                description: "AI operations across multiple teams.",
                primaryButton: { text: "Get Started", href: "#contact" },
                features: [
                  "Everything in Tier 1",
                  "Cross-department orchestration",
                  "Role-based permissions",
                  "30-day support",
                ],
              },
              {
                tag: "On-Site",
                price: "$25,000",
                description: "Zero cloud dependency. Air-gapped.",
                primaryButton: { text: "Get Started", href: "#contact" },
                features: [
                  "Everything in Tier 2",
                  "Physical hardware install",
                  "In-person training",
                  "60-day support",
                ],
              },
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamOverlayCards
            textAnimation="slide-up"
            tag="Team"
            title="Built by engineers who've deployed AI at scale"
            description="Years of experience building secure infrastructure for enterprise clients."
            members={[
              {
                name: "Brody Glanville",
                role: "CEO",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/merydian/team/ceo.webp",
              },
              {
                name: "Bennett Spooner",
                role: "COO",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/merydian/team/coo.webp",
              },
              {
                name: "Jesse Rurka",
                role: "CTO",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/merydian/team/cto.webp",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            textAnimation="slide-up"
            tag="Get Started"
            title="Ready to deploy secure AI infrastructure?"
            description="Book a discovery call and get started in weeks, not months."
            inputPlaceholder="Enter your email"
            buttonText="Book Discovery Call"
          />
        </div>

        <FooterSimpleReveal
          brand="MERYDIAN"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Security", href: "#security" },
                { label: "Process", href: "#process" },
                { label: "Pricing", href: "#pricing" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "Team", href: "#team" },
                { label: "Contact", href: "#contact" },
                { label: "Book a Call", href: "#contact" },
              ],
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ],
            },
          ]}
          copyright="© 2024 Merydian. All rights reserved."
          links={[
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
          ]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
