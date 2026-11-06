import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import PoolCage3DCanvas from "@/components/ui/PoolCage3DCanvas";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

const poolCageLogoSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23f7eaaf"/><stop offset="50%" stop-color="%23d4af37"/><stop offset="100%" stop-color="%238a6308"/></linearGradient><linearGradient id="c" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2300f5d4"/><stop offset="50%" stop-color="%2300b4d8"/><stop offset="100%" stop-color="%230077b6"/></linearGradient><linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230a2632"/><stop offset="100%" stop-color="%23031219"/></linearGradient></defs><rect width="100" height="100" rx="24" fill="url(%23b)" stroke="url(%23g)" stroke-width="2.5"/><path d="M 18 78 L 18 48 L 38 28 L 62 28 L 82 48 L 82 78" stroke="url(%23c)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line x1="18" y1="78" x2="82" y2="78" stroke="url(%23c)" stroke-width="3"/><line x1="18" y1="48" x2="82" y2="48" stroke="url(%23c)" stroke-width="2" stroke-dasharray="3,3"/><line x1="50" y1="28" x2="50" y2="78" stroke="url(%23c)" stroke-width="1.8"/><path d="M 50 72 C 50 48, 30 38, 20 42 C 34 38, 46 44, 50 72 Z" fill="url(%23g)"/><path d="M 50 72 C 50 48, 70 38, 80 42 C 66 38, 54 44, 50 72 Z" fill="url(%23g)"/><path d="M 50 72 C 50 38, 40 22, 30 18 C 42 22, 48 34, 50 72 Z" fill="url(%23g)"/><path d="M 50 72 C 50 38, 60 22, 70 18 C 58 22, 52 34, 50 72 Z" fill="url(%23g)"/><polygon points="50,14 53,20 50,26 47,20" fill="url(%23g)"/></svg>`;

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
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-luxury-swimming-pool-with-palm-tree_1339-4855.jpg?_wi=1"
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
