import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import PageTransitionSwirl from "@/components/ui/PageTransitionSwirl";
import NavbarFullscreen from "@/components/ui/NavbarFullscreen";
import HeroBillboardBrandFloatingCards from "@/components/sections/hero/HeroBillboardBrandFloatingCards";
import AboutCursorTrail from "@/components/sections/about/AboutCursorTrail";
import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";
import FeaturesGridSplitLarge from "@/components/sections/features/FeaturesGridSplitLarge";
import ContactBar from "@/components/sections/contact/ContactBar";
import FooterBrand from "@/components/sections/footer/FooterBrand";
import { Phone, MessageCircle, Mail } from "lucide-react";
import "./theme.css";

export default function JoesCoffeeTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="aurora" heroBackground="none" buttonVariant="bounce">
        <SiteBackgroundSlot />
        <PageTransitionSwirl />
        <NavbarFullscreen
          logo="Joe's Coffee"
          navItems={[
            { name: "Menu", href: "#menu" },
            { name: "Find Us", href: "#locations" },
          ]}
          ctaButton={{ text: "Order Now", href: "#order" }}
        />

        <div id="hero" data-section="hero">
          <HeroBillboardBrandFloatingCards
            textAnimation="fade-blur"
            brand="Joe's Coffee"
            description="Handcrafted espresso drinks and freshly baked pastries in a warm, welcoming atmosphere. From our first roast to your morning cup, every sip tells a story."
            primaryButton={{ text: "Order Now", href: "#order" }}
            secondaryButton={{ text: "View Menu", href: "#menu" }}
            videoSrc="https://storage.googleapis.com/webild/default/templates/joes-coffee/hero/hero.mp4"
            floatingCards={[
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/hero/iced-coffee.webp", name: "Americano" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/hero/latte.webp", name: "Latte" },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <AboutCursorTrail
            textAnimation="fade-blur"
            tag="Move your cursor!"
            title="What are you in the mood for?"
            media={[
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-1.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-2.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-3.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-4.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-5.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-6.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-7.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-8.webp" },
            ]}
            primaryButton={{ text: "See the Menu", href: "#menu" }}
            secondaryButton={{ text: "Find Us", href: "#locations" }}
          />
        </div>

        <div id="menu" data-section="menu">
          <FeaturesFilterGrid
            textAnimation="fade-blur"
            tag="What We Serve"
            title="Explore What's on Our Menu"
            description="From handcrafted espresso drinks to freshly baked pastries, every item is made with care."
            categories={["Hot Drinks", "Cold Drinks", "Pastries"]}
            items={[
              { name: "Espresso", category: "Hot Drinks", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/menu/espresso.webp" },
              { name: "Latte", category: "Hot Drinks", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/menu/latte-menu.webp" },
              { name: "Iced Latte", category: "Cold Drinks", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-2.webp" },
              { name: "Cappuccino", category: "Hot Drinks", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/menu/cappuccino.webp" },
              { name: "Iced Americano", category: "Cold Drinks", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/hero/iced-coffee.webp" },
              { name: "Mocha", category: "Hot Drinks", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/menu/mocha.webp" },
              { name: "Iced Mocha", category: "Cold Drinks", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-6.webp" },
              { name: "Flat White", category: "Hot Drinks", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-7.webp" },
              { name: "Iced Flat White", category: "Cold Drinks", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/menu/iced-flat-white.webp" },
              { name: "Chai Latte", category: "Hot Drinks", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/menu/chai-latte.webp" },
              { name: "Croissant", category: "Pastries", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/trail/trail-3.webp" },
              { name: "Chocolate Chip Cookie", category: "Pastries", imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/menu/chocolate-chip-cookie.webp" },
            ]}
          />
        </div>

        <div id="features" data-section="features">
          <FeaturesGridSplitLarge
            textAnimation="fade-blur"
            tag="Beyond the Cup"
            title="Host Your Next Event at Joe's"
            description="From intimate gatherings to full-scale catering, we bring the warmth of Joe's wherever you need it."
            topItems={[
              {
                title: "Private Events",
                description: "Book our space for birthdays, meetings, or just a good excuse to get together. Great coffee and good vibes included.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/features/private-events.webp",
              },
              {
                title: "Catering",
                description: "Let us handle the coffee and pastries for your next event. We'll set up, pour, and make sure nobody runs on empty.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/features/catering.webp",
              },
            ]}
            bottomItem={{
              title: "Custom Menus",
              description: "Work with our team to build a tailored menu for your event — from espresso bars to pastry platters, we've got you covered.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/features/custom-menus.webp",
              primaryButton: { text: "Get in Touch", href: "#contact" },
            }}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactBar
            textAnimation="fade-blur"
            tag="Get in Touch"
            title={"Speak with one\nof our experts"}
            options={[
              { icon: MessageCircle, label: "Whatsapp", href: "https://wa.me/1234567890" },
              { icon: Mail, label: "Email", href: "mailto:hello@joescoffee.com" },
              { icon: Phone, label: "Number", href: "tel:+1234567890" },
            ]}
          />
        </div>

        <FooterBrand
          brand="Joe's Coffee"
          columns={[
            {
              items: [
                { label: "Menu", href: "#menu" },
                { label: "Hot Drinks", href: "#menu" },
                { label: "Pastries", href: "#menu" },
              ],
            },
            {
              items: [
                { label: "Find Us", href: "#locations" },
                { label: "Hours", href: "#locations" },
                { label: "About", href: "#about" },
              ],
            },
            {
              items: [
                { label: "Contact", href: "#contact" },
                { label: "Careers", href: "#careers" },
                { label: "Gift Cards", href: "#gift-cards" },
              ],
            },
          ]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
