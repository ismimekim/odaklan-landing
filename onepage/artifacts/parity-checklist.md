# Parity Checklist — Target vs Reference

> Status: `matched` ✅ | `pending` ⏳ | `partial` 🔶

---

## Typography

| Token | Ref Value | Target | Status |
|-------|-----------|--------|--------|
| showcase | 80px / 80px lh / 652 wt | index.css | ✅ matched |
| spotlight | 56px / 56px lh / 652 wt | index.css | ✅ matched |
| title-1 | 44px / 44px lh | index.css | ✅ matched |
| title-2 | 32px / 36px lh | index.css | ✅ matched |
| title-3 | 24px / 30px lh | index.css | ✅ matched |
| feature | 20px / 28px lh / 440 wt | index.css | ✅ matched |
| body | 16px / 24px lh | index.css | ✅ matched |
| compact | 14px / 20px lh | index.css | ✅ matched |
| caption | 12px / 16px lh | index.css | ✅ matched |

---

## Spacing

| Token | Ref Value | Target | Status |
|-------|-----------|--------|--------|
| spacing-4 | 4px | --spacing-1 | ✅ matched |
| spacing-8 | 8px | --spacing-2 | ✅ matched |
| spacing-16 | 16px | --spacing-4 | ✅ matched |
| spacing-24 | 24px | --spacing-6 | ✅ matched |
| spacing-32 | 32px | --spacing-8 | ✅ matched |
| spacing-48 | 48px | --spacing-12 | ✅ matched |
| spacing-64 | 64px | --spacing-16 | ✅ matched |
| spacing-80 | 80px | --spacing-20 | ✅ matched |

---

## Border Radius

| Token | Ref Value | Target | Status |
|-------|-----------|--------|--------|
| radius-12 | 12px | --radius-md | ✅ matched |
| radius-24 | 24px | --radius-2xl | ✅ matched |
| radius-full | 9999px | --radius-full | ✅ matched |

---

## Colors

| Token | Ref HSL | Target | Status |
|-------|---------|--------|--------|
| neutral-0 (white) | 0 0% 100% | index.css | ✅ matched |
| neutral-100 (near black) | 0 0% 8% | index.css | ✅ matched |
| neutral-60 (secondary text) | 0 0% 44% | index.css | ✅ matched |
| blue-70 (brand link) | 216 100% 50% | index.css | ✅ matched |

---

## Shadows

| Token | Ref Value | Target | Status |
|-------|-----------|--------|--------|
| shadow (default) | 0 12px 80px 16% | --shadow-default | ✅ matched |
| shadow-dropdown | 0 8px 24px 12% | --shadow-dropdown | ✅ matched |
| shadow-glass | 0 12px 80px 16% | --shadow-glass | ✅ matched |

---

## Section Layout

| # | Section | Grid | Status |
|---|---------|------|--------|
| 1 | Navbar | 1 row flex | ✅ matched |
| 2 | Hero | 1 col center | ✅ matched |
| 3 | Problem (SocialProof) | 3 col grid | ✅ matched |
| 4 | Comparison (ProductCover) | 2 col grid | ✅ matched |
| 5 | 6-Step (LibraryStats) | 3 col grid | ✅ matched |
| 6 | Package (Features) | 3 col grid | ✅ matched |
| 7 | Pricing (FinalCTA) | 1 col center | ✅ matched |
| 8 | Footer | 1 col center | ✅ matched |

---

## Motion

| Category | Items | Status |
|----------|-------|--------|
| Load animations | Hero stagger (0ms, 100ms, 200ms, 300ms) | ✅ implemented |
| Scroll reveal | 6 sections with IntersectionObserver | ✅ implemented |
| Hover effects | hover-lift on cards | ✅ implemented |
| Stagger pattern | reveal-stagger class (80ms increment) | ✅ implemented |

---

## Accessibility

| Check | Status |
|-------|--------|
| prefers-reduced-motion | ✅ implemented |
| VR mode (?vr=1) | ✅ implemented |
| Keyboard navigation | ✅ anchor links work |
| Semantic HTML | ✅ proper headings |

---

## Content

| Check | Status |
|-------|--------|
| No reference text copied | ✅ verified |
| odaklan.co content integrated | ✅ verified |
| VR mode working | ✅ verified |

---

*Son güncelleme: 2026-01-12 — Motion implementation complete*
