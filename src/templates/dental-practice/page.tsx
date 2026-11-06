import NavbarInline from "@/components/ui/NavbarInline";
import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import ProductRatingCards from "@/components/sections/product/ProductRatingCards";
import AboutText from "@/components/sections/about/AboutText";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";
import TestimonialMarqueeCards from "@/components/sections/testimonial/TestimonialMarqueeCards";
import ContactSplitEmail from "@/components/sections/contact/ContactSplitEmail";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import "./theme.css";

export default function DentistTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
        <SiteBackgroundSlot />

        <NavbarInline
          logo="Luxury Dental"
          navItems={[
            { name: "Services", href: "#services" },
            { name: "About", href: "#about" },
            { name: "Features", href: "#features" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Schedule", href: "#contact" }}
        />

        <div id="hero" data-section="hero">
          <HeroSplitKpi
            textAnimation="slide-up"
            tag="Excellence Since 2005"
            title="California's Premier Luxury Dental Practice"
            description="Experience world-class cosmetic and restorative dentistry with cutting-edge technology and personalized care."
            primaryButton={{ text: "View Our Services", href: "#services" }}
            secondaryButton={{ text: "Book Your Visit", href: "#contact" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/hero/hero1.avif"
            kpis={[
              { value: "5000+", label: "Satisfied Patients" },
              { value: "99.8%", label: "Satisfaction Rate" },
              { value: "15+", label: "Industry Awards" },
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <ProductRatingCards
            textAnimation="slide-up"
            tag="Premium Dental Services"
            title="Our Signature Services"
            description="From cosmetic enhancement to restorative excellence, our comprehensive services transform smiles and improve oral health with precision and artistry."
            primaryButton={{ text: "Schedule Consultation", href: "#contact" }}
            products={[
              {
                brand: "Cosmetic",
                name: "Smile Design & Whitening",
                price: "From $500",
                rating: 5,
                reviewCount: "234",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service1.avif",
              },
              {
                brand: "Restorative",
                name: "Dental Implants & Crowns",
                price: "From $1,200",
                rating: 5,
                reviewCount: "312",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service2.avif",
              },
              {
                brand: "Advanced",
                name: "Orthodontics & Aligners",
                price: "From $800",
                rating: 5,
                reviewCount: "289",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service3.avif",
              },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <AboutText
            textAnimation="slide-up"
            title="For over two decades, we've been California's trusted destination for luxury dental care, combining advanced technology with artistic precision to create beautiful, healthy smiles that transform lives"
            primaryButton={{ text: "Meet Our Team", href: "#testimonials" }}
            secondaryButton={{ text: "Learn More", href: "#contact" }}
          />
        </div>

        <div id="features" data-section="features">
          <FeaturesMediaCards
            textAnimation="slide-up"
            tag="Premium Dental Excellence"
            title="Why Choose Our Luxury Practice"
            description="We combine artistic excellence with scientific precision, utilizing the latest technology and techniques to deliver transformative results that exceed expectations."
            items={[
              {
                title: "Digital Technology",
                description: "3D imaging, intraoral cameras, and computer-aided design for precise diagnostics and treatment planning.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/about/about1.avif",
              },
              {
                title: "Master Craftsmanship",
                description: "Award-winning dentists with decades of experience in cosmetic and restorative excellence.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/about/about2.avif",
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialMarqueeCards
            textAnimation="slide-up"
            tag="Patient Reviews"
            title="What Our Patients Say"
            description="Discover why hundreds of California's discerning patients trust us for their dental care and smile transformations."
            testimonials={[
              {
                name: "Jennifer Martinez",
                role: "San Diego Patient",
                quote: "The most professional and caring dental experience I've ever had. The results exceeded my expectations and the attention to detail is extraordinary.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/testimonial/testimonial1.webp",
              },
              {
                name: "Robert Chen",
                role: "Business Executive",
                quote: "Finally found a dentist who understands aesthetics and function. My smile is now my confidence. Highly recommended to anyone serious about quality.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/testimonial/testimonial2.webp",
              },
              {
                name: "Sarah Williams",
                role: "Entertainment Industry",
                quote: "This is the place where art meets science. My smile transformation has been life-changing. The expertise here is unmatched.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/testimonial/testimonial3.webp",
              },
              {
                name: "Michael Torres",
                role: "Loyal Patient",
                quote: "I've been a patient for 8 years. The consistent excellence, warm staff, and cutting-edge treatments keep me coming back with confidence.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image5.avif",
              },
              {
                name: "Amanda Rodriguez",
                role: "Social Media Influencer",
                quote: "When your smile matters for your career, you go to the best. This practice delivered a smile that's both beautiful and natural-looking.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image6.avif",
              },
              {
                name: "David Kim",
                role: "Healthcare Professional",
                quote: "The clinical precision combined with artistic vision is remarkable. This team truly understands comprehensive dental care at the highest level.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image7.avif",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitEmail
            textAnimation="slide-up"
            tag="Get In Touch"
            title="Schedule Your Luxury Dental Experience"
            description="Connect with our team to discuss your smile goals and discover how our personalized treatments can transform your dental health and confidence."
            inputPlaceholder="Enter your email"
            buttonText="Get Started"
            imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/contact/contact.avif"
          />
        </div>

        <FooterSimple
          brand="Luxury Dental Care"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Cosmetic Dentistry", href: "#services" },
                { label: "Dental Implants", href: "#services" },
                { label: "Orthodontics", href: "#services" },
                { label: "Restorative Care", href: "#services" },
              ],
            },
            {
              title: "Practice",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#testimonials" },
                { label: "Technology", href: "#features" },
                { label: "Contact Us", href: "#contact" },
              ],
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "Google Reviews", href: "#" },
                { label: "Smile Gallery", href: "#" },
              ],
            },
          ]}
          copyright="© 2025 Luxury Dental Care | Premium Dentistry Since 2005"
          links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
