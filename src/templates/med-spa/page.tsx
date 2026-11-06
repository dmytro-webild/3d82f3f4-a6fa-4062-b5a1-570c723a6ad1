import { ShieldCheck, Clock, Award, Heart, BadgeCheck } from "lucide-react";
import { ReactLenis } from "lenis/react";
import NavbarCentered from "@/components/ui/NavbarCentered";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroOverlayMarquee from "@/components/sections/hero/HeroOverlayMarquee";
import TeamGlassCards from "@/components/sections/team/TeamGlassCards";
import FeaturesResultsComparison from "@/components/sections/features/FeaturesResultsComparison";
import TestimonialTrustCard from "@/components/sections/testimonial/TestimonialTrustCard";
import TeamOverlayCardsGrid from "@/components/sections/team/TeamOverlayCardsGrid";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimpleCard from "@/components/sections/footer/FooterSimpleCard";
import "./theme.css";

export default function MedSpaTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="aurora" heroBackground="none" buttonVariant="arrow">
        <SiteBackgroundSlot />

        <NavbarCentered
          logo="Lumière Med Spa"
          navItems={[
            { name: "Services", href: "#services" },
            { name: "Results", href: "#results" },
            { name: "Team", href: "#team" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Book Now", href: "#contact" }}
        />

        <div id="hero" data-section="hero">
          <HeroOverlayMarquee
            textAnimation="fade-blur"
            tag="Aesthetic Medicine"
            title="Where Science Meets Beauty"
            description="Advanced aesthetic treatments in a serene, luxurious setting. Our board-certified specialists deliver natural-looking results tailored to you."
            primaryButton={{ text: "Book an Appointment", href: "#contact" }}
            secondaryButton={{ text: "(555) 320-8800", href: "tel:5553208800" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/med-spa/hero/hero.webp"
            avatarsSrc={[
              "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-doctor-1.webp",
              "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-1.webp",
              "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-doctor-2.webp",
            ]}
            avatarsLabel="Trusted by 2,000+ clients"
            items={[
              { text: "Board-Certified Specialists", icon: ShieldCheck },
              { text: "Same-Day Appointments", icon: Clock },
              { text: "10+ Years Experience", icon: Award },
              { text: "Natural-Looking Results", icon: Heart },
              { text: "FDA-Approved Treatments", icon: BadgeCheck },
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <TeamGlassCards
            textAnimation="fade-blur"
            tag="Our Services"
            title="Treatments We Offer"
            description="Personalized aesthetic treatments designed to enhance your natural beauty."
            members={[
              {
                name: "Botox & Fillers",
                role: "Smooth fine lines and restore volume",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/services/service1.webp",
              },
              {
                name: "Laser Skin Resurfacing",
                role: "Reduce scars, wrinkles, and sun damage",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/services/service2.webp",
              },
              {
                name: "Chemical Peels",
                role: "Reveal brighter, smoother skin",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/services/service3.webp",
              },
              {
                name: "Microneedling",
                role: "Boost collagen and firm your skin",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/services/service4.webp",
              },
              {
                name: "Body Contouring",
                role: "Non-invasive sculpting and tightening",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/services/service5.webp",
              },
              {
                name: "IV Therapy",
                role: "Hydration and wellness from within",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/services/service6.webp",
              },
            ]}
          />
        </div>

        <div id="results" data-section="results">
          <FeaturesResultsComparison
            textAnimation="fade-blur"
            tag="Before & After"
            title="Real Results"
            description="See the transformations our clients experience with our treatments."
            items={[
              {
                treatment: "Botox & Fillers",
                detail: "2 sessions · 4 weeks",
                beforeSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/before-1.webp",
                afterSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/after-1.webp",
              },
              {
                treatment: "Laser Resurfacing",
                detail: "3 sessions · 6 weeks",
                beforeSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/before-2.webp",
                afterSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/after-2.webp",
              },
              {
                treatment: "Chemical Peel",
                detail: "4 sessions · 8 weeks",
                beforeSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/before-3.webp",
                afterSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/after-3.webp",
              },
              {
                treatment: "Microneedling",
                detail: "6 sessions · 12 weeks",
                beforeSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/before-4.webp",
                afterSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/after-4.webp",
              },
              {
                treatment: "Body Contouring",
                detail: "4 sessions · 8 weeks",
                beforeSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/before-5.webp",
                afterSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/after-5.webp",
              },
              {
                treatment: "IV Therapy Glow",
                detail: "Monthly · 3 months",
                beforeSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/before-6.webp",
                afterSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/after-6.webp",
              },
              {
                treatment: "Skin Rejuvenation",
                detail: "5 sessions · 10 weeks",
                beforeSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/before-7.webp",
                afterSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/results/after-7.webp",
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialTrustCard
            textAnimation="fade-blur"
            quote="The results are so natural — my friends just say I look well-rested. The team at Lumière made me feel completely comfortable from the first consultation."
            rating={5}
            author="Olivia M., Botox Client"
            avatars={[
              { name: "Olivia M.", imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-1.webp" },
              { name: "Rachel S.", imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-2.webp" },
              { name: "Danielle K.", imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-3.webp" },
              { name: "Emily T.", imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-doctor-1.webp" },
              { name: "Sophia L.", imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-doctor-2.webp" },
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamOverlayCardsGrid
            textAnimation="fade-blur"
            tag="Our Team"
            title="Meet the Experts"
            description="Board-certified professionals dedicated to your care and confidence."
            members={[
              {
                name: "Dr. Elena Vasquez",
                role: "Medical Director",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-doctor-1.webp",
              },
              {
                name: "Emily Wright",
                role: "Laser Technician",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-2.webp",
              },
              {
                name: "Maria Lopez",
                role: "Aesthetic Nurse",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-1.webp",
              },
              {
                name: "Dr. Natalie Kim",
                role: "Dermatologist",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-doctor-2.webp",
              },
              {
                name: "Sophie Taylor",
                role: "Patient Coordinator",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-3.webp",
              },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSimple
            textAnimation="fade-blur"
            tag="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know before your first visit."
            items={[
              {
                question: "Is Botox safe?",
                answer: "Yes. Botox has been FDA-approved for cosmetic use for over 20 years. Our board-certified injectors use precise techniques to ensure safe, natural-looking results with minimal downtime.",
              },
              {
                question: "How long do filler results last?",
                answer: "Depending on the type of filler and treatment area, results typically last 6 to 18 months. We'll discuss expected longevity during your consultation and create a maintenance plan.",
              },
              {
                question: "What should I expect during my first visit?",
                answer: "Your first visit includes a complimentary consultation where we discuss your goals, assess your skin, and recommend a personalized treatment plan. There's no pressure to commit on the same day.",
              },
              {
                question: "Is there downtime after treatments?",
                answer: "Most of our treatments have little to no downtime. Botox and fillers may cause mild redness for a few hours. Laser and microneedling may require 2-5 days of recovery depending on the intensity.",
              },
              {
                question: "Do you offer financing options?",
                answer: "Yes, we partner with CareCredit and Cherry to offer flexible financing plans. We also offer package pricing for multi-session treatments to help make your goals more affordable.",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            textAnimation="fade-blur"
            tag="Contact"
            title="Book Your Consultation"
            description="Tell us about your goals and we'll create a personalized treatment plan."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number" },
            ]}
            textarea={{ name: "message", placeholder: "Tell us about your goals...", rows: 4, required: true }}
            buttonText="Request Appointment"
            imageSrc="https://storage.googleapis.com/webild/default/templates/med-spa/services/service1.webp"
          />
        </div>

        <FooterSimpleCard
          brand="Lumière Med Spa"
          columns={[
            {
              title: "Treatments",
              items: [
                { label: "Botox & Fillers", href: "#services" },
                { label: "Laser Resurfacing", href: "#services" },
                { label: "Chemical Peels", href: "#services" },
                { label: "Microneedling", href: "#services" },
                { label: "Body Contouring", href: "#services" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Careers", href: "#" },
              ],
            },
            {
              title: "Contact",
              items: [
                { label: "(555) 320-8800", href: "tel:5553208800" },
                { label: "hello@lumieremedspa.com", href: "mailto:hello@lumieremedspa.com" },
                { label: "Beverly Hills, CA" },
              ],
            },
          ]}
          copyright="© 2026 Lumière Med Spa"
          links={[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
          ]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
