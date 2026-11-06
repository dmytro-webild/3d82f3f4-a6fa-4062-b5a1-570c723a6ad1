# Card Styles

14 card style variants available.

---

## solid

background: var(--color-card);

---

## outline

background: var(--color-card);
border: 1px solid color-mix(in srgb, var(--color-foreground) 10%, transparent);

---

## glass-elevated

backdrop-filter: blur(8px);
background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
border: 1px solid var(--color-card);

---

## gradient-bordered

background: linear-gradient(180deg, color-mix(in srgb, var(--color-card) 100%, var(--color-accent) 5%) -35%, var(--color-card) 65%);
box-shadow: 0px 0px 10px 4px color-mix(in srgb, var(--color-accent) 4%, transparent);
border: 1px solid color-mix(in srgb, var(--color-accent) 20%, transparent);

---

## layered-gradient

background:
  linear-gradient(color-mix(in srgb, var(--color-accent) 6%, transparent) 0%, transparent 59.26%),
  linear-gradient(var(--color-card) 0%, var(--color-card) 100%),
  var(--color-card);
box-shadow:
  20px 18px 7px color-mix(in srgb, var(--color-accent) 0%, transparent),
  2px 2px 2px color-mix(in srgb, var(--color-accent) 6.5%, transparent),
  1px 1px 2px color-mix(in srgb, var(--color-accent) 2%, transparent);
border: 2px solid var(--color-secondary-cta);

---

## soft-shadow

background: var(--color-card);
box-shadow: color-mix(in srgb, var(--color-primary-cta) 5%, transparent) 0px 0.706592px 0.706592px -0.666667px, color-mix(in srgb, var(--color-primary-cta) 3%, transparent) 0px 1.80656px 1.80656px -1.33333px, color-mix(in srgb, var(--color-primary-cta) 2%, transparent) 0px 3.62176px 3.62176px -2px, color-mix(in srgb, var(--color-primary-cta) 2%, transparent) 0px 6.8656px 6.8656px -2.66667px, color-mix(in srgb, var(--color-primary-cta) 2%, transparent) 0px 13.6468px 13.6468px -3.33333px, color-mix(in srgb, var(--color-primary-cta) 2%, transparent) 0px 30px 30px -4px;

---

## subtle-shadow

background: var(--color-card);
box-shadow: color-mix(in srgb, var(--color-foreground) 5%, transparent) 0px 4px 32px 0px;

---

## inner-glow

background: var(--color-card);
box-shadow: inset 0 0 30px 0 color-mix(in srgb, var(--color-foreground) 4%, transparent), inset 0 1px 0 0 color-mix(in srgb, var(--color-foreground) 8%, transparent), 0 4px 12px -4px color-mix(in srgb, var(--color-foreground) 8%, transparent);

