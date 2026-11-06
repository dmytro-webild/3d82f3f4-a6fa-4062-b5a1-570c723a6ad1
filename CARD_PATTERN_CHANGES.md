# Card Pattern Consistency Update

This document outlines the card padding, gap, and font-weight consistency changes made across all section components.

---

## Changes Summary

### 1. Container Gap Changes
```
OLD: gap-3 xl:gap-4 2xl:gap-5
NEW: gap-4 xl:gap-5 2xl:gap-6
```

### 2. Container Padding Changes
```
OLD: p-3 xl:p-4 2xl:p-5
NEW: p-6 xl:p-7 2xl:p-8

OLD: p-4 xl:p-5 2xl:p-6
NEW: p-6 xl:p-7 2xl:p-8
```

### 3. Font Weight Changes
```
OLD: font-medium
NEW: font-semibold
```

### 4. Margin Changes
```
OLD: mb-3 xl:mb-4 2xl:mb-5
NEW: mb-4 xl:mb-5 2xl:mb-6
```

### 5. Horizontal Padding Changes
```
OLD: px-3 xl:px-4 2xl:px-5
NEW: px-6 xl:px-7 2xl:px-8
```

---

## Reference Pattern

The canonical reference is `AboutFeaturesSplit.tsx`:

```tsx
<div className="flex flex-col md:flex-row md:items-stretch gap-5">
  <div className="flex flex-col justify-center gap-4 xl:gap-5 2xl:gap-6 p-6 xl:p-7 2xl:p-8 w-full md:w-4/10 2xl:w-35/100 card rounded">
    {items.map((item, index) => {
      const ItemIcon = resolveIcon(item.icon);
      return (
      <div key={item.title}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center shrink-0 mb-1 size-10 primary-button rounded">
            <ItemIcon className="h-2/5 w-2/5 text-primary-cta-text" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-semibold">{item.title}</h3>
          <p className="text-base leading-snug">{item.description}</p>
        </div>
        {index < items.length - 1 && (
          <div className="mt-4 xl:mt-5 2xl:mt-6 border-b border-accent/40" />
        )}
      </div>
      );
    })}
  </div>

  <div className="p-px w-full md:w-6/10 2xl:w-7/10 h-80 md:h-auto card rounded overflow-hidden">
    <div className="relative size-full">
      <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="absolute inset-0 object-cover rounded" />
    </div>
  </div>
</div>
```

---

## Files Updated

### Gap Pattern (32 files)
- `src/components/sections/metrics/MetricsMediaCards.tsx`
- `src/components/sections/product/ProductVariantCards.tsx`
- `src/components/sections/product/ProductRatingCards.tsx`
- `src/components/sections/product/ProductQuantityCards.tsx`
- `src/components/sections/product/ProductMediaCards.tsx`
- `src/components/sections/team/TeamOverlayCards.tsx`
- `src/components/sections/testimonial/TestimonialQuoteCards.tsx`
- `src/components/sections/testimonial/TestimonialRatingCards.tsx`
- `src/components/sections/testimonial/TestimonialColumnMarqueeCards.tsx`
- `src/components/sections/features/FeaturesTimelineCards.tsx`
- `src/components/sections/features/FeaturesTaggedCards.tsx`
- `src/components/sections/features/FeaturesMediaGrid.tsx`
- `src/components/sections/features/FeaturesMediaCards.tsx`
- `src/components/sections/features/FeaturesGridSplit.tsx`
- `src/components/sections/features/FeaturesFlipCards.tsx`
- `src/components/sections/features/FeaturesComparison.tsx`
- `src/components/sections/features/FeaturesBorderGlow.tsx`
- `src/components/sections/features/FeaturesBentoGrid.tsx`
- `src/components/sections/features/FeaturesBento.tsx`
- `src/components/sections/features/FeaturesArrowCards.tsx`
- `src/components/sections/features/FeaturesIconCards.tsx`
- `src/components/sections/blog/BlogTagCards.tsx`
- `src/components/sections/blog/BlogSimpleCards.tsx`
- `src/components/sections/metrics/MetricsFeatureCards.tsx`
- `src/components/sections/metrics/MetricsSimpleCards.tsx`
- `src/components/sections/pricing/PricingHighlightedCards.tsx`
- `src/components/sections/pricing/PricingSimpleCards.tsx`
- `src/components/sections/pricing/PricingCenteredCards.tsx`
- `src/components/sections/hero/HeroWorkScrollStack.tsx`
- `src/components/sections/hero/HeroBillboardTestimonial.tsx`
- `src/components/sections/hero/HeroOverlayTestimonial.tsx`
- `src/components/sections/hero/HeroSplitTestimonial.tsx`

