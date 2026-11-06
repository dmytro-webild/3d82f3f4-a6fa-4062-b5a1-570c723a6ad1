import { ReactLenis } from "lenis/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import NavbarFloating from "@/components/ui/NavbarFloating";
import HeroOverlayStatistics from "@/components/sections/hero/HeroOverlayStatistics";
import FeaturesMediaSimple from "@/components/sections/features/FeaturesMediaSimple";
import FeaturesAlternatingSplit from "@/components/sections/features/FeaturesAlternatingSplit";
import PricingHighlightedCards from "@/components/sections/pricing/PricingHighlightedCards";
import BlogMediaCards from "@/components/sections/blog/BlogMediaCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import FooterSimpleMedia from "@/components/sections/footer/FooterSimpleMedia";
import "./theme.css";

export default function HealthOptimizationTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="magnetic">
        <SiteBackgroundSlot />

        <NavbarFloating
          logo="SuperHealth"
          navItems={[
            { name: "Services", href: "#services" },
            { name: "How It Works", href: "#how-it-works" },
            { name: "Pricing", href: "#pricing" },
            { name: "Journal", href: "#blog" },
            { name: "FAQ", href: "#faq" },
          ]}
          ctaButton={{ text: "Apply Now", href: "#contact" }}
        />

        <div id="hero" data-section="hero">
          <HeroOverlayStatistics
            textAnimation="slide-up"
            title="Your Body Keeps a Score. We Read It."
            description="Bloodwork. Biomarkers. Breakthroughs. We turn raw data into your unfair advantage — so aging becomes optional and peak performance becomes the baseline."
            primaryButton={{ text: "Apply Now", href: "#contact" }}
            secondaryButton={{ text: "See Our Protocols", href: "#services" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/health-optimization/hero.webp"
            avatarsSrc={[
              "https://randomuser.me/api/portraits/women/44.jpg",
              "https://randomuser.me/api/portraits/men/32.jpg",
              "https://randomuser.me/api/portraits/women/68.jpg",
            ]}
            avatarsLabel="Trusted by 2,400+ clients"
            statistics={[
              { title: "80+ Biomarkers", subtitle: "Full diagnostic panel" },
              { title: "Data-Driven", subtitle: "Personalized protocols" },
              { title: "2,400+ Clients", subtitle: "Optimized & thriving" },
            ]}
          />
        </div>

        <div id="services" data-section="services">
          <FeaturesMediaSimple
            textAnimation="slide-up"
            tag="Our Protocols"
            title="Built Around Your Biology"
            description="Every protocol starts with data — your bloodwork, your genetics, your goals. No guesswork. No generic plans. Just precision medicine that moves the needle."
            items={[
              {
                title: "Seamless Diagnostics",
                description: "Book lab appointments in seconds and get comprehensive bloodwork done at top-tier facilities.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/health-optimization/features/feature-1.webp",
              },
              {
                title: "Real-Time Insights",
                description: "Track every biomarker that matters from your phone. Watch your vitals trend upward in real time.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/health-optimization/features/feature-2.webp",
              },
              {
                title: "Personalized Protocols",
                description: "Your data becomes your playbook — from nutrition timing to targeted supplementation.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/health-optimization/features/feature-3.webp",
              },
            ]}
          />
        </div>

        <div id="how-it-works" data-section="how-it-works">
          <FeaturesAlternatingSplit
            textAnimation="slide-up"
            tag="How It Works"
            title="From Data to Dominance in 3 Steps"
            description="Most clinics treat symptoms. We reverse-engineer your biology — then build the protocol that rewrites it."
            items={[
              {
                title: "We Map Your Biology",
                description: "It starts with the most comprehensive diagnostic panel in the industry. Over 80 biomarkers, genetic predispositions, and lifestyle factors — analyzed by our clinical team to find what's actually holding you back.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/health-optimization/split/split-1.webp",
              },
              {
                title: "We Build Your Protocol",
                description: "No templates. No generic advice. Your data feeds a personalized optimization plan — covering hormones, nutrition, supplementation, sleep, and recovery — all calibrated to your unique biology.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/health-optimization/split/split-2.webp",
              },
              {
                title: "We Track & Adapt",
                description: "Your body changes. Your protocol should too. We monitor your biomarkers in real time, adjusting interventions as you progress — so you never plateau and results keep compounding.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/health-optimization/split/split-3.webp",
              },
            ]}
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingHighlightedCards
            textAnimation="slide-up"
            tag="Pricing"
            title="Invest in the Only Body You've Got"
            description="No hidden fees. No insurance games. Just transparent pricing for people serious about their health."
            plans={[
              {
                tag: "Baseline",
                price: "$497",
                description: "One-time diagnostic deep dive",
                features: [
                  "80+ biomarker blood panel",
                  "Body composition analysis",
                  "1-on-1 physician review",
                  "Personalized report & action plan",
                  "Follow-up Q&A session",
                ],
                primaryButton: { text: "Get Started", href: "#contact" },
              },
              {
                tag: "Performance",
                price: "$297/mo",
                description: "Ongoing optimization protocol",
                highlight: "Most Popular",
                features: [
                  "Everything in Baseline",
                  "Quarterly biomarker re-testing",
                  "Custom supplement protocol",
                  "Hormone optimization program",
                  "Priority physician access",
                  "Real-time progress dashboard",
                ],
                primaryButton: { text: "Start Optimizing", href: "#contact" },
              },
              {
                tag: "Elite",
                price: "$597/mo",
                description: "Full-spectrum longevity program",
                features: [
                  "Everything in Performance",
                  "Monthly IV therapy sessions",
                  "Peptide & NAD+ protocols",
                  "Genetic analysis & epigenetic tracking",
                  "Dedicated health concierge",
                  "Same-day physician access",
                ],
                primaryButton: { text: "Contact Us", href: "#contact" },
              },
            ]}
          />
        </div>

        <div id="blog" data-section="blog">
          <BlogMediaCards
            textAnimation="slide-up"
            tag="Journal"
            title="The Science Behind the Protocol"
            description="Deep dives into the research, methods, and breakthroughs driving modern health optimization."
            items={[
              {
                category: "Longevity",
                title: "Why Your Biological Age Matters More Than Your Birthday",
                excerpt: "Chronological age is a number. Biological age is a verdict. Here's how we measure — and reverse — the difference.",
                authorName: "Dr. Sarah Chen",
                authorImageSrc: "https://randomuser.me/api/portraits/women/44.jpg",
                date: "May 12, 2026",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/health-optimization/features/feature-1.webp",
                href: "#",
              },
              {
                category: "Hormones",
                title: "The Cortisol Trap: Why High Performers Burn Out",
                excerpt: "Your stress response was designed for survival, not quarterly targets. We break down the hormone loop that's stealing your edge.",
                authorName: "Dr. James Okafor",
                authorImageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
                date: "May 5, 2026",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/health-optimization/features/feature-2.webp",
                href: "#",
              },
              {
                category: "Nutrition",
                title: "Metabolic Flexibility: The Biomarker Nobody Talks About",
                excerpt: "The ability to switch between fuel sources is the single best predictor of metabolic health. Most people have lost it. Here's how to get it back.",
                authorName: "Dr. Mia Torres",
                authorImageSrc: "https://randomuser.me/api/portraits/women/68.jpg",
                date: "Apr 28, 2026",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/health-optimization/features/feature-3.webp",
                href: "#",
              },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSimple
            textAnimation="slide-up"
            tag="FAQ"
            title="Questions We Get Asked a Lot"
            description="Straight answers. No medical jargon. No runaround."
            items={[
              {
                question: "How is this different from my regular doctor?",
                answer: "Your doctor treats disease. We optimize health. We test 5x more biomarkers, spend 10x more time with you, and build protocols designed to push you toward peak performance — not just keep you out of the hospital.",
              },
              {
                question: "Do I need to be sick to benefit from this?",
                answer: "Not at all. Most of our clients feel 'fine' when they walk in. The bloodwork tells a different story. We catch what standard checkups miss — declining hormones, nutrient gaps, inflammatory markers — before they become problems.",
              },
              {
                question: "How quickly will I see results?",
                answer: "Most clients report noticeable improvements in energy, sleep, and mental clarity within 4–6 weeks. Biomarker-level changes typically show up at your first quarterly retest. The longer you stay on protocol, the more the results compound.",
              },
              {
                question: "Is this covered by insurance?",
                answer: "We operate outside the insurance model intentionally. Insurance incentivizes sick care, not optimization. Our pricing is transparent and all-inclusive — no surprise bills, no prior authorizations, no waiting for approvals.",
              },
              {
                question: "What happens during my first visit?",
                answer: "We draw a comprehensive blood panel (80+ biomarkers), perform a body composition analysis, and sit down for a 1-on-1 deep dive into your health history, goals, and lifestyle. You leave with a full report and an actionable protocol within 7 days.",
              },
              {
                question: "Can I do this remotely?",
                answer: "Yes. We partner with labs nationwide for blood draws, and all physician consultations can be done via video. Your dashboard and protocols are fully digital. Geography shouldn't be a barrier to optimization.",
              },
            ]}
          />
        </div>

        <FooterSimpleMedia
          imageSrc="https://storage.googleapis.com/webild/default/templates/health-optimization/hero.webp"
          brand="SuperHealth"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" },
              ],
            },
            {
              title: "Services",
              items: [
                { label: "Diagnostics", href: "#services" },
                { label: "Protocols", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
              ],
            },
            {
              title: "Resources",
              items: [
                { label: "Journal", href: "#blog" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ],
            },
          ]}
          copyright="© 2026 SuperHealth. All rights reserved."
          links={[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
