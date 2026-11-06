import NavbarCentered from "@/components/ui/NavbarCentered";
import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import FeaturesRevealCards from "@/components/sections/features/FeaturesRevealCards";
import MetricsMediaCards from "@/components/sections/metrics/MetricsMediaCards";
import FeaturesDetailedCards from "@/components/sections/features/FeaturesDetailedCards";
import TestimonialOverlayCards from "@/components/sections/testimonial/TestimonialOverlayCards";
import FaqTwoColumn from "@/components/sections/faq/FaqTwoColumn";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import "./theme.css";

export default function RoofingTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" buttonVariant="elastic">
        <SiteBackgroundSlot />

        <NavbarCentered
          logo="Summit Roofing"
          navItems={[
            { name: "About", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "FAQ", href: "#faq" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Free Estimate", href: "#contact" }}
        />

        <div id="hero" data-section="hero">
          <HeroBillboard
            textAnimation="slide-up"
            avatarsSrc={[
              "https://storage.googleapis.com/webild/default/templates/roofing/robert-thompson.webp",
              "https://storage.googleapis.com/webild/default/templates/roofing/maria-gonzalez.webp",
              "https://storage.googleapis.com/webild/default/templates/roofing/steve-amy-collins.webp",
              "https://storage.googleapis.com/webild/default/templates/roofing/patricia-nguyen.webp",
            ]}
            avatarsLabel="500+ Happy Customers"
            title="Your Roof. Our Reputation."
            description="Trusted by homeowners for over 25 years. From storm damage repairs to full roof replacements, Summit Roofing delivers quality craftsmanship you can count on."
            primaryButton={{ text: "Get Free Estimate", href: "#contact" }}
            secondaryButton={{ text: "Our Services", href: "#services" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/roofing/hero-main.webp"
          />
        </div>

        <div id="about" data-section="about">
          <AboutFeaturesSplit
            textAnimation="slide-up"
            tag="About Us"
            title="Built on Trust. Backed by Results."
            description="Summit Roofing has been protecting homes since 1999. We combine old-school craftsmanship with modern materials and techniques to deliver roofs that last a lifetime."
            items={[
              {
                icon: "Shield",
                title: "Licensed & Insured",
                description: "Fully licensed, bonded, and insured for your complete peace of mind.",
              },
              {
                icon: "Wrench",
                title: "Lifetime Warranty",
                description: "Every installation backed by our industry-leading lifetime workmanship warranty.",
              },
              {
                icon: "Search",
                title: "Free Inspections",
                description: "Complimentary roof inspections with honest assessments — no pressure, no hidden fees.",
              },
            ]}
            imageSrc="https://storage.googleapis.com/webild/default/templates/roofing/hero.webp"
          />
        </div>

        <div id="services" data-section="services">
          <FeaturesRevealCards
            textAnimation="slide-up"
            tag="Our Services"
            title="Our Roofing Services"
            description="From new installations to emergency repairs, we have your roof covered."
            items={[
              {
                title: "Roof Installation",
                description: "Complete roof installations using premium materials from GAF, Owens Corning, and CertainTeed.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/roofing-installation.webp",
              },
              {
                title: "Roof Repair",
                description: "Fast, reliable repairs for leaks, missing shingles, flashing damage, and storm damage.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/roofing-repair.webp",
              },
              {
                title: "Roof Inspection",
                description: "Detailed inspections with photo documentation and transparent repair recommendations.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/roofing-inspection.webp",
              },
              {
                title: "Emergency Services",
                description: "24/7 emergency tarping and repairs when storms hit. We respond within hours, not days.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/emergency-services.webp",
              },
            ]}
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricsMediaCards
            textAnimation="slide-up"
            tag="Our Track Record"
            title="The Numbers Speak for Themselves"
            description="Decades of experience and thousands of satisfied homeowners stand behind every Summit roof."
            metrics={[
              {
                value: "500+",
                title: "Roofs Completed",
                description: "Over 500 residential and commercial roofing projects delivered on time and on budget.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/roofs-completed.webp",
              },
              {
                value: "25+",
                title: "Years Experience",
                description: "A quarter century of protecting homes with quality materials and expert installation.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/years-experience.webp",
              },
              {
                value: "98%",
                title: "Customer Satisfaction",
                description: "Nearly every homeowner we work with recommends Summit Roofing to their friends and neighbors.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/customer-satisfaction.webp",
              },
            ]}
          />
        </div>

        <div id="process" data-section="process">
          <FeaturesDetailedCards
            textAnimation="slide-up"
            tag="How We Work"
            title="Our Process"
            description="From first call to final inspection, our process is designed to be simple, transparent, and stress-free."
            items={[
              {
                title: "Free Inspection",
                description: "We start with a thorough roof inspection and provide an honest assessment with photos — completely free, no obligations.",
                tags: ["Schedule Online", "Photo Report", "Honest Recommendation"],
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/free-inspection.webp",
              },
              {
                title: "Custom Proposal",
                description: "You'll receive a clear, itemized proposal with material options, timeline, and pricing — no hidden fees or surprises.",
                tags: ["Transparent Pricing", "Insurance Assistance", "Material Selection"],
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/custom-proposal.webp",
              },
              {
                title: "Expert Installation",
                description: "Our certified crew handles everything — from tear-off to cleanup. Most jobs are completed in just 1-2 days.",
                tags: ["Certified Crew", "Premium Materials", "Full Cleanup"],
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/about.webp",
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialOverlayCards
            textAnimation="slide-up"
            tag="Testimonials"
            title="What Our Customers Say"
            description="Don't just take our word for it — hear from homeowners who trust Summit with their roofs."
            testimonials={[
              {
                name: "Robert Thompson",
                role: "Homeowner",
                company: "Dallas, TX",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/robert-thompson.webp",
              },
              {
                name: "Maria Gonzalez",
                role: "Homeowner",
                company: "Arlington, TX",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/maria-gonzalez.webp",
              },
              {
                name: "Steve & Amy Collins",
                role: "Homeowners",
                company: "Frisco, TX",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/steve-amy-collins.webp",
              },
              {
                name: "Patricia Nguyen",
                role: "Homeowner",
                company: "McKinney, TX",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/roofing/patricia-nguyen.webp",
              },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqTwoColumn
            textAnimation="slide-up"
            tag="FAQ"
            title="Frequently Asked Questions"
            description="Get answers to common questions about our roofing services, warranties, and process."
            items={[
              {
                question: "How long does a typical roof replacement take?",
                answer: "Most residential roof replacements are completed in 1-3 days depending on the size and complexity of the project. We'll provide an estimated timeline during your free consultation.",
              },
              {
                question: "Do you help with insurance claims?",
                answer: "Yes! We work directly with all major insurance companies and guide you through the entire claims process — from initial inspection to final paperwork. Our team ensures you get the coverage you deserve.",
              },
              {
                question: "What roofing materials do you use?",
                answer: "We use premium materials from trusted manufacturers like GAF, Owens Corning, and CertainTeed. We offer asphalt shingles, metal roofing, tile, and flat roof systems to match your home and budget.",
              },
              {
                question: "What does your warranty cover?",
                answer: "Our lifetime workmanship warranty covers all labor and installation defects. Additionally, manufacturer warranties cover the materials themselves — typically 25-50 years depending on the product.",
              },
              {
                question: "How do I know if my roof needs replacing?",
                answer: "Common signs include missing or curling shingles, granules in gutters, visible sagging, daylight through the attic, and a roof age over 20 years. We offer free inspections to assess your roof's condition.",
              },
              {
                question: "Do you offer financing options?",
                answer: "Yes, we offer flexible financing plans with competitive rates so you can protect your home without straining your budget. Ask about our 0% interest options during your free estimate.",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            textAnimation="slide-up"
            tag="Contact Us"
            title="Get Your Free Estimate"
            description="Fill out the form below and one of our roofing experts will get back to you within 24 hours."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Your Email", required: true },
              { name: "phone", type: "tel", placeholder: "Your Phone Number" },
            ]}
            textarea={{ name: "message", placeholder: "Tell us about your roofing needs...", rows: 5, required: true }}
            buttonText="Request Free Estimate"
            imageSrc="https://storage.googleapis.com/webild/default/templates/roofing/contact.webp"
          />
        </div>

        <FooterSimple
          brand="Summit Roofing"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Roof Installation", href: "#services" },
                { label: "Roof Repair", href: "#services" },
                { label: "Roof Inspection", href: "#services" },
                { label: "Emergency Services", href: "#services" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Free Estimate", href: "#contact" },
              ],
            },
            {
              title: "Contact",
              items: [
                { label: "(555) 123-4567", href: "tel:5551234567" },
                { label: "info@summitroofing.com", href: "mailto:info@summitroofing.com" },
                { label: "Dallas, TX" },
              ],
            },
          ]}
          copyright="© 2026 | Summit Roofing"
          links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
