import Button from "@/components/ui/Button";

interface NavbarInlineProps {
  logo: string;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClose?: () => void) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onClose?.();
};

const NavbarInline = ({ logo, navItems, ctaButton }: NavbarInlineProps) => {
  return (
    <nav data-section="navbar" className="fixed z-1000 top-5 left-1/2 -translate-x-1/2 w-content-width">
      <div className="flex items-center justify-between p-2 xl:p-3 2xl:p-4 rounded backdrop-blur-sm card">
        <a href="/" className="pl-2 text-xl font-medium text-foreground">{logo}</a>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative text-base text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {item.name}
            </a>
          ))}
        </div>

        <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} />
      </div>
    </nav>
  );
};

export default NavbarInline;
