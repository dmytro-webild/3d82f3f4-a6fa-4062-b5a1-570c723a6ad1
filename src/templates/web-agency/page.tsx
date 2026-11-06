import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import NavbarDropdown from "@/components/ui/NavbarDropdown";
import HeroSplitVerticalMarqueeTall from "@/components/sections/hero/HeroSplitVerticalMarqueeTall";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FeaturesMediaCarousel from "@/components/sections/features/FeaturesMediaCarousel";
import FeaturesBorderGlow from "@/components/sections/features/FeaturesBorderGlow";
import TestimonialTrustCard from "@/components/sections/testimonial/TestimonialTrustCard";
import MetricsFeatureCards from "@/components/sections/metrics/MetricsFeatureCards";
import TeamStackedCards from "@/components/sections/team/TeamStackedCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterSimpleReveal from "@/components/sections/footer/FooterSimpleReveal";
import { Monitor, Zap, Shield, ArrowUpRight, Code, Palette, Layers, PenTool, Sparkles } from "lucide-react";
import "./theme.css";

export default function WebAgencyTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="aurora" heroBackground="lightRaysCorner" buttonVariant="stagger">
        <SiteBackgroundSlot />

        <NavbarDropdown
          logo="Webild"
          navItems={[
            { name: "Services", href: "#services" },
            { name: "Work", href: "#work" },
            { name: "Team", href: "#team" },
            { name: "Contact", href: "#contact" },
          ]}
          ctaButton={{ text: "Start Project", href: "#contact" }}
        />

        <div id="hero" data-section="hero">
          <HeroSplitVerticalMarqueeTall
            textAnimation="fade-blur"
            tag="Award-Winning Agency"
            title="We Build Digital Experiences"
            description="Transform your brand with cutting-edge web design and development. We craft stunning websites that convert visitors into customers."
            primaryButton={{ text: "Start Project", href: "#contact" }}
            secondaryButton={{ text: "View Work", href: "#work" }}
            leftItems={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-7.webp" },
            ]}
            rightItems={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-5.webp" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-8.webp" },
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <FeaturesBento
            textAnimation="fade-blur"
            tag="Services"
            title="Services That Drive Results"
            description="We offer a full suite of digital services to help your brand stand out online."
            features={[
              {
                title: "Web Development",
                description: "Custom-built websites that are fast, responsive, and designed to convert.",
                bentoComponent: "checklist-timeline",
                heading: "Project Timeline",
                subheading: "Week 1-2",
                checklistItems: [
                  { label: "Discovery & Strategy", detail: "Day 1-3" },
                  { label: "Design & Prototype", detail: "Day 4-7" },
                  { label: "Development & Launch", detail: "Day 8-14" },
                ],
                completedLabel: "Live",
              },
              {
                title: "SEO Optimization",
                description: "We optimize your website to rank higher on search engines and drive organic traffic.",
                bentoComponent: "animated-bar-chart",
              },
              {
                title: "Branding",
                description: "Build a memorable brand identity that resonates with your audience.",
                bentoComponent: "orbiting-icons",
                centerIcon: Sparkles,
                orbitIcons: [Palette, Layers, PenTool, Code],
              },
            ]}
          />
        </div>

        <div id="work" data-section="work">
          <FeaturesMediaCarousel
            textAnimation="fade-blur"
            tag="Our Work"
            title="Work We're Proud Of"
            description="A selection of projects we've crafted for clients across industries."
            items={[
              {
                title: "Vitality Wellness",
                description: "Health & wellbeing platform",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew1.webp",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
              {
                title: "Mailflow AI",
                description: "AI-powered email marketing platform",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew2.webp",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
              {
                title: "Kinetic Studios",
                description: "Motion graphics & visual effects",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew3.webp",
                buttonIcon: ArrowUpRight,
                buttonHref: "#",
              },
            ]}
          />
        </div>

        <div id="promise" data-section="promise">
          <FeaturesBorderGlow
            textAnimation="fade-blur"
            tag="Our Promise"
            title="Why Brands Choose Webild"
            description="We deliver results that speak for themselves."
            features={[
              {
                icon: Monitor,
                title: "Responsive Design",
                description: "Pixel-perfect websites that look stunning on every screen size and device.",
              },
              {
                icon: Zap,
                title: "Fast Turnaround",
                description: "From concept to launch in record time without sacrificing quality.",
              },
              {
                icon: Shield,
                title: "Secure Hosting",
                description: "Enterprise-grade security and 99.9% uptime for your website.",
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialTrustCard
            textAnimation="fade-blur"
            quote="Webild completely transformed our online presence. The team delivered a stunning website that exceeded our expectations and doubled our conversion rate."
            rating={5}
            author="— Maria Santos, CEO at Luxuria Travel"
            avatars={[
              { name: "Maria Santos", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp" },
              { name: "James Chen", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.webp" },
              { name: "Sofia Reyes", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.webp" },
              { name: "David Kim", imageSrc: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Emma Wilson", imageSrc: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Alex Thompson", imageSrc: "https://randomuser.me/api/portraits/men/67.jpg" },
            ]}
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricsFeatureCards
            textAnimation="fade-blur"
            tag="Results"
            title="Trusted by Industry Leaders"
            description="Years of experience building digital products that drive real results."
            metrics={[
              {
                value: "100+",
                title: "Projects Delivered",
                features: [
                  "E-commerce platforms",
                  "Corporate websites",
                  "SaaS applications",
                  "Mobile-first designs",
                ],
              },
              {
                value: "99%",
                title: "Client Satisfaction",
                features: [
                  "On-time delivery",
                  "Clear communication",
                  "Post-launch support",
                  "Ongoing partnerships",
                ],
              },
              {
                value: "8+",
                title: "Years Experience",
                features: [
                  "Industry expertise",
                  "Award-winning work",
                  "Global clientele",
                  "Proven methodology",
                ],
              },
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamStackedCards
            textAnimation="fade-blur"
            tag="Team"
            title="The Team Behind the Work"
            description="The creative minds behind your next project."
            members={[
              {
                name: "Sarah Miller",
                role: "Lead Developer",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp",
              },
              {
                name: "Valentina Reyes",
                role: "Creative Director",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.webp",
              },
              {
                name: "Carlos Mendoza",
                role: "UX Designer",
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-3.webp",
              },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSimple
            textAnimation="fade-blur"
            tag="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about working with us."
            items={[
              {
                question: "How long does a typical project take?",
                answer: "Most projects are completed within 2-4 weeks depending on scope and complexity. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What is your pricing structure?",
                answer: "We offer project-based pricing tailored to your needs. Every project includes design, development, SEO optimization, and post-launch support.",
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer: "Yes! We provide ongoing support and maintenance packages to keep your website updated, secure, and performing at its best.",
              },
              {
                question: "Can you redesign my existing website?",
                answer: "Absolutely. We specialize in website redesigns that modernize your brand while preserving your existing content and SEO rankings.",
              },
              {
                question: "What technologies do you use?",
                answer: "We build with modern technologies including Next.js, React, and Tailwind CSS to ensure fast, scalable, and maintainable websites.",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            textAnimation="fade-blur"
            tag="Get in Touch"
            title="Ready to Transform Your Digital Presence?"
            description="Let's build something extraordinary together. Get in touch and let's discuss your next project."
            inputPlaceholder="Enter your email"
            buttonText="Start Your Project"
          />
        </div>

        <FooterSimpleReveal
          brand="Webild"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Services",
              items: [
                { label: "Web Development", href: "#" },
                { label: "SEO", href: "#" },
                { label: "Branding", href: "#" },
                { label: "UI/UX Design", href: "#" },
              ],
            },
            {
              title: "Connect",
              items: [
                { label: "Twitter", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Dribbble", href: "#" },
              ],
            },
          ]}
          copyright="© 2026 Webild. All rights reserved."
          links={[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
