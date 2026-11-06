import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import PoolCage3DCanvas from '@/components/ui/PoolCage3DCanvas';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

const poolCageLogoSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="24" fill="%23041c24"/><path d="M15 75 Q 50 15 85 75" stroke="%2300b4d8" stroke-width="6" fill="none"/><line x1="20" y1="75" x2="80" y2="75" stroke="%2300d4bd" stroke-width="4"/><line x1="50" y1="28" x2="50" y2="75" stroke="%2300d4bd" stroke-width="3"/><path d="M25 65 Q 50 25 75 65" stroke="%2300f5d4" stroke-width="2" stroke-dasharray="3,3" fill="none"/><circle cx="50" cy="38" r="7" fill="%23f77f00"/></svg>`;

export default function Layout() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#features" },
    { name: "Products", href: "#products" },
    { name: "Metrics", href: "#metrics" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <PoolCage3DCanvas />
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
          logo="Best Pool Cages"
          logoImageSrc={poolCageLogoSvg}
          ctaButton={{
            text: "Free Estimate",
            href: "#contact",
          }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
          brand="Best Pool Cages"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#features" },
                { label: "Products", href: "#products" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Support",
              items: [
                { label: "FAQs", href: "#faq" },
                { label: "Warranty Info", href: "#faq" },
                { label: "Free Estimate", href: "#contact" },
              ],
            },
          ]}
          copyright="© 2026 Pool Perfect Screens LLC dba Best Pool Cages. All rights reserved."
          links={[
            { label: "Terms of Service", href: "#" },
            { label: "Privacy Policy", href: "#" },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-luxury-swimming-pool-with-palm-tree_1339-4855.jpg"
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
