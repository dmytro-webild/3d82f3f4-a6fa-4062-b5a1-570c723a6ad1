# Templates

Templates are complete website starting points with customizable theming, pre-built sections, and consistent patterns.

---

## Directory Structure

```
src/
├── templates/                    # Template Pages (full websites)
│   ├── hotel/
│   │   ├── page.tsx             # Page component with sections
│   │   └── theme.css            # Colors, buttons, cards
│   ├── saas/
│   └── ...
│
└── components/
    └── templates/                # Template Components (reusable sections)
        ├── ResultsComparison.tsx
        └── HeroOverlayMarquee.tsx
```

---

## Template Pages

Located in `/src/templates/[name]/`, each template contains:
- `page.tsx` - Full page with StyleProvider wrapper and sections
- `theme.css` - CSS variables for colors, typography, buttons, cards

### page.tsx Structure

```tsx
import { StyleProvider } from "@/components/ui/StyleProvider";
import NavbarInline from "@/components/ui/NavbarInline";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import "./theme.css";

export default function TemplateName() {
  return (
    <StyleProvider
      siteBackground="aurora"
      heroBackground="cornerGlow"
      buttonVariant="stagger"
    >
      <NavbarInline {...navProps} />

      <HeroBillboard {...heroProps} />

      {/* More sections... */}

      <FooterSimple {...footerProps} />
    </StyleProvider>
  );
}
```

### StyleProvider Options

| Prop | Options |
|------|---------|
| `siteBackground` | `"aurora"`, `"cornerGlow"`, `"lightRaysCenter"`, `"lightRaysCorner"`, `"floatingGradient"`, `"gradientBars"`, `"horizonGlow"`, `"none"` |
| `heroBackground` | `"cornerGlow"`, `"lightRaysCenter"`, `"lightRaysCorner"`, `"horizonGlow"`, `"gradientBars"`, `"none"` |
| `buttonVariant` | `"stagger"`, `"arrow"`, `"expand"`, `"elastic"`, `"shift"`, `"magnetic"`, `"default"` |

### Asset Handling

Use Google Cloud Storage CDN for all media:
```
https://storage.googleapis.com/webild/default/templates/[template-name]/[asset].webp
https://storage.googleapis.com/webild/default/templates/[template-name]/[asset].mp4
```

---

## Adding Sections to a Template

### Decision Flow

```
1. Need a section for your template
           ↓
2. Check /src/components/sections/[category]/
           ↓
   ┌───────┴───────┐
   ↓               ↓
EXISTS?         DOESN'T EXIST?
   ↓               ↓
Import &      Create template component
use it        in /src/components/templates/
```

### Step 1: Check Existing Sections

Look in `/src/components/sections/` by category:

| Category | Path | Examples |
|----------|------|----------|
| Hero | `hero/` | HeroBillboard, HeroSplit, HeroOverlay |
| Features | `features/` | FeaturesBento, FeaturesMediaCards |
| Testimonial | `testimonial/` | TestimonialTrustCard, TestimonialRatingCards |
| Pricing | `pricing/` | PricingCards, PricingComparison |
| Footer | `footer/` | FooterSimple, FooterSimpleCard |
| Contact | `contact/` | ContactSplitForm, ContactCenter |
| FAQ | `faq/` | FaqSimple, FaqTwoColumn |
| Team | `team/` | TeamCards, TeamGrid |
| Blog | `blog/` | BlogSimpleCards |
| About | `about/` | AboutTextSplit |
| Metrics | `metrics/` | MetricsCards |

### Step 2a: If Section Exists → Use It

```tsx
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";

<HeroBillboard
  tag="Welcome"
  title="Your Title"
  description="Description text"
  primaryButton={{ text: "Get Started", href: "#contact" }}
  imageSrc="https://..."
/>
```

### Step 2b: If Section Doesn't Exist → Create Template Component

1. **First, study similar sections** in `/src/components/sections/[category]/`
   - Read 2-3 sections in the same category
   - Understand their props structure
   - Note which UI components they use
   - Observe animation and layout patterns

