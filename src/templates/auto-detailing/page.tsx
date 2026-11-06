import NavbarCentered from "@/components/ui/NavbarCentered";
import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import HeroBillboardFeatures from "@/components/sections/hero/HeroBillboardFeatures";
import FeaturesStickyCards from "@/components/sections/features/FeaturesStickyCards";
import TestimonialMarqueeOverlayCards from "@/components/sections/testimonial/TestimonialMarqueeOverlayCards";
import FeaturesComparison from "@/components/sections/features/FeaturesComparison";
import TeamOverlayCards from "@/components/sections/team/TeamOverlayCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimpleCard from "@/components/sections/footer/FooterSimpleCard";
import "./theme.css";

export default function DetailingTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider heroBackground="lightRaysCenter" buttonVariant="expand">
        <NavbarCentered
          logo="Elite Detail"
          navItems={[
            { name: "Services", href: "#services" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Why Us", href: "#why-us" },
            { name: "Team", href: "#team" },
            { name: "FAQ", href: "#faq" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Book Now", href: "#contact" }}
        />

        <HeroBillboardFeatures
          textAnimation="slide-up"
          badge="Now Booking"
          title="Your Car Deserves the Best"
          description="Professional detailing services that restore your vehicle's showroom finish. We use premium products and proven techniques to protect and enhance every surface."
          primaryButton={{ text: "Book Now", href: "#contact" }}
          secondaryButton={{ text: "Our Services", href: "#services" }}
          videoSrc="https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4"
          features={[
            {
              icon: "Shield",
              title: "Ceramic Protection",
              description: "Industry-leading coating with 5-year warranty",
            },
            {
              icon: "Star",
              title: "5-Star Rated",
              description: "Trusted by 500+ happy customers",
            },
            {
              icon: "Award",
              title: "Certified Detailers",
              description: "IDA certified professionals on every job",
            },
          ]}
        />

        <div id="services">
          <FeaturesStickyCards
            items={[
              {
                title: "Interior Detail",
                description: "Deep cleaning of seats, carpets, dashboard, and all interior surfaces. Leather conditioning and fabric protection included.",
                primaryButton: { text: "Book Interior", href: "#contact" },
                leftImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/feature1.webp",
                rightImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/team/team1.webp",
              },
              {
                title: "Exterior Detail",
                description: "Hand wash, clay bar treatment, polish, and premium wax application for a mirror-like finish that lasts.",
                primaryButton: { text: "Book Exterior", href: "#contact" },
                leftImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/team/team2.webp",
                rightImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/features2.webp",
              },
              {
                title: "Ceramic Coating",
                description: "Long-lasting ceramic protection that shields your paint from UV rays, chemicals, and minor scratches for years.",
                primaryButton: { text: "Book Ceramic", href: "#contact" },
                leftImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/features2.webp",
                rightImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/team/team3.webp",
              },
            ]}
          />
        </div>

        <div id="testimonials">
          <TestimonialMarqueeOverlayCards
            textAnimation="slide-up"
            tag="Testimonials"
            title="Hear It From Our Clients"
            description="Real results from real customers who trust us with their vehicles"
            primaryButton={{ text: "Book Now", href: "#contact" }}
            secondaryButton={{ text: "View Gallery", href: "#services" }}
            testimonials={[
              {
                name: "James Wilson",
                role: "BMW Owner",
                company: "Miami, FL",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial1.webp",
              },
              {
                name: "Maria Santos",
                role: "Tesla Owner",
                company: "Coral Gables, FL",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial2.webp",
              },
              {
                name: "David Chen",
                role: "Porsche Owner",
                company: "Brickell, FL",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial3.webp",
              },
              {
                name: "Sarah Thompson",
                role: "Mercedes Owner",
                company: "South Beach, FL",
                rating: 4,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial4.webp",
              },
              {
                name: "Michael Johnson",
                role: "Audi Owner",
                company: "Coconut Grove, FL",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial5.webp",
              },
            ]}
          />
        </div>

        <div id="why-us">
          <FeaturesComparison
            textAnimation="slide-up"
            tag="Why Us"
            title="The Detailing Difference"
            description="See why professional detailing is worth the investment"
            primaryButton={{ text: "Get Started", href: "#contact" }}
            negativeItems={[
              "Automatic car washes scratch paint",
              "DIY products leave swirl marks",
              "No protection against UV damage",
              "Interior stains and odors linger",
              "Resale value drops over time",
            ]}
            positiveItems={[
              "Hand wash and paint correction",
              "Flawless, swirl-free finish",
              "Ceramic coating blocks UV rays",
              "Deep interior sanitization",
              "Maintains and boosts resale value",
            ]}
          />
        </div>

        <div id="team">
          <TeamOverlayCards
            textAnimation="slide-up"
            tag="Our Experts"
            title="Meet the Team"
            description="Passionate detailers dedicated to perfection"
            members={[
              {
                name: "Marcus Rivera",
                role: "Lead Detailer",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial3.webp",
              },
              {
                name: "Jake Thompson",
                role: "Ceramic Specialist",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial4.webp",
              },
              {
                name: "Daniel Cruz",
                role: "Interior Expert",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial1.webp",
              },
            ]}
          />
        </div>

        <div id="faq">
          <FaqSimple
            textAnimation="slide-up"
            tag="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our detailing services"
            items={[
              {
                question: "How long does a full detail take?",
                answer: "A full interior and exterior detail typically takes 4-6 hours depending on the size and condition of your vehicle. Ceramic coating applications may require an additional day for proper curing.",
              },
              {
                question: "How often should I get my car detailed?",
                answer: "We recommend a full detail every 3-4 months to maintain your vehicle's appearance and protect its surfaces. Ceramic coated vehicles can go longer between details.",
              },
              {
                question: "What is ceramic coating and how long does it last?",
                answer: "Ceramic coating is a liquid polymer applied to your vehicle's exterior that creates a permanent bond with the paint. It provides superior protection against UV rays, chemicals, and minor scratches, lasting 2-5 years depending on the package.",
              },
              {
                question: "Do you offer mobile detailing services?",
                answer: "Yes, we offer mobile detailing for your convenience. Our fully equipped team can come to your home or office. Mobile service availability depends on your location and the package selected.",
              },
              {
                question: "What products do you use?",
                answer: "We exclusively use premium, professional-grade products that are safe for all vehicle surfaces. Our ceramic coatings are sourced from industry-leading manufacturers with proven durability and performance.",
              },
            ]}
          />
        </div>

        <div id="contact">
          <ContactSplitForm
            textAnimation="slide-up"
            tag="Contact"
            title="Get Your Free Estimate"
            description="Tell us about your project and we'll get back to you within 24 hours."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number" },
            ]}
            textarea={{ name: "message", placeholder: "Tell us about your vehicle...", rows: 4, required: true }}
            buttonText="Send Message"
            videoSrc="https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4"
          />
        </div>

        <FooterSimpleCard
          brand="Elite Detail"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Interior Detail", href: "#services" },
                { label: "Exterior Detail", href: "#services" },
                { label: "Ceramic Coating", href: "#services" },
                { label: "Full Detail Package", href: "#services" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Our Team", href: "#team" },
                { label: "FAQ", href: "#faq" },
                { label: "Testimonials", href: "#testimonials" },
              ],
            },
            {
              title: "Contact",
              items: [
                { label: "(555) 987-6543", href: "tel:5559876543" },
                { label: "info@elitedetail.com", href: "mailto:info@elitedetail.com" },
                { label: "Miami, FL" },
              ],
            },
          ]}
          copyright="© 2026 Elite Detail. All rights reserved."
          links={[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
