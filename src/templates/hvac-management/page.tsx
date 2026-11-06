import NavbarInline from "@/components/ui/NavbarInline";
import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";
import FeaturesAlternatingSplit from "@/components/sections/features/FeaturesAlternatingSplit";
import FeaturesTimelineCards from "@/components/sections/features/FeaturesTimelineCards";
import TestimonialRatingCards from "@/components/sections/testimonial/TestimonialRatingCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimpleMedia from "@/components/sections/footer/FooterSimpleMedia";
import "./theme.css";

export default function HvacTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="aurora" buttonVariant="arrow">
        <SiteBackgroundSlot />

        <NavbarInline
          logo="AirPro HVAC"
          navItems={[
            { name: "Services", href: "#services" },
            { name: "About", href: "#about" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Get a Quote", href: "#contact" }}
        />

        <div id="hero" data-section="hero">
          <HeroOverlay
            textAnimation="slide-up"
            tag="Professional HVAC Services"
            title="Your Comfort Is Our Priority"
            description="Professional heating, ventilation, and air conditioning services for homes and businesses. From installations to emergency repairs, we keep your climate perfect year-round."
            primaryButton={{ text: "Schedule Service", href: "#contact" }}
            secondaryButton={{ text: "Our Services", href: "#services" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/hvac/img-1.jpg"
            avatarsSrc={[
              "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-1.jpg",
              "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-2.jpg",
              "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-3.jpg",
              "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-1.jpg",
              "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-2.jpg",
              "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-3.jpg",
            ]}
            avatarsLabel="Trusted by 500+ clients"
          />
        </div>

        <div id="about" data-section="about">
          <AboutFeaturesSplit
            textAnimation="slide-up"
            tag="About Us"
            title="Reliable Climate Solutions Since 2005"
            description="AirPro HVAC has been keeping homes and businesses comfortable for nearly two decades. Our certified technicians deliver expert installations, maintenance, and repairs."
            items={[
              {
                icon: "ShieldCheck",
                title: "2,500+ Systems Installed",
                description: "Trusted by homeowners and businesses across the region.",
              },
              {
                icon: "Clock",
                title: "24/7 Emergency Service",
                description: "Round-the-clock support when you need it most.",
              },
              {
                icon: "Award",
                title: "98% Satisfaction Rate",
                description: "Our commitment to quality speaks for itself.",
              },
            ]}
            imageSrc="https://storage.googleapis.com/webild/default/templates/hvac/img-2.jpg"
          />
        </div>

        <div id="services" data-section="services">
          <FeaturesMediaCards
            textAnimation="slide-up"
            tag="Our Services"
            title="Comprehensive HVAC Solutions"
            description="From installations to emergency repairs, we have your comfort covered."
            primaryButton={{ text: "Get a Quote", href: "#contact" }}
            items={[
              {
                title: "AC Installation",
                description: "Expert installation of high-efficiency air conditioning systems for homes and commercial spaces.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-4.jpg",
              },
              {
                title: "Heating Systems",
                description: "Complete furnace and heat pump installations to keep you warm through every winter.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-5.jpg",
              },
              {
                title: "Maintenance Plans",
                description: "Preventative maintenance programs that extend the life of your system and reduce energy costs.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-6.jpg",
              },
              {
                title: "Emergency Repairs",
                description: "24/7 emergency repair service — we respond fast when your system breaks down unexpectedly.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-7.jpg",
              },
              {
                title: "Duct Cleaning",
                description: "Professional duct cleaning to improve air quality and system efficiency throughout your property.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-8.jpg",
              },
              {
                title: "System Inspections",
                description: "Thorough inspections with detailed reports and transparent recommendations — no hidden fees.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-9.jpg",
              },
            ]}
          />
        </div>

        <div id="why-choose" data-section="why-choose">
          <FeaturesAlternatingSplit
            textAnimation="slide-up"
            tag="Why Choose Us"
            title="Why Choose AirPro"
            description="What sets us apart from the rest"
            items={[
              {
                title: "Reliability & Trust",
                description: "Looking for a dependable HVAC company? We arrive on time and do the job right. Our technicians are background-checked and professionally trained.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-4.jpg",
              },
              {
                title: "Quality Workmanship",
                description: "Our skilled technicians excel in various HVAC repairs, using only top-quality materials and proven techniques that stand the test of time.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-5.jpg",
              },
              {
                title: "Fair & Transparent Pricing",
                description: "No surprises here! We offer clear quotes and fair pricing for quality work. You'll know exactly what you're paying for before we begin.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-6.jpg",
              },
            ]}
          />
        </div>

        <div id="how-it-works" data-section="how-it-works">
          <FeaturesTimelineCards
            textAnimation="slide-up"
            tag="How It Works"
            title="Our Simple Process"
            description="From first call to finished job, we make HVAC service easy."
            items={[
              {
                title: "Schedule a Call",
                description: "Contact us by phone or online to describe your HVAC issue. We'll find a time that works for you.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-6.jpg",
              },
              {
                title: "On-Site Diagnosis",
                description: "A certified technician arrives on time, inspects your system, and explains the issue with a clear quote.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-7.jpg",
              },
              {
                title: "Expert Repair",
                description: "We complete the work using premium parts and proven techniques — most jobs done same day with our satisfaction guarantee.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hvac/img-4.jpg",
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialRatingCards
            textAnimation="slide-up"
            tag="Testimonials"
            title="What Our Clients Say"
            description="Hear from homeowners and businesses who trust AirPro HVAC."
            testimonials={[
              {
                name: "James R.",
                role: "Homeowner, Austin TX",
                quote: "AirPro replaced our entire AC system in one day. The crew was professional, clean, and the new unit runs quieter than anything we've had before. Highly recommend.",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-1.jpg",
              },
              {
                name: "Linda M.",
                role: "Business Owner, Dallas TX",
                quote: "We use AirPro for all three of our office locations. Their maintenance plans have saved us thousands in emergency repairs. Always on time, always honest.",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-2.jpg",
              },
              {
                name: "Carlos D.",
                role: "Homeowner, Houston TX",
                quote: "Our furnace broke down on the coldest night of the year. AirPro had someone at our door within two hours. Fixed it on the spot. Can't thank them enough.",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-3.jpg",
              },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSimple
            textAnimation="slide-up"
            tag="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our HVAC services."
            primaryButton={{ text: "Contact Us", href: "#contact" }}
            items={[
              {
                question: "Do you offer 24/7 emergency service?",
                answer: "Yes! We provide round-the-clock emergency HVAC service. If your system breaks down in the middle of the night or on a weekend, call us and a technician will be at your door as soon as possible.",
              },
              {
                question: "How often should I service my HVAC system?",
                answer: "We recommend servicing your system at least twice a year — once before summer for cooling and once before winter for heating. Regular maintenance extends your system's life and keeps energy bills low.",
              },
              {
                question: "What brands do you install and repair?",
                answer: "We work with all major HVAC brands including Carrier, Trane, Lennox, Daikin, Rheem, and more. Our technicians are trained and certified across multiple manufacturers.",
              },
              {
                question: "Do you offer financing options?",
                answer: "Yes, we offer flexible financing plans for new installations and major repairs. Ask about our 0% interest options so you can stay comfortable without straining your budget.",
              },
              {
                question: "How long does a typical installation take?",
                answer: "Most residential HVAC installations are completed in one day. Larger commercial projects may take 2-3 days depending on the scope. We'll give you an accurate timeline during your consultation.",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCta
            textAnimation="slide-up"
            tag="Get in Touch"
            text="Ready to Stay Comfortable Year-Round?"
            primaryButton={{ text: "Get a Free Quote", href: "#contact" }}
            secondaryButton={{ text: "Call (555) 987-6543", href: "tel:5559876543" }}
          />
        </div>

        <FooterSimpleMedia
          brand="AirPro HVAC"
          columns={[
            {
              title: "Services",
              items: [
                { label: "AC Installation", href: "#services" },
                { label: "Heating Systems", href: "#services" },
                { label: "Maintenance Plans", href: "#services" },
                { label: "Emergency Repairs", href: "#services" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Contact",
              items: [
                { label: "(555) 987-6543", href: "tel:5559876543" },
                { label: "info@airprohvac.com", href: "mailto:info@airprohvac.com" },
                { label: "Austin, TX" },
              ],
            },
          ]}
          copyright="© 2026 | AirPro HVAC"
          links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
          imageSrc="https://storage.googleapis.com/webild/default/templates/hvac/img-10.jpg"
        />
      </StyleProvider>
    </ReactLenis>
  );
}
