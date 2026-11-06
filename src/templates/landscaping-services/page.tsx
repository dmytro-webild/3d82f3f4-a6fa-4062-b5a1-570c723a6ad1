import NavbarCentered from "@/components/ui/NavbarCentered";
import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import HeroOverlayTestimonial from "@/components/sections/hero/HeroOverlayTestimonial";
import AboutTestimonial from "@/components/sections/about/AboutTestimonial";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import TeamGlassCards from "@/components/sections/team/TeamGlassCards";
import TeamOverlayCards from "@/components/sections/team/TeamOverlayCards";
import TestimonialAvatarCard from "@/components/sections/testimonial/TestimonialAvatarCard";
import FaqTwoColumn from "@/components/sections/faq/FaqTwoColumn";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import "./theme.css";

export default function LandscapingTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider buttonVariant="stagger">
        <NavbarCentered
          logo="GreenScape"
          navItems={[
            { name: "Services", href: "#services" },
            { name: "About", href: "#about" },
            { name: "Team", href: "#team" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Call Now", href: "#contact" }}
        />

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            textAnimation="slide-up"
            tag="Professional Landscaping"
            title="Transform Your Outdoor Space"
            description="Professional landscaping design, installation, and maintenance services. From lush gardens to stunning hardscapes, we bring your vision to life."
            primaryButton={{ text: "Get Free Estimate", href: "#contact" }}
            secondaryButton={{ text: "Our Services", href: "#services" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/landscaping/hero.jpg"
            testimonials={[
              {
                name: "Sarah M.",
                handle: "Homeowner",
                text: "GreenScape completely transformed our backyard. The team was professional, creative, and delivered beyond our expectations.",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-2.jpg",
              },
              {
                name: "David K.",
                handle: "Property Manager",
                text: "We've used GreenScape for all our commercial properties. Their maintenance plans keep everything looking pristine year-round.",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-1.jpg",
              },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <AboutTestimonial
            textAnimation="slide-up"
            tag="About GreenScape"
            quote="We've been transforming outdoor spaces for over 15 years — delivering designs that homeowners love and landscapes that last."
            author="James Carter"
            role="Lead Designer"
            videoSrc="https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4"
          />
        </div>

        <div id="services" data-section="services">
          <FeaturesDetailedSteps
            textAnimation="slide-up"
            tag="Our Services"
            title="What We Do"
            description="From design to maintenance, we handle every aspect of your landscape."
            steps={[
              {
                tag: "Design",
                title: "Landscape Design",
                subtitle: "Custom Plans",
                description: "We create tailored landscape designs that complement your property's architecture and your personal style.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-2.jpg",
              },
              {
                tag: "Installation",
                title: "Hardscape & Softscape",
                subtitle: "Full Installation",
                description: "From patios and walkways to gardens and trees, we handle the complete installation process.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-3.jpg",
              },
              {
                tag: "Maintenance",
                title: "Lawn & Garden Care",
                subtitle: "Ongoing Service",
                description: "Keep your property looking pristine year-round with our professional maintenance plans.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-4.jpg",
              },
              {
                tag: "Irrigation",
                title: "Smart Irrigation",
                subtitle: "Water Management",
                description: "Efficient irrigation systems that keep your landscape healthy while conserving water.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-5.jpg",
              },
            ]}
          />
        </div>

        <div id="why-us" data-section="why-us">
          <TeamGlassCards
            textAnimation="slide-up"
            tag=""
            title="Why Choose GreenScape"
            description="What sets us apart from the rest."
            members={[
              {
                name: "Expert Craftsmanship",
                role: "Decades of combined experience in landscape design and installation.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-6.jpg",
              },
              {
                name: "Eco-Friendly Approach",
                role: "Sustainable practices and native plant selections that thrive naturally.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-7.jpg",
              },
              {
                name: "Full-Service Care",
                role: "From initial design to ongoing maintenance, we handle everything.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-8.jpg",
              },
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamOverlayCards
            textAnimation="slide-up"
            tag="Our Team"
            title="Meet the Experts"
            description="The skilled professionals behind every beautiful landscape."
            members={[
              {
                name: "James Carter",
                role: "Lead Designer",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-11.jpg",
              },
              {
                name: "Maria Silva",
                role: "Horticulturist",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-10.jpg",
              },
              {
                name: "Ryan Mitchell",
                role: "Project Manager",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-9.jpg",
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialAvatarCard
            textAnimation="slide-up"
            tag="Trusted by Homeowners"
            title="Over 500 happy clients trust GreenScape to transform and maintain their outdoor spaces."
            primaryButton={{ text: "Contact Now", href: "#contact" }}
            avatars={[
              { name: "Sarah M.", imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-10.jpg" },
              { name: "David K.", imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-11.jpg" },
              { name: "Emily R.", imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-4.jpg" },
              { name: "Ryan M.", imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-9.jpg" },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqTwoColumn
            textAnimation="slide-up"
            tag="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our landscaping services."
            items={[
              {
                question: "How long does a typical landscaping project take?",
                answer: "Most residential projects take 1-3 weeks depending on scope. We'll provide a detailed timeline during your consultation so you know exactly what to expect.",
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! We offer complimentary on-site consultations where we assess your property, discuss your vision, and provide a detailed estimate — no obligation.",
              },
              {
                question: "What areas do you serve?",
                answer: "We serve the greater metropolitan area and surrounding suburbs within a 50-mile radius. Contact us to confirm service availability in your location.",
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer: "Absolutely. We offer weekly, bi-weekly, and monthly maintenance plans that include mowing, trimming, fertilization, and seasonal cleanups.",
              },
              {
                question: "Are your practices eco-friendly?",
                answer: "Yes, sustainability is core to our approach. We use native plants, organic fertilizers, smart irrigation, and environmentally responsible methods whenever possible.",
              },
              {
                question: "Do you handle permits and HOA approvals?",
                answer: "We handle all necessary permits and can work directly with your HOA to ensure your project meets community guidelines and gets approved smoothly.",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
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
            textarea={{ name: "message", placeholder: "Tell us about your project...", rows: 4, required: true }}
            buttonText="Send Message"
            imageSrc="https://storage.googleapis.com/webild/default/templates/landscaping/img-2.jpg"
          />
        </div>

        <FooterSimple
          brand="GreenScape"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Landscape Design", href: "#services" },
                { label: "Hardscape & Softscape", href: "#services" },
                { label: "Lawn & Garden Care", href: "#services" },
                { label: "Smart Irrigation", href: "#services" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "#about" },
                { label: "Team", href: "#team" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
              ],
            },
            {
              title: "Contact",
              items: [
                { label: "(555) 123-4567", href: "tel:5551234567" },
                { label: "hello@greenscape.com", href: "mailto:hello@greenscape.com" },
                { label: "Los Angeles, CA" },
              ],
            },
          ]}
          copyright="© 2026 GreenScape Landscaping"
          links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
