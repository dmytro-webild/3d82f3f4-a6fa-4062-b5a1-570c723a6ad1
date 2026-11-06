import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import NavbarFullscreenStatic from "@/components/ui/NavbarFullscreenStatic";
import HeroVideoScroll from "@/components/sections/hero/HeroVideoScroll";
import AboutTextFill from "@/components/sections/about/AboutTextFill";
import FeaturesMediaColumns from "@/components/sections/features/FeaturesMediaColumns";
import ContactParallaxCard from "@/components/sections/contact/ContactParallaxCard";
import FooterBasic from "@/components/sections/footer/FooterBasic";
import "./theme.css";

export default function MarbellaTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
        <SiteBackgroundSlot />

        <NavbarFullscreenStatic
          logo="Le Cercle"
          navItems={[
            { name: "Properties", href: "#properties" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Book a Tour", href: "#contact" }}
        />

        <div id="hero" data-section="hero">
          <HeroVideoScroll
            textAnimation="fade"
            videoSrc="https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4"
            tag="Le Cercle Premium Real Estate"
            title="Live Where the Sun Meets the Sea"
            description="Exclusive beachfront villas and luxury apartments on the Costa del Sol. Your Mediterranean dream, delivered turnkey."
            primaryButton={{ text: "View Properties", href: "#properties" }}
            secondaryButton={{ text: "Book a Tour", href: "#contact" }}
            bottomText="A premium real estate brand designed for those seeking a refined way of living on the Costa del Sol"
          />
        </div>

        <div id="about" data-section="about">
          <AboutTextFill
            textAnimation="fade"
            title="For those who travel like it's an art form."
            imageSrc="https://storage.googleapis.com/webild/default/templates/marbella/about/statement.webp"
          />
        </div>

        <div id="properties" data-section="properties">
          <FeaturesMediaColumns
            textAnimation="fade"
            tag="Properties"
            title="Our Villas"
            description="Handpicked residences in Marbella's most coveted locations, each designed for effortless Mediterranean living."
            items={[
              { title: "Villa Serena", description: "A sunlit 5-bedroom retreat with infinity pool, panoramic sea views, and private garden terraces.", imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-1.webp" },
              { title: "Casa del Sol", description: "Contemporary beachfront living with floor-to-ceiling glass, rooftop lounge, and direct beach access.", imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-2.webp" },
              { title: "Villa Andalucía", description: "Traditional charm meets modern luxury — courtyard, olive grove, and a heated outdoor pool.", imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-3.webp" },
              { title: "The Meridian", description: "Sleek 4-bedroom penthouse villa with smart home technology and sweeping coastal views.", imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-4.webp" },
              { title: "Villa Blanca", description: "Minimalist white-washed estate with private cinema, spa suite, and landscaped Mediterranean gardens.", imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-5.webp" },
              { title: "Casa Dorada", description: "Golden-hour perfection — west-facing terraces, wine cellar, and an open-plan chef's kitchen.", imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-6.webp" },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactParallaxCard
            title="Get In Touch"
            imageSrc="https://storage.googleapis.com/webild/default/templates/marbella/contact/cta-bg.webp"
            inputs={[
              { name: "name", type: "text", placeholder: "Your name" },
              { name: "email", type: "email", placeholder: "Your email" },
            ]}
            textarea={{ name: "message", placeholder: "Tell us about your dream property...", rows: 4 }}
            buttonText="Send Message"
            footerText="Prefer to talk? Book a private tour."
            footerLink={{ text: "Email Us", href: "mailto:hello@lecercle.com", imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/contact/avatar.webp" }}
          />
        </div>

        <FooterBasic
          columns={[
            {
              title: "Properties",
              items: [
                { label: "Villas", href: "#properties" },
                { label: "Apartments", href: "#" },
                { label: "Penthouses", href: "#" },
                { label: "New Developments", href: "#" },
              ],
            },
            {
              title: "Services",
              items: [
                { label: "Property Search", href: "#" },
                { label: "Legal Assistance", href: "#" },
                { label: "Interior Design", href: "#" },
                { label: "Property Management", href: "#" },
              ],
            },
            {
              title: "Locations",
              items: [
                { label: "Golden Mile", href: "#" },
                { label: "Puerto Banús", href: "#" },
                { label: "Sierra Blanca", href: "#" },
                { label: "La Zagaleta", href: "#" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ],
            },
          ]}
          leftText="© 2026 Le Cercle. All rights reserved."
          rightText="Marbella, Costa del Sol"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
