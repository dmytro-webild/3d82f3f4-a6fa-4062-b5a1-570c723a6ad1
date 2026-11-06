import { BarChart3, Film, Megaphone } from "lucide-react";
import { ReactLenis } from "lenis/react";
import NavbarFloating from "@/components/ui/NavbarFloating";
import NoiseGradientBackground from "@/components/ui/NoiseGradientBackground";
import { StyleProvider } from "@/components/ui/StyleProvider";
import HeroBillboardCreator from "@/components/sections/hero/HeroBillboardCreator";
import MetricsIconCards from "@/components/sections/metrics/MetricsIconCards";
import TestimonialColumnMarqueeCards from "@/components/sections/testimonial/TestimonialColumnMarqueeCards";
import FeaturesAlternatingSplit from "@/components/sections/features/FeaturesAlternatingSplit";
import PricingHighlightedCards from "@/components/sections/pricing/PricingHighlightedCards";
import FaqTwoColumn from "@/components/sections/faq/FaqTwoColumn";
import FooterSimpleMedia from "@/components/sections/footer/FooterSimpleMedia";
import "./theme.css";

export default function AiUgcTemplate() {
  return (
    <ReactLenis root>
      <StyleProvider buttonVariant="bounce">
        <NoiseGradientBackground position="fixed" />

        <NavbarFloating
          logo="UGCIFY"
          navItems={[
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "FAQ", href: "#faq" },
          ]}
          ctaButton={{ text: "Start Creating for Free", href: "#" }}
        />

        <div id="hero" data-section="hero">
          <HeroBillboardCreator
            textAnimation="fade-blur"
            tag="AI-Powered UGC"
            title="AI UGC Ads That"
            titleHighlight="Win."
            description="Turn any product into scroll-stopping video ads in minutes — powered by AI actors, smart scripts, and proven creative frameworks."
            primaryButton={{ text: "Start Creating for Free", href: "#" }}
            note="No credit card required"
            videos={[
              { videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-amara.mp4", name: "Aveline", followers: "2.8M followers", imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-ugc/logos/aveline.webp" },
              { videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-chloe.mp4", name: "Maison Céleste", followers: "1.9M followers", imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-ugc/logos/maison-celeste.webp" },
              { videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-elena.mp4", name: "Violette", followers: "3.4M followers", imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-ugc/logos/violette.webp" },
              { videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-isla.mp4", name: "Noa Lane", followers: "1.1M followers", imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-ugc/logos/noa-lane.webp" },
              { videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-zara.mp4", name: "Élodie", followers: "890K followers", imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-ugc/logos/elodie.webp" },
              { videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-nadia.mp4", name: "Liora", followers: "5.2M followers", imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-ugc/logos/liora.webp" },
            ]}
            badgeText="AI-generated"
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricsIconCards
            textAnimation="fade-blur"
            tag="Platform Stats"
            title="Built on Data. Proven by Results."
            description="Our AI learns from millions of high-performing ads to create winning content."
            metrics={[
              { value: "30M+", title: "Ads Analyzed", icon: BarChart3 },
              { value: "15M+", title: "Ads Created", icon: Film },
              { value: "$1B+", title: "Ad Spend", icon: Megaphone },
            ]}
          />
        </div>

        <div id="features" data-section="features">
          <FeaturesAlternatingSplit
            textAnimation="fade-blur"
            tag="How It Works"
            title="Your Ad Engine in Four Steps"
            description="Go from blank canvas to live campaign without touching a single editing tool."
            items={[
              {
                title: "Discover",
                description: "Explore high-performing ad formats across your vertical. Filter by platform, style, and industry to find the creative angles that resonate with your audience.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-ugc/discover.webp",
              },
              {
                title: "Generate",
                description: "Generate studio-quality video ads from a single product link. Choose between authentic UGC styles, cinematic visuals, or let the AI pick the best approach for your goals.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-ugc/create.webp",
              },
              {
                title: "Launch",
                description: "Deploy directly to Meta, TikTok, and YouTube from one dashboard. Each ad is automatically formatted and optimized for the destination platform.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-ugc/launch.webp",
              },
              {
                title: "Optimize",
                description: "See real-time performance data for every variant. Identify winning hooks, scale top performers, and pause underperformers — all without leaving the platform.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-ugc/optimize.webp",
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialColumnMarqueeCards
            textAnimation="fade-blur"
            tag="Wall of Love"
            title="What Our Users Are Saying"
            description="Join thousands of creators and marketers already making better ads with AI."
            testimonials={[
              { name: "Jonathan", role: "Founder, SiftCoin", quote: "Genuinely impressed. We launched three campaigns in a day and every single one outperformed our old agency work.", imageSrc: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Ayo", role: "Founder, SaaSi", quote: "Three years ago this kind of output would've taken a full production team. Now it's just me and an AI. Wild times.", imageSrc: "https://randomuser.me/api/portraits/men/75.jpg" },
              { name: "Sarah", role: "Growth Lead, Lumino", quote: "I was completely new to paid media. After switching to AI-generated creatives, my page views jumped 3,800% in one month.", imageSrc: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Derek", role: "CMO, Venturo", quote: "We retired our freelance video roster. The AI output matches the quality and the turnaround is measured in minutes, not weeks.", imageSrc: "https://randomuser.me/api/portraits/men/36.jpg" },
              { name: "Lina", role: "Performance Marketing, Bolt", quote: "Our cost per acquisition dropped 40% in two weeks. The platform picks up on winning hooks faster than any strategist I've worked with.", imageSrc: "https://randomuser.me/api/portraits/women/57.jpg" },
              { name: "Chris", role: "Indie Maker", quote: "Went from no ad creative to 200 variations in a single afternoon. If you're bootstrapping, this is a no-brainer.", imageSrc: "https://randomuser.me/api/portraits/men/85.jpg" },
              { name: "Bright Start", role: "Consumer App", quote: "We went from zero marketing budget to profitable campaigns in under a week. The AI handles the heavy lifting.", imageSrc: "https://randomuser.me/api/portraits/men/22.jpg" },
              { name: "Tim", role: "Founder, Supatool", quote: "Found this tool last week and I can't stop using it. If you're doing any kind of UGC ads, you need to try this immediately.", imageSrc: "https://randomuser.me/api/portraits/men/45.jpg" },
              { name: "Ramona", role: "Marketing VP", quote: "Production costs down 85%, ad output up 3x. The AI-generated presenters are so realistic our audience can't tell the difference.", imageSrc: "https://randomuser.me/api/portraits/women/65.jpg" },
              { name: "Priya", role: "Head of Paid, Canopy", quote: "We used to test 5 hooks per campaign. Now we test 50. The batch creation feature completely changed our workflow.", imageSrc: "https://randomuser.me/api/portraits/women/33.jpg" },
              { name: "Marcus", role: "Founder, NovaBrand", quote: "Paid for itself within the first campaign. Our return on ad spend tripled in 30 days.", imageSrc: "https://randomuser.me/api/portraits/men/55.jpg" },
              { name: "Elena", role: "Creative Director", quote: "I was skeptical about AI video ads. Then our engagement rate doubled on the first test. I'm fully converted now.", imageSrc: "https://randomuser.me/api/portraits/women/90.jpg" },
              { name: "Michael", role: "Founder, Dip Watch", quote: "This is the content engine every DTC brand has been waiting for. Been using it for a few weeks and results are already stacking.", imageSrc: "https://randomuser.me/api/portraits/men/52.jpg" },
              { name: "Jon", role: "Founder, So SaaSi", quote: "My TikTok ad game was terrible before this. Now I generate dozens of variations and let the algorithm pick the winner.", imageSrc: "https://randomuser.me/api/portraits/men/67.jpg" },
              { name: "Artery", role: "Agency", quote: "Our weekly ad output went from 5 to 50. The product-link-to-video pipeline alone saves our team dozens of hours per sprint.", imageSrc: "https://randomuser.me/api/portraits/women/28.jpg" },
              { name: "Nadia", role: "Media Buyer", quote: "A platform that actually understands what converts on paid social. It catches trending formats faster than any human team could.", imageSrc: "https://randomuser.me/api/portraits/women/71.jpg" },
              { name: "James", role: "Co-founder, AdScale", quote: "Plugged it into our pipeline and the creative bottleneck disappeared overnight. Scaling campaigns has never been this smooth.", imageSrc: "https://randomuser.me/api/portraits/men/41.jpg" },
              { name: "Olivia", role: "Growth Manager, Fizz", quote: "Paste a product link, get back scroll-stopping video ads. That single feature saved us 20+ hours a week.", imageSrc: "https://randomuser.me/api/portraits/women/15.jpg" },
            ]}
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingHighlightedCards
            textAnimation="fade-blur"
            tag="Pricing"
            title="Pick Your Plan"
            description="No hidden fees. Upgrade, downgrade, or cancel anytime."
            plans={[
              {
                tag: "Free",
                price: "$0/mo",
                description: "Perfect for trying things out.",
                features: [
                  "10 credits per month",
                  "100 AI presenters",
                  "50 ad templates",
                  "10 generation models",
                  "Watermark on exports",
                ],
                primaryButton: { text: "Get Started", href: "#" },
              },
              {
                tag: "Pro",
                price: "$49/mo",
                description: "For growth teams running ads at scale.",
                highlight: "Most Popular",
                features: [
                  "300 credits per month",
                  "1,500 AI presenters + 3 custom avatars",
                  "500+ ad templates",
                  "100+ premium models",
                  "Creative analytics dashboard",
                  "Team seats — up to 5 members",
                  "Direct ad platform publishing",
                  "75+ language support",
                ],
                primaryButton: { text: "Choose Pro", href: "#" },
              },
              {
                tag: "Starter",
                price: "$33/mo",
                description: "For solo creators shipping ads weekly.",
                features: [
                  "100 credits per month",
                  "300 AI presenters",
                  "200+ ad templates",
                  "50+ premium models",
                  "Watermark-free exports",
                  "75+ language support",
                ],
                primaryButton: { text: "Choose Starter", href: "#" },
              },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqTwoColumn
            textAnimation="fade-blur"
            tag="FAQ"
            title="Got Questions?"
            description="Here are the answers to the most common ones."
            items={[
              { question: "What exactly does this platform do?", answer: "It turns any product into high-performing video ads using AI. You provide a link or an image, and the platform generates scroll-stopping UGC-style or cinematic ads — ready to publish." },
              { question: "Do I need any video editing skills?", answer: "None at all. The entire process is automated. Paste a product link, pick a style, and the AI handles scripting, voiceover, visuals, and formatting." },
              { question: "Which ad formats can I create?", answer: "All the major ones — vertical (9:16) for TikTok and Reels, square (1:1) for feed placements, and landscape (16:9) for YouTube. Every export is optimized for its destination." },
              { question: "How realistic are the AI presenters?", answer: "Very. The platform offers over 1,500 AI-generated presenters that look and sound natural. On the Pro plan, you can also train custom avatars based on your own brand faces." },
              { question: "Can I publish ads directly from the platform?", answer: "Yes. Connect your Meta, TikTok, or YouTube ad accounts and push creatives live without switching tools." },
              { question: "Is there a way to try it for free?", answer: "Absolutely. The free tier gives you 10 credits per month, access to 100 AI presenters, and 50 templates — no credit card needed." },
              { question: "How does batch creation work?", answer: "You can generate dozens or hundreds of ad variations in one go by mixing different hooks, scripts, presenters, and visual styles. It's built for teams that run heavy A/B testing." },
              { question: "Which languages are supported?", answer: "Over 75 languages are available out of the box, so you can localize creatives for global markets without hiring translators or voiceover artists." },
            ]}
          />
        </div>

        <FooterSimpleMedia
          imageSrc="https://storage.googleapis.com/webild/default/templates/ai-ugc/footer-bg.webp"
          brand="UGCIFY"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Link to Video", href: "#" },
                { label: "AI Presenters", href: "#" },
                { label: "Batch Creation", href: "#" },
                { label: "Creative Remix", href: "#" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Developer API", href: "#" },
              ],
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Content Policy", href: "#" },
              ],
            },
          ]}
          copyright="© 2026 UGCIFY. All rights reserved."
          links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
