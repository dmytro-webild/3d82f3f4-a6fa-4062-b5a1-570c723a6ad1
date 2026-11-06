import { Leaf, Droplets, Sprout, Wind, Globe, Truck, Package } from "lucide-react";
import { ReactLenis } from "lenis/react";
import NavbarFloating from "@/components/ui/NavbarFloating";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroBillboardBrand from "@/components/sections/hero/HeroBillboardBrand";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import ProductMediaCards from "@/components/sections/product/ProductMediaCards";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import TestimonialTrustCard from "@/components/sections/testimonial/TestimonialTrustCard";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimpleCard from "@/components/sections/footer/FooterSimpleCard";
import "./theme.css";

export default function SkincareTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="aurora" buttonVariant="shift">
        <SiteBackgroundSlot />

        <NavbarFloating
          logo="Luminé Skincare"
          navItems={[
            { name: "Products", href: "#products" },
            { name: "About", href: "#about" },
            { name: "Benefits", href: "#benefits" },
            { name: "Reviews", href: "#reviews" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Shop Now", href: "#products" }}
        />

        <div id="hero" data-section="hero">
          <HeroBillboardBrand
            textAnimation="fade"
            brand="Luminé"
            description="Pure, natural skincare formulated for radiant, healthy skin. Discover the power of botanical ingredients and scientific innovation."
            primaryButton={{ text: "Call Us", href: "tel:5551234567" }}
            secondaryButton={{ text: "Email Us", href: "mailto:hello@lumine.com" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/hero.webp"
          />
        </div>

        <div id="about" data-section="about">
          <AboutTextSplit
            textAnimation="fade"
            title="Crafted with nature's finest elements"
            descriptions={[
              "Our skincare line combines cutting-edge science with natural, sustainably-sourced ingredients to deliver exceptional results for your skin.",
              "Each product is carefully formulated to nourish, protect, and revitalize your complexion, helping you achieve the radiant, healthy skin you deserve.",
            ]}
            primaryButton={{ text: "Learn More", href: "#benefits" }}
          />
        </div>

        <div id="products" data-section="products">
          <ProductMediaCards
            textAnimation="fade"
            tag="Our Collection"
            title="Our Signature Collection"
            description="Discover our carefully curated skincare essentials designed to nourish and revitalize your skin. Worldwide shipping available."
            products={[
              {
                name: "Hydrating Moisturizer",
                price: "$68",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image2.webp",
              },
              {
                name: "Radiance Serum",
                price: "$85",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image3.webp",
              },
              {
                name: "Purifying Face Mask",
                price: "$52",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image1.webp",
              },
            ]}
          />
        </div>

        <div id="benefits" data-section="benefits">
          <FeaturesBento
            textAnimation="fade"
            tag="Why Luminé"
            title="Why Choose Luminé"
            description="Scientifically-formulated skincare products that deliver visible results with natural, sustainable ingredients. Available for worldwide shipping."
            features={[
              {
                title: "Worldwide Shipping",
                description: "Fast and reliable delivery to over 150 countries worldwide",
                bentoComponent: "info-card-marquee",
                infoCards: [
                  { icon: Globe, label: "Countries", value: "150+" },
                  { icon: Truck, label: "Delivery", value: "Fast" },
                  { icon: Package, label: "Tracking", value: "Live" },
                ],
              },
              {
                title: "Clinically Proven",
                description: "Dermatologist-tested and proven effective in clinical trials",
                bentoComponent: "animated-bar-chart",
              },
              {
                title: "Sustainable",
                description: "Eco-conscious packaging and ethical sourcing practices",
                bentoComponent: "orbiting-icons",
                centerIcon: Leaf,
                orbitIcons: [Droplets, Sprout, Wind],
              },
            ]}
          />
        </div>

        <div id="reviews" data-section="reviews">
          <TestimonialTrustCard
            textAnimation="fade"
            quote="Luminé skincare has completely transformed my routine. My skin feels more radiant and healthy than ever before. I love that it's made with natural ingredients I can trust. Plus, worldwide shipping made it so easy to get my products delivered wherever I am."
            rating={5}
            author="Sarah Mitchell, Beauty Editor"
            avatars={[
              { name: "Sarah Mitchell", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image5.avif" },
              { name: "Customer 2", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image6.avif" },
              { name: "Customer 3", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image7.avif" },
              { name: "Customer 4", imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image8.avif" },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textAnimation="fade"
            tag="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our skincare products, worldwide shipping, and delivery."
            items={[
              {
                question: "How long does it take to see results?",
                answer: "Most customers notice visible improvements in skin texture and radiance within 2-4 weeks of consistent use. For more significant results like reduced fine lines or hyperpigmentation, allow 6-8 weeks.",
              },
              {
                question: "Are your products suitable for sensitive skin?",
                answer: "Yes! All Luminé products are formulated to be gentle and non-irritating. We use natural ingredients and avoid common irritants. We recommend patch testing first if you have very reactive skin.",
              },
              {
                question: "Do you offer worldwide shipping?",
                answer: "Absolutely! We ship to over 150 countries worldwide. Standard shipping typically takes 7-14 business days depending on your location. Express shipping options are also available for faster delivery.",
              },
              {
                question: "What is your return policy?",
                answer: "We offer a 60-day satisfaction guarantee on all purchases. If you're not completely happy with your skincare, return it for a full refund or exchange. Worldwide returns are processed efficiently through our international shipping partners.",
              },
            ]}
            imageSrc="https://storage.googleapis.com/webild/default/templates/skincare/image4.webp"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            textAnimation="fade"
            tag="Newsletter"
            title="Get Your Glow On"
            description="Subscribe to our newsletter for skincare tips, product launches, and exclusive worldwide shipping offers delivered to your inbox."
            inputPlaceholder="Enter your email"
            buttonText="Subscribe"
          />
        </div>

        <FooterSimpleCard
          brand="Luminé"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Moisturizers", href: "#products" },
                { label: "Serums", href: "#products" },
                { label: "Masks", href: "#products" },
                { label: "Bundles", href: "#products" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Sustainability", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ],
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Worldwide Shipping", href: "#" },
                { label: "Returns", href: "#" },
              ],
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "Pinterest", href: "#" },
                { label: "TikTok", href: "#" },
              ],
            },
          ]}
          copyright="© 2025 Luminé Skincare. All rights reserved."
          links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
