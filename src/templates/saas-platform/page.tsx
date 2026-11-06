import { Zap, Shield, Layers, Users, Rocket, Target, Clock, Globe } from "lucide-react";
import { ReactLenis } from "lenis/react";
import NavbarInline from "@/components/ui/NavbarInline";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroCenteredLogos from "@/components/sections/hero/HeroCenteredLogos";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import TestimonialTrustCard from "@/components/sections/testimonial/TestimonialTrustCard";
import PricingLayeredCards from "@/components/sections/pricing/PricingLayeredCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimpleReveal from "@/components/sections/footer/FooterSimpleReveal";
import "./theme.css";

export default function SaasTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="aurora" heroBackground="lightRaysCenter" buttonVariant="arrow">
        <SiteBackgroundSlot />

        <NavbarInline
          logo="Flowbase"
          navItems={[
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Get Started", href: "#pricing" }}
        />

        <div id="hero" data-section="hero">
          <HeroCenteredLogos
            textAnimation="slide-up"
            avatarsSrc={[
              "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/testimonial/testimonial1.webp",
              "https://storage.googleapis.com/webild/default/templates/skincare/image5.avif",
              "https://storage.googleapis.com/webild/default/templates/skincare/image7.avif",
              "https://storage.googleapis.com/webild/default/templates/skincare/image8.avif",
            ]}
            avatarText="Trusted by 1000+ users"
            title="Build beautiful products faster than ever before"
            description="A modern platform designed for teams who want to ship fast without sacrificing quality or design consistency."
            primaryButton={{ text: "Start Free Trial", href: "#pricing" }}
            secondaryButton={{ text: "Watch Demo", href: "#features" }}
            names={["Vercel", "Stripe", "GitHub", "Figma", "Notion", "Linear"]}
            imageSrc=""
            hideMedia
          />
        </div>

        <div id="features" data-section="features">
          <FeaturesBento
            textAnimation="slide-up"
            tag="Platform"
            title="Everything you need to scale"
            description="Powerful features designed to help your team move faster and build better products together."
            features={[
              {
                title: "Real-time Analytics",
                description: "Track performance metrics and user behavior with our powerful analytics dashboard.",
                bentoComponent: "animated-bar-chart",
              },
              {
                title: "Lightning Fast",
                description: "Built on modern infrastructure for sub-100ms response times globally.",
                bentoComponent: "info-card-marquee",
                infoCards: [
                  { icon: Zap, label: "Latency", value: "<50ms" },
                  { icon: Globe, label: "Regions", value: "12+" },
                  { icon: Clock, label: "Uptime", value: "99.9%" },
                ],
              },
              {
                title: "Enterprise Security",
                description: "SOC 2 compliant with end-to-end encryption and role-based access control.",
                bentoComponent: "orbiting-icons",
                centerIcon: Shield,
                orbitIcons: [Layers, Users, Target],
              },
            ]}
          />
        </div>

        <div data-section="features-icon">
          <FeaturesIconCards
            textAnimation="slide-up"
            tag="Why Choose Us"
            title="Built by developers, for developers"
            description="We understand the challenges of modern software development because we face them every day."
            features={[
              { icon: Layers, title: "Modular Architecture", description: "Build with composable components that scale with your needs." },
              { icon: Rocket, title: "Developer Experience", description: "Clean APIs and comprehensive documentation for faster development." },
              { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption and compliance with industry standards." },
              { icon: Zap, title: "Lightning Fast", description: "Optimized for performance with sub-second response times." },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialTrustCard
            textAnimation="slide-up"
            quote="This platform has completely transformed how we build products. The developer experience is unmatched and we've shipped 3x faster since switching."
            rating={5}
            author="Sarah Chen, CTO at TechFlow"
            avatars={[
              { name: "Sarah Chen", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image5.avif" },
              { name: "User 2", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image6.avif" },
              { name: "User 3", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image7.avif" },
              { name: "User 4", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image8.avif" },
            ]}
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingLayeredCards
            textAnimation="slide-up"
            tag="Pricing"
            title="Simple, transparent pricing"
            description="Choose the plan that fits your team. All plans include a 14-day free trial."
            plans={[
              {
                tag: "Starter",
                price: "$29/mo",
                description: "Perfect for small teams getting started",
                primaryButton: { text: "Start Free Trial", href: "#" },
                features: ["Up to 5 team members", "10GB storage", "Basic analytics", "Email support", "API access"],
              },
              {
                tag: "Pro",
                price: "$79/mo",
                description: "For growing teams that need more power",
                primaryButton: { text: "Start Free Trial", href: "#" },
                features: ["Up to 20 team members", "100GB storage", "Advanced analytics", "Priority support", "Custom integrations", "SSO authentication"],
              },
              {
                tag: "Enterprise",
                price: "Custom",
                description: "For large organizations with custom needs",
                primaryButton: { text: "Contact Sales", href: "#contact" },
                features: ["Unlimited team members", "Unlimited storage", "Custom analytics", "Dedicated support", "Custom contracts", "On-premise option"],
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCta
            textAnimation="slide-up"
            tag="Get Started"
            text="Join thousands of developers building better products with our platform."
            primaryButton={{ text: "Start Free Trial", href: "#pricing" }}
            secondaryButton={{ text: "Talk to Sales", href: "#" }}
          />
        </div>

        <FooterSimpleReveal
          brand="Flowbase"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Changelog", href: "#" },
                { label: "Roadmap", href: "#" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
              ],
            },
            {
              title: "Resources",
              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Guides", href: "#" },
                { label: "Support", href: "#" },
              ],
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Security", href: "#" },
              ],
            },
          ]}
          copyright="© 2025 Flowbase. All rights reserved."
          links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
