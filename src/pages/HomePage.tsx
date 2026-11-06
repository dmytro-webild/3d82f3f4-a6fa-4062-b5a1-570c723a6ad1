import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-section="hero">
        <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
            tag="Florida's Premier Screen Enclosure Specialists"
            title="Elevate Your Outdoor Living with Premium Custom Enclosures"
            description="Experience the perfect blend of wind-resistant durability and sleek architectural design. Best Pool Cages is a proud DBA of Pool Perfect Screens LLC."
            primaryButton={{
              text: "Get Your Free Estimate",
              href: "#contact",
            }}
            secondaryButton={{
              text: "Explore Our Work",
              href: "#about",
            }}
            items={[
              {
                imageSrc: "http://img.b2bpic.net/free-photo/pool-full-warm-water-garden_181624-10392.jpg?_wi=1",
              },
              {
                imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool-hotel-resort-summer-vacation_74190-3886.jpg?_wi=1",
              },
              {
                imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-swimming-pool-with-palm-tree_1339-4855.jpg?_wi=2",
              },
              {
                imageSrc: "http://img.b2bpic.net/free-photo/swimming-pool_1203-7236.jpg?_wi=1",
              },
              {
                imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool_1203-3104.jpg?_wi=1",
              },
              {
                imageSrc: "http://img.b2bpic.net/free-photo/hotel-pool-resort_74190-1651.jpg?_wi=1",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="about" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutMediaOverlay
            tag="Florida Screen Expertise"
            title="Unmatched Craftsmanship in Every Pool Cage"
            description="Best Pool Cages is a proud DBA of Pool Perfect Screens LLC. We specialize in providing Florida homeowners with superior, hurricane-resistant pool enclosures that protect against debris, insects, and UV exposure while enhancing your poolside view."
            imageSrc="http://img.b2bpic.net/free-photo/swimming-pool_1203-7236.jpg?_wi=2"
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="features" data-section="features">
        <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
            tag="Why Choose Best Pool Cages"
            title="Engineered for Florida's Tropical Climate"
            description="Our heavy-duty aluminum framing and premium mesh screen solutions ensure your enclosure stays pristine through coastal weather."
            features={[
              {
                title: "Hurricane-Rated Framing",
                description: "Structural aluminum beams engineered to meet strict Florida building and wind codes.",
                imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool_1203-3104.jpg?_wi=2",
              },
              {
                title: "Ultra-Clear View Mesh",
                description: "High-visibility mesh technology that keeps pests out without obstructing your outdoor view.",
                imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-swimming-pool-with-palm-tree_1339-4855.jpg?_wi=3",
              },
              {
                title: "Custom Mansard & Gable Roofs",
                description: "Bespoke architectural designs crafted specifically for your home's pool and patio layout.",
                imageSrc: "http://img.b2bpic.net/free-photo/hotel-pool-resort_74190-1651.jpg?_wi=2",
              },
              {
                title: "Expert Installation",
                description: "Precision assembly and installation by certified pool cage craftsmen.",
                imageSrc: "http://img.b2bpic.net/free-photo/pool-full-warm-water-garden_181624-10392.jpg?_wi=2",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="products" data-section="products">
        <SectionErrorBoundary name="products">
          <FeaturesImageBento
            tag="Our Enclosure Services"
            title="Comprehensive Pool Screen Solutions"
            description="From brand-new custom pool cage construction to full re-screening and hardware upgrades."
            items={[
              {
                title: "Custom Pool Enclosures",
                description: "Full architectural aluminum cages built for Florida pools.",
                imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool-with-umbrella-chair-lounge-around-there-leisure-travel_74190-7880.jpg",
              },
              {
                title: "Mansard & Gable Roofs",
                description: "Spacious high-roof screen cages designed for optimal wind resistance.",
                imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-8368.jpg",
              },
              {
                title: "Lanai & Patio Extensions",
                description: "Enclosed outdoor living spaces protected from bugs and debris.",
                imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool_1203-3104.jpg?_wi=3",
              },
              {
                title: "High-Toughness Mesh",
                description: "Tear-resistant screen mesh engineered for tropical sunshine and storms.",
                imageSrc: "http://img.b2bpic.net/free-photo/swimming-pool_1203-7236.jpg?_wi=3",
              },
              {
                title: "Coastal Stainless Fasteners",
                description: "Corrosion-proof hardware to prevent rust stains on your pool deck.",
                imageSrc: "http://img.b2bpic.net/free-photo/hotel-pool-resort_74190-1651.jpg?_wi=3",
              },
              {
                title: "Pool Access Gates",
                description: "Child-safe, self-closing hinged screen doors with magnetic latches.",
                imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool-hotel-resort-summer-vacation_74190-3886.jpg?_wi=2",
              },
              {
                title: "Complete Re-Screening",
                description: "Full replacement of faded or damaged screens with UV-protected mesh.",
                imageSrc: "http://img.b2bpic.net/free-photo/pool-full-warm-water-garden_181624-10392.jpg?_wi=3",
              },
            ]}
            textAnimation="fade"
          />
        </SectionErrorBoundary>
      </div>

      <div id="metrics" data-section="metrics">
        <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
            tag="Proven Performance"
            title="Florida's Trusted Pool Enclosure Team"
            description="Proven quality and homeowner satisfaction across the Sunshine State."
            metrics={[
              {
                value: "15+",
                description: "Years of Florida Experience",
              },
              {
                value: "1,200+",
                description: "Pool Cages Installed",
              },
              {
                value: "99%",
                description: "Customer Satisfaction",
              },
              {
                value: "100%",
                description: "Florida Wind Code Compliant",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="testimonials" data-section="testimonials">
        <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
            tag="Homeowner Feedback"
            title="What Florida Pool Owners Say"
            description="See why Florida property owners recommend Best Pool Cages."
            testimonials={[
              {
                name: "Robert & Karen S.",
                role: "Naples Homeowner",
                quote: "Best Pool Cages built an incredible mansard enclosure over our pool. Even after heavy storms, the screen structure is rock solid.",
                imageSrc: "http://img.b2bpic.net/free-photo/pool-full-warm-water-garden_181624-10392.jpg?_wi=4",
              },
              {
                name: "David M.",
                role: "Sarasota Homeowner",
                quote: "The clarity of the view mesh is unbelievable. We enjoy our pool area bug-free every evening. Truly first-rate work by Pool Perfect Screens.",
                imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool_1203-3104.jpg?_wi=4",
              },
              {
                name: "Elena G.",
                role: "Fort Myers Homeowner",
                quote: "Outstanding craftsmanship from start to finish. The aluminum frame matches our home's architecture seamlessly.",
                imageSrc: "http://img.b2bpic.net/free-photo/swimming-pool_1203-7236.jpg?_wi=4",
              },
              {
                name: "Marcus T.",
                role: "Tampa Property Owner",
                quote: "Prompt service, clean job site, and top-notch materials. Hands down the best pool enclosure company in Florida.",
                imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-swimming-pool-with-palm-tree_1339-4855.jpg?_wi=4",
              },
              {
                name: "Sarah L.",
                role: "Orlando Homeowner",
                quote: "Replaced our damaged screen cage after last season. The quality of the stainless fasteners and mesh is night and day.",
                imageSrc: "http://img.b2bpic.net/free-photo/hotel-pool-resort_74190-1651.jpg?_wi=4",
              },
            ]}
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="faq" data-section="faq">
        <SectionErrorBoundary name="faq">
          <FaqTwoColumn
            tag="Frequently Asked Questions"
            title="Everything You Need to Know"
            description="Answers to common questions about our custom pool cages and screen enclosures."
            items={[
              {
                question: "Are your pool cages engineered for Florida hurricane winds?",
                answer: "Yes, all Best Pool Cages enclosures are custom-engineered to meet or exceed Florida building codes and local wind speed requirements.",
              },
              {
                question: "What types of screen mesh options do you offer?",
                answer: "We offer high-visibility mesh, heavy-duty pet mesh, solar insect screening, and super-tough polyester screens engineered for long-term UV resistance.",
              },
              {
                question: "Do you handle permitting for new pool cage builds?",
                answer: "Yes, as a DBA of Pool Perfect Screens LLC, we handle all engineering plans, municipal permits, and inspection coordination.",
              },
              {
                question: "How long does a pool cage installation or re-screening take?",
                answer: "Most re-screening projects are completed in 1-2 days, while full custom pool cage construction typically takes 1-2 weeks depending on dimensions.",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="Start Your Custom Enclosure Project"
            text="Ready to elevate your Florida pool deck with a premium custom screen cage? Contact Best Pool Cages today for a free estimate."
            primaryButton={{
              text: "Get Free Estimate",
              href: "#",
            }}
            secondaryButton={{
              text: "Call Us Now",
              href: "tel:5550123456",
            }}
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}
