import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import CursorTrail from "@/components/ui/CursorTrail";
import HeroStickerFlip from "@/components/sections/hero/HeroStickerFlip";
import FeaturesBentoGridCta from "@/components/sections/features/FeaturesBentoGridCta";
import FeaturesCarouselMarquee from "@/components/sections/features/FeaturesCarouselMarquee";
import FeaturesParallaxShowcase from "@/components/sections/features/FeaturesParallaxShowcase";
import FooterBasic from "@/components/sections/footer/FooterBasic";
import "./theme.css";

export default function AnyaTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="bounce">
        <SiteBackgroundSlot />
        <CursorTrail color={{ r: 76, g: 175, b: 80 }} />

        <div id="hero" data-section="hero">
          <HeroStickerFlip
            title="Hey, I'm Anya"
            description="Blogger & Traveler"
            imageSrc="https://storage.googleapis.com/webild/default/templates/anya/hero.webp"
            backTextSegments={[
              { type: "text", content: "I'm currently " },
              { type: "photo", src: "https://storage.googleapis.com/webild/default/templates/anya/inline-photo.webp" },
              { type: "highlight", content: " traveling all over the world " },
              { type: "text", content: "capturing moments, " },
              { type: "highlight", content: "writing stories " },
              { type: "text", content: "and sharing the " },
              { type: "highlight", content: "places I love" },
            ]}
            clickBadgeText="Click me!"
            stickerImageSrcs={[
              "https://storage.googleapis.com/webild/default/templates/anya/stickers/mixtape.webp",
              "https://storage.googleapis.com/webild/default/templates/anya/stickers/flowers.webp",
              "https://storage.googleapis.com/webild/default/templates/anya/stickers/toast.webp",
              "https://storage.googleapis.com/webild/default/templates/anya/stickers/passport.webp",
              "https://storage.googleapis.com/webild/default/templates/anya/stickers/cd.webp",
              "https://storage.googleapis.com/webild/default/templates/anya/stickers/reading.webp",
              "https://storage.googleapis.com/webild/default/templates/anya/stickers/watercolors.webp",
              "https://storage.googleapis.com/webild/default/templates/anya/stickers/orange.webp",
            ]}
            socialLinks={[
              { iconSrc: "https://storage.googleapis.com/webild/default/templates/anya/icons/instagram.svg", href: "#", label: "Instagram" },
              { iconSrc: "https://storage.googleapis.com/webild/default/templates/anya/icons/tiktok.svg", href: "#", label: "TikTok" },
              { iconSrc: "https://storage.googleapis.com/webild/default/templates/anya/icons/twitter.svg", href: "#", label: "Twitter" },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <FeaturesBentoGridCta
            textAnimation="fade"
            tag="A Little About Me"
            title="The Things That Make Me, Me"
            description="Family, adventures, and a camera that goes everywhere I do."
            features={[
              { title: "Family First", description: "The people who shaped who I am and who I carry with me everywhere.", imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/bento/family.webp" },
              { title: "Wanderlust", description: "New cities, unfamiliar streets, and the feeling of being wonderfully lost.", imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/bento/wanderlust.webp" },
              { title: "Through My Lens", description: "Photography isn't just a hobby — it's how I remember everything.", imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/bento/lens.webp" },
              { title: "Good Food, Good Mood", description: "Every place has a dish that tells you more than any guidebook could.", imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/bento/food.webp" },
            ]}
            ctaButton={{ text: "Let's connect!", href: "#contact", avatarSrc: "https://storage.googleapis.com/webild/default/templates/anya/hero.webp", avatarLabel: "You" }}
          />
        </div>

        <div id="milestones" data-section="milestones">
          <FeaturesCarouselMarquee
            textAnimation="fade"
            tag="Life in Frames"
            title="Moments I'll Never Forget"
            description="Big milestones, quiet sunsets, and everything worth remembering in between."
            primaryButton={{ text: "See the full gallery", href: "#gallery" }}
            secondaryButton={{ text: "Follow my journey", href: "#follow" }}
            items={[
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/carousel/graduation.webp", label: "Graduation Day" },
              { imageSrc: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&q=80", label: "Swiss Alps" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/carousel/solo-trip.webp", label: "First Solo Trip" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/carousel/golden-hour.webp", label: "Golden Hour" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/carousel/turning-25.webp", label: "Turning 25" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/anya/carousel/island-life.webp", label: "Island Life" },
            ]}
          />
        </div>

        <div id="showcase" data-section="showcase">
          <FeaturesParallaxShowcase
            title="Say Cheeeese! 📸"
            backgroundSrc="https://storage.googleapis.com/webild/default/templates/anya/parallax-bg.webp"
            leftImageSrc="https://storage.googleapis.com/webild/default/templates/anya/float/hibiscus.webp"
            rightImageSrc="https://storage.googleapis.com/webild/default/templates/anya/float/coconut.webp"
          />
        </div>

        <FooterBasic
          columns={[
            { title: "Follow", items: [{ label: "Instagram", href: "#" }, { label: "TikTok", href: "#" }, { label: "Twitter", href: "#" }] },
            { title: "Explore", items: [{ label: "Blog", href: "#" }, { label: "Gallery", href: "#gallery" }, { label: "About", href: "#about" }] },
            { title: "Connect", items: [{ label: "Contact", href: "#contact" }, { label: "Collaborate", href: "#" }] },
          ]}
          leftText="© 2025 Anya. All rights reserved."
          rightText="Made with love"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
