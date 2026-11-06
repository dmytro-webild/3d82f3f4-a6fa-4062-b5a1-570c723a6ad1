# UI Components Research

## Common Across All (48 components)

All three platforms (Lovable, Replit, Base44) share these - likely shadcn/ui base:

- accordion
- alert-dialog
- alert
- aspect-ratio
- avatar
- badge
- breadcrumb
- button
- calendar
- card
- carousel
- chart
- checkbox
- collapsible
- command
- context-menu
- dialog
- drawer
- dropdown-menu
- form
- hover-card
- input-otp
- input
- label
- menubar
- navigation-menu
- pagination
- popover
- progress
- radio-group
- resizable
- scroll-area
- select
- separator
- sheet
- sidebar
- skeleton
- slider
- sonner
- switch
- table
- tabs
- textarea
- toast
- toaster
- toggle-group
- toggle
- tooltip

## Replit-Only (7 unique)

- button-group
- empty
- field
- input-group
- item
- kbd
- spinner

---

## Lovable

- accordion
- alert-dialog
- alert
- aspect-ratio
- avatar
- badge
- breadcrumb
- button
- calendar
- card
- carousel
- chart
- checkbox
- collapsible
- command
- context-menu
- dialog
- drawer
- dropdown-menu
- form
- hover-card
- input-otp
- input
- label
- menubar
- navigation-menu
- pagination
- popover
- progress
- radio-group
- resizable
- scroll-area
- select
- separator
- sheet
- sidebar
- skeleton
- slider
- sonner (toast notifications)
- switch
- table
- tabs
- textarea
- toast
- toaster
- toggle-group
- toggle
- tooltip

## Replit

- accordion
- alert-dialog
- alert
- aspect-ratio
- avatar
- badge
- breadcrumb
- button-group
- button
- calendar
- card
- carousel
- chart
- checkbox
- collapsible
- command
- context-menu
- dialog
- drawer
- dropdown-menu
- empty
- field
- form
- hover-card
- input-group
- input-otp
- input
- item
- kbd (keyboard shortcut display)
- label
- menubar
- navigation-menu
- pagination
- popover
- progress
- radio-group
- resizable
- scroll-area
- select
- separator
- sheet
- sidebar
- skeleton
- slider
- sonner
- spinner
- switch
- table
- tabs
- textarea
- toast
- toaster
- toggle-group
- toggle
- tooltip

## Base44

- accordion
- alert-dialog
- alert
- aspect-ratio
- avatar
- badge
- breadcrumb
- button
- calendar
- card
- carousel
- chart
- checkbox
- collapsible
- command
- context-menu
- dialog
- drawer
- dropdown-menu
- form
- hover-card
- input-otp
- input
- label
- menubar
- navigation-menu
- pagination
- popover
- progress
- radio-group
- resizable
- scroll-area
- select
- separator
- sheet
- sidebar
- skeleton
- slider
- sonner
- switch
- table
- tabs
- textarea
- toast
- toaster
- toggle-group
- toggle
- tooltip

---

## Analysis Summary

### Key Patterns from Competitors

1. **forwardRef** - All components use `React.forwardRef` for ref access
2. **CVA** - Class Variance Authority for variant management
3. **Compound exports** - Multiple sub-components per file
4. **Radix primitives** - 15+ Radix packages for accessibility
5. **CSS animations** - `data-[state=open]:animate-in` patterns

### Our Differences

| Aspect | Competitors | Our Approach | Why |
|--------|-------------|--------------|-----|
| Animation | CSS only | Framer Motion | More powerful for marketing sites |
| Variants | CVA | CSS classes | AI edits CSS directly |
| Exports | Compound | Single default | Simpler for AI |
| Backgrounds | None | 13 components | Unique value for marketing |

---

## Action Items

### 1. New Components to Add

| Component | Purpose | Approach |
|-----------|---------|----------|

### 2. Dependencies to Install

```bash
pnpm add embla-carousel-react react-day-picker
```

**No Radix dependencies** - Dropdown and Tooltip built from scratch with Framer Motion.

---

## Research Files

Competitor component files stored in:
- `research/base44/` - 49 JSX files
- `research/lovable/` - 48 TSX files
- `research/replit/` - 53 TSX files