### Padding Pattern (44 files)
- `src/components/sections/about/AboutTestimonialParallax.tsx`
- `src/components/sections/about/AboutFeaturesSplit.tsx`
- `src/components/sections/metrics/MetricsMediaCards.tsx`
- `src/components/sections/metrics/MetricsIconCards.tsx`
- `src/components/sections/metrics/MetricsFeatureCards.tsx`
- `src/components/sections/metrics/MetricsGradientCards.tsx`
- `src/components/sections/metrics/MetricsSimpleCards.tsx`
- `src/components/sections/product/ProductVariantCards.tsx`
- `src/components/sections/product/ProductRatingCards.tsx`
- `src/components/sections/product/ProductQuantityCards.tsx`
- `src/components/sections/product/ProductMediaCards.tsx`
- `src/components/sections/faq/FaqTwoColumn.tsx`
- `src/components/sections/team/TeamOverlayCards.tsx`
- `src/components/sections/team/TeamListCards.tsx`
- `src/components/sections/team/TeamDetailedCards.tsx`
- `src/components/sections/testimonial/TestimonialQuoteCards.tsx`
- `src/components/sections/testimonial/TestimonialOverlayCards.tsx`
- `src/components/sections/testimonial/TestimonialRatingCards.tsx`
- `src/components/sections/testimonial/TestimonialColumnMarqueeCards.tsx`
- `src/components/sections/features/FeaturesTimelineCards.tsx`
- `src/components/sections/features/FeaturesTaggedCards.tsx`
- `src/components/sections/features/FeaturesRevealCardsBento.tsx`
- `src/components/sections/features/FeaturesResultsComparison.tsx`
- `src/components/sections/features/FeaturesMediaCards.tsx`
- `src/components/sections/features/FeaturesFlipCards.tsx`
- `src/components/sections/features/FeaturesComparison.tsx`
- `src/components/sections/features/FeaturesBorderGlow.tsx`
- `src/components/sections/features/FeaturesBentoGrid.tsx`
- `src/components/sections/features/FeaturesBento.tsx`
- `src/components/sections/features/FeaturesArrowCards.tsx`
- `src/components/sections/features/FeaturesIconCards.tsx`
- `src/components/sections/features/FeaturesGridSplit.tsx`
- `src/components/sections/blog/BlogTagCards.tsx`
- `src/components/sections/blog/BlogSimpleCards.tsx`
- `src/components/sections/blog/BlogArticle.tsx`
- `src/components/sections/pricing/PricingMediaCards.tsx`
- `src/components/sections/pricing/PricingHighlightedCards.tsx`
- `src/components/sections/pricing/PricingSimpleCards.tsx`
- `src/components/sections/pricing/PricingCenteredCards.tsx`
- `src/components/sections/hero/HeroBillboardTestimonial.tsx`
- `src/components/sections/hero/HeroOverlayTestimonial.tsx`
- `src/components/sections/hero/HeroSplitTestimonial.tsx`
- `src/components/sections/hero/HeroSplitKpi.tsx`
- `src/components/sections/contact/ContactSplitFormParallax.tsx`

### Font Weight (106+ files)
All section components with `font-medium` class were updated to `font-semibold`.

### UI Components Updated (Phase 2)
- `src/components/ui/Card.tsx` - padding
- `src/components/ui/Modal.tsx` - padding, gap, margin, font-weight
- `src/components/ui/Sheet.tsx` - padding, gap, margin, font-weight
- `src/components/ui/NavbarFloating.tsx` - padding, gap, horizontal padding, font-weight
- `src/components/ui/NavbarFloatingLogo.tsx` - padding, gap, horizontal padding, font-weight
- `src/components/ui/Accordion.tsx` - font-weight
- `src/components/ui/ActiveBadge.tsx` - font-weight
- `src/components/ui/AvatarGroup.tsx` - font-weight
- `src/components/ui/Calendar.tsx` - font-weight
- `src/components/ui/DropdownMenu.tsx` - font-weight
- `src/components/ui/Label.tsx` - font-weight
- `src/components/ui/LoaderReveal.tsx` - font-weight
- `src/components/ui/NavbarCentered.tsx` - font-weight
- `src/components/ui/NavbarDropdown.tsx` - font-weight
- `src/components/ui/NavbarFullscreen.tsx` - font-weight
- `src/components/ui/NavbarInline.tsx` - font-weight
- `src/components/ui/SectionErrorBoundary.tsx` - font-weight
- `src/components/ui/SelectorButton.tsx` - font-weight

### E-commerce Components Updated (Phase 2)
- `src/components/ecommerce/ProductCart.tsx` - font-weight
- `src/components/ecommerce/ProductCatalog.tsx` - font-weight
- `src/components/ecommerce/ProductDetailCard.tsx` - font-weight

### Pages Updated (Phase 2)
All 72 preview/demo pages in `src/pages/` were updated with `font-semibold`.

---

## Visual Impact

These changes result in:
1. **Larger card padding** - More breathing room inside cards
2. **Larger gaps** - More space between card elements
3. **Bolder titles** - Semibold instead of medium weight for better hierarchy

---

## Verification

Run `npm run build` to verify all changes compile correctly.
