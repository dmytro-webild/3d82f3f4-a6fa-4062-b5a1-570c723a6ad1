import NavbarFloating from "@/components/ui/NavbarFloating";
import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import HeroTiltedCards from "@/components/sections/hero/HeroTiltedCards";
import AboutMediaOverlay from "@/components/sections/about/AboutMediaOverlay";
import ProductVariantCards from "@/components/sections/product/ProductVariantCards";
import FeaturesRevealCards from "@/components/sections/features/FeaturesRevealCards";
import TeamOverlayCards from "@/components/sections/team/TeamOverlayCards";
import MetricsIconCards from "@/components/sections/metrics/MetricsIconCards";
import TestimonialSplitCards from "@/components/sections/testimonial/TestimonialSplitCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterBasic from "@/components/sections/footer/FooterBasic";
import "./theme.css";

export default function RealEstateTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider heroBackground="gradientBars" buttonVariant="magnetic">

        <NavbarFloating
          logo="Luxe Properties"
          navItems={[
            { name: "Properties", href: "#properties" },
            { name: "About", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "Team", href: "#team" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Schedule Viewing", href: "#contact" }}
        />

        <div id="hero" data-section="hero">
          <HeroTiltedCards
            textAnimation="slide-up"
            tag="Premium Collections"
            title="Discover Luxury Living in Dubai"
            description="Exclusive properties curated for discerning buyers. Experience the pinnacle of sophistication with our award-winning real estate portfolio."
            primaryButton={{ text: "Explore Properties", href: "#properties" }}
            secondaryButton={{ text: "Contact Agent", href: "#contact" }}
            items={[
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/hero/hero1.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/hero/hero2.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/hero/hero3.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/hero/hero4.webp" },
              { imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/hero/hero5.webp" },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <AboutMediaOverlay
            textAnimation="slide-up"
            tag="About Us"
            title="Your Trusted Dubai Real Estate Partner"
            description="With over 15 years of excellence in Dubai's luxury real estate market, we have established ourselves as the premier boutique agency for discerning international clientele. Our expert team specializes in sourcing and curating the finest properties across Dubai's most exclusive communities."
            primaryButton={{ text: "Learn Our Story", href: "#services" }}
            secondaryButton={{ text: "Contact Us", href: "#contact" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/real-estate/about/about.webp"
          />
        </div>

        <div id="properties" data-section="properties">
          <ProductVariantCards
            textAnimation="slide-up"
            tag="Exclusive Listings"
            title="Featured Properties"
            description="Handpicked luxury properties showcasing the finest real estate opportunities in Dubai's most prestigious locations."
            primaryButton={{ text: "See all properties", href: "#properties" }}
            products={[
              {
                name: "Palm Jumeirah Villa",
                variant: "5 Bed Villa | Beachfront",
                price: "AED 12,500,000",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/properties/property1.webp",
              },
              {
                name: "Downtown Dubai Penthouse",
                variant: "4 Bed Penthouse | City View",
                price: "AED 8,750,000",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/properties/property2.webp",
              },
              {
                name: "Emirates Hills Townhouse",
                variant: "4 Bed Townhouse | Golf View",
                price: "AED 6,200,000",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/properties/property3.webp",
              },
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <FeaturesRevealCards
            textAnimation="slide-up"
            tag="Professional Services"
            title="Our Services & Expertise"
            description="Comprehensive real estate solutions tailored to meet your unique needs and aspirations."
            items={[
              {
                title: "Property Selection",
                description: "Exclusive access to off-market and hand-selected luxury properties.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/services/service1.webp",
              },
              {
                title: "Investment Advisory",
                description: "Expert insights into market trends and investment opportunities.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/services/service2.webp",
              },
              {
                title: "Negotiation & Closing",
                description: "Strategic negotiation and seamless transaction management.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/services/service3.webp",
              },
              {
                title: "Legal Compliance",
                description: "Full support with documentation, permits, and regulatory compliance.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/services/service4.webp",
              },
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamOverlayCards
            textAnimation="slide-up"
            tag="Our Leadership"
            title="Executive Team"
            description="Meet the visionary leaders guiding Luxe Properties with expertise and dedication."
            members={[
              {
                name: "Hassan Al-Maktoum",
                role: "CEO",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/team/team1.webp",
              },
              {
                name: "Layla Al-Mansoori",
                role: "COO",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/team/team2.webp",
              },
              {
                name: "Marcus Wellington",
                role: "CIO",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/team/team3.webp",
              },
            ]}
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricsIconCards
            textAnimation="slide-up"
            tag="Track Record"
            title="By The Numbers"
            description="Our proven track record speaks to our commitment and success in Dubai's luxury real estate market."
            metrics={[
              { icon: "Home", title: "Properties Sold", value: "450+" },
              { icon: "Users", title: "Satisfied Clients", value: "650+" },
              { icon: "DollarSign", title: "Total Value", value: "$2.3B" },
              { icon: "TrendingUp", title: "Countries", value: "45" },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialSplitCards
            textAnimation="slide-up"
            tag="Client Testimonials"
            title="What Our Clients Say"
            description="Experience through the words of satisfied buyers and investors who found their dream properties with us."
            testimonials={[
              {
                tag: "Premium Portfolio",
                title: "Exceptional Service & Market Expertise",
                quote: "The team at Luxe Properties demonstrated outstanding knowledge of the Dubai market. Their negotiation skills saved me significant time and money. I would not hesitate to recommend them for any luxury property transaction.",
                name: "Ahmed Al Mansouri",
                date: "September 2024",
                avatarImageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/testimonials/avatar1.webp",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/testimonials/testimonial1.webp",
              },
              {
                tag: "Penthouse Collection",
                title: "A Smooth & Sophisticated Experience",
                quote: "Finding a penthouse that matched my exacting standards seemed impossible, yet within weeks, the team presented three exceptional options. Their professionalism and attention to detail were impeccable throughout.",
                name: "Sarah Johnson",
                date: "August 2024",
                avatarImageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/testimonials/avatar2.webp",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/testimonials/testimonial2.webp",
              },
              {
                tag: "Investment Advisory",
                title: "Trusted Partner for International Clients",
                quote: "As a foreign investor, I appreciated the comprehensive legal and financial guidance. The team navigated complex regulations effortlessly, allowing me to invest with complete confidence.",
                name: "Michael Chen",
                date: "July 2024",
                avatarImageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/testimonials/avatar3.webp",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/testimonials/testimonial3.webp",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCta
            textAnimation="slide-up"
            tag="Get In Touch"
            text="Ready to Find Your Dream Property?"
            primaryButton={{ text: "Schedule Consultation", href: "#contact" }}
            secondaryButton={{ text: "Browse Listings", href: "#properties" }}
          />
        </div>

        <FooterBasic
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Executive Team", href: "#team" },
                { label: "Properties", href: "#properties" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Resources",
              items: [
                { label: "Investment Guide", href: "#" },
                { label: "Market Reports", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Blog", href: "#" },
              ],
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
              ],
            },
          ]}
          leftText="© 2025 Luxe Properties Dubai. All rights reserved."
          rightText="Luxury Real Estate Excellence"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