2. **Create your component** in `/src/components/templates/[Name].tsx`
   - Follow the same patterns you observed
   - Use consistent prop naming (tag, title, description, items)
   - Import the same UI components (Button, TextAnimation, etc.)

---

## Template Components

Located in `/src/components/templates/`, these are reusable section-level components for templates when no standard section fits.

### When to Create

Create when no suitable section exists in `/src/components/sections/` (see "Adding Sections" above).

### Current Components

| Component | Purpose |
|-----------|---------|
| `ResultsComparison` | Before/after comparison marquee with treatment cards |
| `HeroOverlayMarquee` | Full-screen hero with media background and bottom marquee |

### Structure

Template components follow the same patterns as UI components:

```tsx
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cls } from "@/lib/utils";

type ItemType = {
  // item properties
};

interface ComponentProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: ItemType[];
}

const ComponentName = ({ tag, title, description, primaryButton, secondaryButton, items }: ComponentProps) => {
  return (
    <section aria-label="Section label" className="py-20">
      {/* Section content */}
    </section>
  );
};

export default ComponentName;
```

---

## theme.css

Each template's theme.css defines the visual identity.

### Required Structure

```css
/* [Template Name] - [Theme Description] */
@import "tailwindcss";
@import "../../styles/masks.css";
@import "../../styles/animations.css";

:root {
  /* Colors (9 required) */
  --background: #ffffff;
  --card: #f5f5f5;
  --foreground: #171717;
  --primary-cta: #171717;
  --primary-cta-text: #ffffff;
  --secondary-cta: #f5f5f5;
  --secondary-cta-text: #171717;
  --accent: #171717;
  --background-accent: #171717;

  /* Layout */
  --radius: 1.5rem;
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* Carousel */
  --vw-1_5: 1.35rem;
  --width-carousel-padding: calc((100vw - var(--width-content-width)) / 2 + 1px - 1rem);
  --width-carousel-padding-controls: calc((100vw - var(--width-content-width)) / 2 + 1px);
  --width-carousel-item-2: calc(var(--width-content-width) / 2 - var(--vw-1_5) / 2);
  --width-carousel-item-3: calc(var(--width-content-width) / 3 - var(--vw-1_5) / 3 * 2);
  --width-carousel-item-4: calc(var(--width-content-width) / 4 - var(--vw-1_5) / 4 * 3);

  /* Typography */
  --text-2xs: 0.62rem;
  --text-xs: 0.72rem;
  --text-sm: 0.82rem;
  --text-base: 0.92rem;
  --text-lg: 1rem;
  --text-xl: 1.1rem;
  --text-2xl: 1.3rem;
  --text-3xl: 1.6rem;
  --text-4xl: 2rem;
  --text-5xl: 2.75rem;
  --text-6xl: 3.3rem;
  --text-7xl: 4rem;
  --text-8xl: 4.5rem;
  --text-9xl: 7rem;
}

/* Mobile typography */
@media (max-width: 768px) {
  :root {
    --text-2xs: 2.5vw;
    /* ... mobile sizes ... */
    --width-content-width: 85vw;
  }
}

@theme inline {
  /* Tailwind color mappings */
  --color-background: var(--background);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  /* ... */
}

/* Base styles */
* { scrollbar-width: thin; }
html { overscroll-behavior: none; }
body { background-color: var(--background); color: var(--foreground); }

/* WEBILD_CARD_STYLE */
.card {
  background: var(--color-card);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

/* WEBILD_PRIMARY_BUTTON */
.primary-button {
  background: linear-gradient(180deg, #1e1e1e 0%, #0c0c0c 100%);
  box-shadow: /* complex shadow */;
}

/* WEBILD_SECONDARY_BUTTON */
.secondary-button {
  background: var(--color-secondary-cta);
  border: 1px solid rgba(0, 0, 0, 0.08);
}
```

---

## Props & Naming Conventions

### Standard Props

