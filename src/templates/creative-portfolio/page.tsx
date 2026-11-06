import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import NavbarFloatingLogo from "@/components/ui/NavbarFloatingLogo";
import TestimonialTrustCard from "@/components/sections/testimonial/TestimonialTrustCard";
import HeroWorkScrollStack from "@/components/sections/hero/HeroWorkScrollStack";
import AboutTestimonialParallax from "@/components/sections/about/AboutTestimonialParallax";
import FeaturesBentoGridCta from "@/components/sections/features/FeaturesBentoGridCta";
import FaqTabbedAccordion from "@/components/sections/faq/FaqTabbedAccordion";
import ContactSplitFormParallax from "@/components/sections/contact/ContactSplitFormParallax";
import LoaderReveal from "@/components/ui/LoaderReveal";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";
import CornerGlowBackground from "@/components/ui/CornerGlowBackground";
import "./theme.css";

export default function CreativePortfolioTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
        <LoaderReveal
          imageSrc="https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp"
          title="Joseph Alexander"
        />

        <SiteBackgroundSlot />
        <CornerGlowBackground position="fixed" />

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 4.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <NavbarFloatingLogo
            logo="Joseph Alexander"
            logoImageSrc="https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp"
            navItems={[
              { name: "Work", href: "#work" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Contact", href: "#contact" },
            ]}
            ctaButton={{ text: "Contact", href: "#contact" }}
          />
        </motion.div>

        <HeroWorkScrollStack
          textAnimation="fade"
          heroAnimationDelay={4}
          tag="1 spot left this month"
          title="Design that"
          titleHighlight="commands attention."
          description="Design engineered for performance, not just aesthetics."
          descriptionMuted="I craft every visual touchpoint your brand needs to capture attention and convert it into revenue."
          primaryButton={{
            text: "Book a call with me",
            href: "#contact",
            avatarSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp",
            avatarLabel: "You",
          }}
          sectionTag="Selected Work"
          sectionTitle="Projects That Speak for Themselves"
          sectionDescription="A curated selection of design work that drove real business results for ambitious brands."
          items={[
            {
              title: "HydroFlow Product Launch",
              description: "Beverage brand shoot. Every frame engineered to sell.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-1.webp",
              tag: "Product Shot",
            },
            {
              title: "Webild Athlete Campaign",
              description: "Sports tech shoot. Wearables captured in raw motion.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-2.webp",
              tag: "Photography",
            },
            {
              title: "Maru Residence",
              description: "Architectural interior shoot. Minimal compositions.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-3.webp",
              tag: "Interior Design",
            },
          ]}
          secondaryButton={{ text: "View all my projects", href: "#" }}
        />

        <TestimonialTrustCard
          textAnimation="fade"
          quote="Working with Joseph felt like having a seasoned design partner who truly understood our vision for KYMA and brought it to life in ways we hadn't even imagined."
          rating={5}
          author="Thomas Weber — Co-founder of KYMA"
          avatars={[
            { name: "Thomas Weber", imageSrc: "https://randomuser.me/api/portraits/men/75.jpg" },
          ]}
        />

        <div id="about" data-section="about">
          <AboutTestimonialParallax
            textAnimation="fade"
            tag="About"
            quote="I don't design to decorate — I design to solve. Sharp, intentional work that moves brands forward."
            author="Joseph Alexander"
            role="Independent Designer"
            imageSrc="https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp"
            socialLinks={[
              { icon: "Twitter", label: "Twitter", href: "#" },
              { icon: "Linkedin", label: "LinkedIn", href: "#" },
              { icon: "Instagram", label: "Instagram", href: "#" },
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <FeaturesBentoGridCta
            textAnimation="fade"
            tag="Services"
            title="What I Bring to the Table"
            description="End-to-end creative services designed to make your brand impossible to ignore — from the first frame to the final pixel."
            features={[
              { title: "Photography", description: "Art-directed shoots that capture your brand's personality. Every image is color-graded and built to stop the scroll.", imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/photography.webp" },
              { title: "Product Design", description: "User-centered interfaces for apps and SaaS products. From wireframe to pixel-perfect UI — intuitive experiences that keep users coming back.", imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/product-design.webp" },
              { title: "Website", description: "Conversion-focused websites that look sharp and perform. Clean layouts, strategic CTAs, and responsive design that turns traffic into revenue.", imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/website.webp" },
              { title: "Videos", description: "Brand films and product videos engineered for engagement. Story-driven visuals that convert viewers into customers.", imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/videos.webp" },
            ]}
            ctaButton={{
              text: "Book a call with me",
              href: "#contact",
              avatarSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp",
              avatarLabel: "You",
            }}
          />
        </div>

        <FaqTabbedAccordion
          textAnimation="fade"
          tag="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before we start working together."
          categories={[
            {
              name: "General",
              items: [
                { question: "What type of clients do you work with?", answer: "I work with ambitious brands, startups, and established businesses that value premium creative work. Whether you're launching a new product or refreshing your brand identity, I bring the same level of craft and attention to detail." },
                { question: "What's your availability like?", answer: "I typically take on 2–3 projects at a time to ensure each client gets my full attention. Reach out to check my current availability — I'm happy to discuss timelines." },
                { question: "Do you work remotely or on-site?", answer: "Primarily remote, but I'm open to on-site work for shoots, workshops, or strategy sessions depending on the project scope and location." },
                { question: "Can I see more examples of your work?", answer: "Absolutely. The projects on this site are a curated selection. I'm happy to share additional case studies relevant to your industry during our initial call." },
              ],
            },
            {
              name: "Pricing",
              items: [
                { question: "How do you structure your pricing?", answer: "I offer project-based pricing tailored to scope and deliverables. Every engagement starts with a discovery call so I can provide an accurate, transparent quote — no surprises." },
                { question: "Do you require a deposit?", answer: "Yes, I require a 50% deposit to secure your spot and begin work. The remaining balance is due upon delivery of final assets." },
                { question: "Do you offer retainer packages?", answer: "I do. For clients with ongoing creative needs, monthly retainers offer priority access, discounted rates, and faster turnaround times." },
                { question: "What's included in a typical project quote?", answer: "Quotes include all creative direction, production, editing, and delivery of final files. Revisions are built in — I want you to be thrilled with the result." },
              ],
            },
            {
              name: "Process",
              items: [
                { question: "What does your process look like?", answer: "Discovery call → Creative brief → Concept development → Production → Review & refinement → Final delivery. I keep you in the loop at every stage with clear timelines and checkpoints." },
                { question: "How long does a typical project take?", answer: "Most projects wrap within 2–4 weeks depending on complexity. Larger campaigns or multi-deliverable projects may extend further, and I'll set expectations upfront." },
                { question: "How many revisions are included?", answer: "Two rounds of revisions are standard. In practice, my clients rarely need more than one — I invest heavily in understanding your vision before production begins." },
                { question: "What do you need from me to get started?", answer: "A brief overview of your brand, goals, and any existing assets or references. I'll guide you through the rest during our kickoff call." },
              ],
            },
            {
              name: "Results",
              items: [
                { question: "What kind of results can I expect?", answer: "My work is designed to drive measurable outcomes — higher engagement, increased conversions, and a brand presence that commands attention. I'll share relevant case studies during our call." },
                { question: "Do you track performance metrics?", answer: "While I focus on the creative, I design everything with performance in mind. I'm happy to collaborate with your marketing team to align on KPIs and measure impact." },
                { question: "Can you share client testimonials?", answer: "Yes — I have testimonials and references available. Many of my clients see 2–3x improvements in engagement after implementing new creative assets." },
                { question: "What makes your work different?", answer: "I combine strategic thinking with high-end execution. Every project is approached as a partnership — I'm invested in your success, not just delivering files." },
              ],
            },
          ]}
          cta={{
            imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp",
            name: "More questions? Reach out anytime.",
            role: "joseph@alexandercreative.com",
            buttonText: "Book a call",
            buttonHref: "#contact",
          }}
        />

        <div id="contact" data-section="contact">
          <ContactSplitFormParallax
            textAnimation="fade"
            tag="Get in Touch"
            title="Let's Build"
            description="Have a project in mind? Drop me a message and I'll get back to you within 24 hours."
            inputs={[
              { name: "name", type: "text", placeholder: "Your name", required: true },
              { name: "email", type: "email", placeholder: "Your email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Tell me about your project...", rows: 5, required: true }}
            buttonText="Send Message"
            imageSrc="https://storage.googleapis.com/webild/default/templates/creative-portfolio/contact.webp"
            ctaLinks={[
              { icon: "Video", label: "Book a Call", href: "#" },
            ]}
          />
        </div>

        <FooterMinimal
          brand="Alexander"
          copyright="© 2026 Joseph Alexander. All rights reserved."
          socialLinks={[
            { icon: "Twitter", href: "#" },
            { icon: "Linkedin", href: "#" },
            { icon: "Instagram", href: "#" },
          ]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
