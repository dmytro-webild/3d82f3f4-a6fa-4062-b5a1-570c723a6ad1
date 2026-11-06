import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import TextAnimation from "@/components/ui/TextAnimation";

type TrailMedia = { imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never };

type AboutCursorTrailProps = {
  tag: string;
  title: string;
  media: TrailMedia[];
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const AboutCursorTrail = ({
  tag,
  title,
  media,
  primaryButton,
  secondaryButton,
  textAnimation,
}: AboutCursorTrailProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const images = Array.from(wrapper.querySelectorAll<HTMLElement>('[data-trail="item"]'));
      if (!images.length) return;

      let index = 0;
      let lastX = 0;
      let lastY = 0;
      let fadeTimeout: ReturnType<typeof setTimeout>;
      let isActive = false;
      const threshold = window.innerWidth / 15;

      function onMove(e: MouseEvent) {
        if (!isActive) return;
        const rect = wrapper!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Bounds check - ignore if mouse is outside the wrapper
        if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

        if (Math.hypot(x - lastX, y - lastY) > threshold) {
          if (index >= images.length) {
            gsap.to(images[(index - images.length) % images.length], { autoAlpha: 0, scale: 0.2, duration: 0.8, ease: "expo.out" });
          }
          const img = images[index % images.length];
          gsap.set(img, { x: x - img.offsetWidth / 2, y: y - img.offsetHeight / 2, zIndex: index, force3D: true });
          gsap.fromTo(img, { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: 0.2, overwrite: true });

          lastX = x;
          lastY = y;
          index++;

          clearTimeout(fadeTimeout);
          fadeTimeout = setTimeout(() => images.forEach(img =>
            gsap.to(img, { autoAlpha: 0, scale: 0.2, duration: 0.8, ease: "expo.out" })
          ), 350);
        }
      }

      function onMouseLeave() {
        clearTimeout(fadeTimeout);
        images.forEach(img =>
          gsap.to(img, { autoAlpha: 0, scale: 0.2, duration: 0.5, ease: "expo.out" })
        );
        // Reset position tracking so next entry starts fresh
        lastX = 0;
        lastY = 0;
      }

      // Listen on the section (parent), not the trail layer itself: the text
      // column is a SIBLING stacked above the trail layer, so a listener on
      // the layer only fires if the text column is pointer-events-none — and
      // that made the heading unclickable/uneditable in the visual editor.
      // Events over the text bubble up to the section; onMove already maps
      // coordinates via the wrapper rect (identical box, inset-0).
      const surface = wrapper.parentElement ?? wrapper;

      function startTrail() {
        if (isActive || !wrapper) return;
        isActive = true;
        surface.addEventListener("mousemove", onMove);
        surface.addEventListener("mouseleave", onMouseLeave);
      }

      function stopTrail() {
        if (!isActive || !wrapper) return;
        isActive = false;
        surface.removeEventListener("mousemove", onMove);
        surface.removeEventListener("mouseleave", onMouseLeave);
        clearTimeout(fadeTimeout);
        images.forEach(img => {
          gsap.killTweensOf(img);
          gsap.set(img, { autoAlpha: 0, scale: 1 });
        });
      }

      const trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top bottom",
        end: "bottom top",
        onEnter: startTrail,
        onEnterBack: startTrail,
        onLeave: stopTrail,
        onLeaveBack: stopTrail,
      });

      return () => {
        stopTrail();
        trigger.kill();
      };
    });

    mm.add("(max-width: 768px)", () => {
      const images = Array.from(wrapper.querySelectorAll<HTMLElement>('[data-trail="item"]'));
      if (!images.length) return;

      let index = 0;
      let lastScrollY = window.scrollY;
      let fadeTimeout: ReturnType<typeof setTimeout>;
      const threshold = 100;

      function onScroll() {
        const rect = wrapper!.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.bottom < 0) return;

        const scrollDelta = Math.abs(window.scrollY - lastScrollY);
        if (scrollDelta > threshold) {
          if (index >= images.length) {
            gsap.to(images[(index - images.length) % images.length], { autoAlpha: 0, scale: 0.2, duration: 0.8, ease: "expo.out" });
          }
          const img = images[index % images.length];
          const x = Math.random() * (rect.width - img.offsetWidth);
          const y = Math.random() * (rect.height - img.offsetHeight);
          gsap.set(img, { x, y, zIndex: index, force3D: true });
          gsap.fromTo(img, { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: 0.2, overwrite: true });

          lastScrollY = window.scrollY;
          index++;

          clearTimeout(fadeTimeout);
          fadeTimeout = setTimeout(() => images.forEach(img =>
            gsap.to(img, { autoAlpha: 0, scale: 0.2, duration: 0.8, ease: "expo.out" })
          ), 500);
        }
      }

      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
        clearTimeout(fadeTimeout);
        images.forEach(img => {
          gsap.killTweensOf(img);
          gsap.set(img, { autoAlpha: 0, scale: 1 });
        });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section aria-label="About section" className="relative py-60">
      <div ref={wrapperRef} data-trail="wrapper" className="w-full h-full absolute inset-0 z-0">
        {media.map((item, i) => (
          <div key={i} data-trail="item" className="invisible rounded w-[15em] h-[20em] absolute overflow-hidden">
            <ImageOrVideo imageSrc={item.imageSrc} videoSrc={item.videoSrc} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center gap-2 w-content-width mx-auto text-center">
        <h3 className="text-3xl md:text-5xl font-medium">{tag}</h3>
        <TextAnimation
          text={title}
          variant={textAnimation}
          gradientText={true}
          tag="h2"
          className="text-7xl md:text-8xl leading-[1.15] font-semibold text-center text-balance"
        />
        <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
          <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
          <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default AboutCursorTrail;