| Prop | Usage |
|------|-------|
| `tag` | Small badge/label text |
| `title` | Main heading (h1/h2) |
| `description` | Subtitle/description text |
| `primaryButton` | `{ text: string; href: string }` |
| `secondaryButton` | `{ text: string; href: string }` |
| `items` / `features` | Array of data items |
| `imageSrc` / `videoSrc` | Media sources (exclusive) |
| `className` | Main wrapper element |
| `[element]ClassName` | Specific element (titleClassName, etc.) |

### Discriminated Union for Media

When a component accepts either image OR video (not both):

```typescript
type Props = {
  tag: string;
  title: string;
  // ...other props
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });
```

---

## Code Patterns

### cls() Utility

Always use for conditional classNames:

```tsx
import { cls } from "@/lib/utils";

className={cls(
  "base-classes px-4 py-2",
  isActive && "bg-primary",
  variant === "large" ? "text-xl" : "text-base"
)}
```

### Responsive Padding

Use consistent responsive spacing:

```tsx
// Container padding
className="p-3 xl:p-4 2xl:p-5"

// Gaps
className="gap-3 xl:gap-4 2xl:gap-5"

// Margins
className="mb-3 xl:mb-4 2xl:mb-5"
```

### UI Components

Import from `/src/components/ui/`:

| Component | Purpose |
|-----------|---------|
| `Button` | CTA buttons with variant prop |
| `TextAnimation` | Animated headings with gradientText option |
| `ImageOrVideo` | Handles both img and video display |
| `ScrollReveal` | Scroll-triggered animation wrapper |
| `AvatarGroup` | Avatar displays with overflow and label |
| `Accordion` | Expandable content sections |

### Marquee Pattern

For infinite horizontal scrolling:

```tsx
const duplicated = [...items, ...items, ...items, ...items];

<div className="overflow-hidden mask-fade-x">
  <div
    className="flex w-max animate-marquee-horizontal"
    style={{ animationDuration: "60s" }}
  >
    {duplicated.map((item, i) => (
      <div key={i} className="shrink-0 mr-3 md:mr-5">
        {/* Item content */}
      </div>
    ))}
  </div>
</div>
```

### Section Header Pattern

Consistent header for sections:

```tsx
<div className="flex flex-col items-center gap-2 mb-8">
  <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
    <p>{tag}</p>
  </div>

  <TextAnimation
    text={title}
    variant="slide-up"
    gradientText={true}
    tag="h2"
    className="text-6xl font-medium text-center text-balance"
  />

  <TextAnimation
    text={description}
    variant="slide-up"
    gradientText={false}
    tag="p"
    className="md:max-w-6/10 text-lg leading-snug text-center"
  />

  {(primaryButton || secondaryButton) && (
    <div className="flex flex-wrap justify-center gap-3 mt-3">
      {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />}
      {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
    </div>
  )}
</div>
```

---

## Template Catalog

| Template | Theme | Navbar | siteBackground |
|----------|-------|--------|----------------|
| landscaping | Light Green | NavbarCentered | aurora |
| luxury-travel-agency | Light Beige | NavbarInline | cornerGlow |
| hvac | Light Blue | NavbarInline | lightRaysCenter |
| plumber | Dark Blue | NavbarInline | lightRaysCorner |
| roofing | Dark Orange | NavbarCentered | cornerGlow |
| saas | Dark Purple | NavbarInline | aurora |
| skincare | Light Sand | NavbarFloating | floatingGradient |
| dentist | Light Blue | NavbarInline | lightRaysCenter |
| detailing | Dark Orange | NavbarCentered | cornerGlow |
| real-estate | Light Elegant | NavbarFloating | gradientBars |
| skincare-luxury | Light Rose | NavbarDropdown | floatingGradient |
| med-spa | Light Mauve | NavbarCentered | horizonGlow |
| hotel | Dark Luxury | NavbarInline | none |

---

## Creating a Template

1. Create `/src/templates/[name]/page.tsx` and `theme.css`
2. Set up StyleProvider with appropriate background/button variants
3. Import sections from `/src/components/sections/` or template components
4. Configure theme.css with colors, buttons, and card styles
5. Use CDN URLs for all media assets
6. Add route in App.tsx

