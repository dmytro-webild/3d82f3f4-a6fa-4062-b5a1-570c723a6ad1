import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface NavbarDropdownProps {
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

const NavbarDropdown = ({ logo, navItems, ctaButton }: NavbarDropdownProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav data-section="navbar" ref={navRef} className="fixed z-1000 top-5 left-1/2 -translate-x-1/2 w-content-width">
      <div className="flex items-center justify-between p-2 xl:p-3 2xl:p-4 rounded backdrop-blur-sm card">
        <a href="/" className="pl-2 text-xl font-medium text-foreground">{logo}</a>

        <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4">
          <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} />

          <div
            className="relative flex items-center justify-center size-9 rounded cursor-pointer primary-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={cls(
                "absolute w-3 h-px bg-primary-cta-text transition-all duration-300",
                menuOpen ? "rotate-45" : "-translate-y-1"
              )}
            />
            <span
              className={cls(
                "absolute w-3 h-px bg-primary-cta-text transition-all duration-300",
                menuOpen ? "-rotate-45" : "translate-y-1"
              )}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full right-2 xl:right-3 2xl:right-4 -mt-1 px-4 py-1 w-3/4 md:w-3/10 2xl:w-25/100 rounded primary-button"
          >
            {navItems.map((item, index) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, () => setMenuOpen(false))}
                  className="group flex items-center justify-between py-3 w-full"
                >
                  <span className="text-base text-primary-cta-text group-hover:ml-2 transition-[margin] duration-300">
                    {item.name}
                  </span>
                  <ArrowUpRight
                    className="h-(--text-base) w-auto text-primary-cta-text group-hover:rotate-45 group-hover:mr-2 transition-all duration-300"
                    strokeWidth={1.75}
                  />
                </a>
                {index < navItems.length - 1 && (
                  <div className="h-px bg-primary-cta-text/20" />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarDropdown;
