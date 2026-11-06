"use client";

import { Children, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cls } from "@/lib/utils";
import { useCarouselControls } from "@/hooks/useCarouselControls";

interface CarouselProps {
  children: ReactNode;
  itemClassName?: string;
  className?: string;
}

const Carousel = ({ children, itemClassName = "", className = "" }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, containScroll: "trimSnaps" });
  const { prevDisabled, nextDisabled, scrollPrev, scrollNext, scrollProgress } = useCarouselControls(emblaApi);

  return (
    <div className={cls("flex flex-col gap-5 w-full", className)}>
      <div ref={emblaRef} className="overflow-hidden w-full cursor-grab">
        <div className="flex gap-4">
          <div className="shrink-0 w-carousel-padding" />
          {Children.map(children, (child, i) => (
            <div key={i} className={cls("shrink-0", itemClassName)}>{child}</div>
          ))}
          <div className="shrink-0 w-carousel-padding" />
        </div>
      </div>
      <div className="flex w-full">
        <div className="shrink-0 w-carousel-padding-controls" />
        <div className="flex justify-between items-center w-full">
          <div className="relative h-2 w-1/2 card rounded overflow-hidden">
            <div className="absolute top-0 bottom-0 -left-full w-full primary-button rounded" style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }} />
          </div>
          <div className="flex items-center gap-3">
            <button onClick={scrollPrev} disabled={prevDisabled} type="button" aria-label="Previous" className="flex items-center justify-center h-8 aspect-square secondary-button rounded cursor-pointer disabled:opacity-50 transition-opacity duration-300">
              <ChevronLeft className="h-2/5 aspect-square text-secondary-cta-text" />
            </button>
            <button onClick={scrollNext} disabled={nextDisabled} type="button" aria-label="Next" className="flex items-center justify-center h-8 aspect-square secondary-button rounded cursor-pointer disabled:opacity-50 transition-opacity duration-300">
              <ChevronRight className="h-2/5 aspect-square text-secondary-cta-text" />
            </button>
          </div>
        </div>
        <div className="shrink-0 w-carousel-padding-controls" />
      </div>
    </div>
  );
};

export default Carousel;
