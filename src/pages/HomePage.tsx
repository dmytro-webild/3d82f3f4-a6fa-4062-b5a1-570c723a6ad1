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
      tag="Expert Screen Enclosure Specialists"
      title="Elevate Your Outdoor Living with Premium Custom Enclosures"
      description="Experience the perfect blend of durability and design with our advanced, high-performance screen solutions. DBA of Pool Perfect Screens LLC."
      primaryButton={{
        text: "Get Your Free Estimate",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#about",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pool-full-warm-water-garden_181624-10392.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-asian-businessman-wireless-earphones-confidently-watching-public-transport-route-metro-station_574295-1680.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool-hotel-resort-summer-vacation_74190-3886.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-plant-lifestyle-trees-plant-nature_53876-32131.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/girl-red-swimsuit-lies-by-blue-swimming-pool_1304-5464.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-swimming-pool-with-palm-tree_1339-4855.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="About Our Brand"
      title="Unmatched Quality in Every Enclosure"
      description="Best Pool Cages is a proud DBA of Pool Perfect Screens LLC. We specialize in providing Florida homeowners with superior, long-lasting pool enclosures that don't just protect—they enhance your lifestyle."
      imageSrc="http://img.b2bpic.net/free-photo/swimming-pool_1203-7236.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="Why Choose Us"
      title="The Perfect Blend of Design & Durability"
      description="Our high-performance materials ensure your enclosure stands the test of time while maximizing your views."
      features={[
        {
          title: "Premium Durability",
          description: "High-strength materials engineered for Florida's unique climate.",
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool_1203-3104.jpg",
        },
        {
          title: "Enhanced Visibility",
          description: "Experience clear views without sacrificing structural integrity.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-looking-beautiful-view-from-window_1098-21870.jpg",
        },
        {
          title: "Custom Architecture",
          description: "Bespoke designs tailored to your home's unique aesthetic.",
          imageSrc: "http://img.b2bpic.net/free-photo/hotel-pool-resort_74190-1651.jpg",
        },
        {
          title: "Expert Installation",
          description: "Professional craftsmanship by our experienced team members.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-technician-safety-glasses-repairing-computer_23-2147922180.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesImageBento
      tag="Our Services"
      title="Comprehensive Screen Solutions"
      description="From custom enclosure design to specialized mesh replacement, we have everything you need."
      items={[
        {
          title: "Hardware Solutions",
          description: "High-grade components.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-sitting-near-swimming-pool-with-luggage-bag-posing_23-2148221972.jpg",
        },
        {
          title: "Roof Enclosures",
          description: "Sturdy, sleek builds.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-sportsman-warming-up-before-training_23-2148203565.jpg",
        },
        {
          title: "Custom Gates",
          description: "Luxury entryway solutions.",
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-swimming-pool-with-umbrella-chair-lounge-around-there-leisure-travel_74190-7880.jpg",
        },
        {
          title: "High-Tech Mesh",
          description: "Superior insect protection.",
          imageSrc: "http://img.b2bpic.net/free-photo/fishing-nets_181624-31810.jpg",
        },
        {
          title: "Aluminum Frames",
          description: "Premium finishes available.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-8368.jpg",
        },
        {
          title: "Support Pillars",
          description: "Architectural grade stability.",
          imageSrc: "http://img.b2bpic.net/free-photo/white-tiled-building-blue-sky_181624-6378.jpg",
        },
        {
          title: "Patio Corners",
          description: "Detail oriented corner joints.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-kitchen-cabinet-with-led-lighting-dark-minimalism-premium-interior-detail_169016-71990.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Proven Results"
      title="Our Track Record"
      description="Reliable excellence you can count on."
      metrics={[
        {
          value: "15+",
          description: "Years of Experience",
        },
        {
          value: "1200+",
          description: "Projects Completed",
        },
        {
          value: "98%",
          description: "Client Satisfaction",
        },
        {
          value: "24/7",
          description: "Dedicated Support",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="What Clients Say"
      title="Excellence in Every Installation"
      description="Don't take our word for it—hear from our satisfied Florida homeowners."
      testimonials={[
        {
          name: "Alice R.",
          role: "Homeowner",
          quote: "Truly professional team, our enclosure looks fantastic after two years.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-african-american-woman-smiling-cheerful-friendly-face-laughing-confident_839833-29956.jpg",
        },
        {
          name: "David M.",
          role: "Homeowner",
          quote: "The clarity of the mesh is amazing. We can see right into our backyard.",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-girl-video-chatting-smartphone-standing-near-escalator-waving-hand-mobile-phone_1258-195837.jpg",
        },
        {
          name: "Elena S.",
          role: "Homeowner",
          quote: "Exceptional communication and high quality materials. Highly recommend.",
          imageSrc: "http://img.b2bpic.net/free-photo/blonde-girl-with-phone_1303-3694.jpg",
        },
        {
          name: "Marcus L.",
          role: "Homeowner",
          quote: "Best pool cage design I have seen in Florida. Great architectural touch.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-women-looking-mobile-phone_23-2147850492.jpg",
        },
        {
          name: "Sarah P.",
          role: "Property Manager",
          quote: "My clients are always impressed by the quality Pool Perfect Screens provides.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-near-glass-building-looking-camera_23-2148308621.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Frequently Asked"
      title="Common Questions"
      description="Everything you need to know about our screen enclosure services."
      items={[
        {
          question: "What areas do you serve?",
          answer: "We serve the greater Florida region. Contact us to confirm availability in your county.",
        },
        {
          question: "Are your materials resistant to rust?",
          answer: "Yes, we use only architectural-grade aluminum and premium finishes designed for coastal environments.",
        },
        {
          question: "How long does installation take?",
          answer: "Depending on complexity, most projects are completed within 1-2 weeks.",
        },
        {
          question: "Do you offer warranties?",
          answer: "Yes, we provide comprehensive warranties on all our materials and craftsmanship.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Start Your Project"
      text="Ready to transform your outdoor living? Get in touch with our experts today for a free estimate."
      primaryButton={{
        text: "Get Free Estimate",
        href: "#",
      }}
      secondaryButton={{
        text: "Call Now",
        href: "tel:5550123",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
