import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#features"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Products",
    "href": "#products"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Pool Perfect Screens"
      logoImageSrc="https://picsum.photos/seed/logoimagesrc/800/600"
      ctaButton={{
        text: "Get Estimate",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Best Pool Cages (DBA of Pool Perfect Screens LLC)"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Warranty Info",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Pool Perfect Screens LLC. All rights reserved."
      links={[
        {
          label: "Terms of Service",
          href: "#",
        },
        {
          label: "Privacy",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-walking-front-large-billboard_53876-98092.jpg"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
