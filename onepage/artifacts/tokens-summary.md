# Mobbin Design Tokens — Özet

> Kaynak: `http://localhost:8000` (Mobbin.com statik Next.js export)  
> Çıkarım: Tailwind CSS 3.4, HSL-based CSS custom properties

---

## 🎨 Renk Sistemi

### Primitive Colors (HSL)

#### Neutral Scale (Grayscale)
| Token | HSL | Kullanım |
|-------|-----|----------|
| `neutral-0` | `0 0% 100%` | Beyaz / Light background |
| `neutral-5` | `0 0% 96%` | Çok açık gri |
| `neutral-10` | `0 0% 93%` | Açık gri, divider |
| `neutral-20` | `0 0% 86%` | — |
| `neutral-30` | `0 0% 76%` | — |
| `neutral-40` | `0 0% 68%` | Secondary text |
| `neutral-50` | `0 0% 53%` | — |
| `neutral-60` | `0 0% 44%` | Tertiary text |
| `neutral-70` | `0 0% 36%` | — |
| `neutral-80` | `0 0% 25%` | — |
| `neutral-90` | `0 0% 15%` | — |
| `neutral-95` | `0 0% 12%` | Dark modal |
| `neutral-100` | `0 0% 8%` | Near black / Dark bg |

#### Brand & Semantic Colors
| Palette | 60 (Brand) | Hue Range |
|---------|-----------|-----------|
| **Blue** | `212 100% 50%` | 205°–227° |
| **Red** | `18 100% 44%` | 8°–18° |
| **Green** | `103 79% 35%` | 94°–120° |
| **Yellow** | `36 100% 33%` | 21°–53° |
| **Purple** | `280 56% 49%` | 275°–280° |

### Opacity Tokens
- **Black**: 4%, 6%, 8%, 10%, 12%, 16%, 24%, 32%, 48%, 64%, 88%, 96%, 100%
- **White**: Aynı scale
- **Gray** (93% lightness): 8%, 16%, 48%, 100%

### Light Mode Semantic Colors
| Kategori | Token | Değer |
|----------|-------|-------|
| **Text** | primary | neutral-100 |
|  | secondary | neutral-60 |
|  | tertiary | neutral-40 |
|  | link | blue-70 |
| **Background** | primary | neutral-0 |
|  | secondary | opacity-black-6 |
|  | tertiary | opacity-black-8 |
|  | inverse | neutral-100 |
|  | brand | blue-70 |
| **Border** | primary | neutral-100 |
|  | secondary | opacity-black-8 |
|  | divider | neutral-10 |
|  | brand | blue-70 |

### Dark Mode
- Text primary/secondary swap
- Background inverse değerleri ters
- Opacity white kullanımı

---

## 🔤 Typography

### Font Family
```css
font-family: var(--font-saans), sans-serif;
font-feature-settings: "dlig" on, "ss07" on, "calt" off;
```

### Type Scale

| Name | Size | Line Height | Weight | Letter Spacing |
|------|------|-------------|--------|----------------|
| **showcase** | 80px | 80px | 652 | -0.01em |
| **spotlight** | 56px | 56px | 652 | -0.01em |
| **title-1** | 44px | 44px | 652 | -0.01em |
| **title-2** | 32px | 36px | 652 | 0 |
| **title-3** | 24px | 30px | 652 | 0 |
| **feature** | 20px | 28px | 440 | 0 |
| **feature-bold** | 20px | 28px | 600 | 0 |
| **body** | 16px | 24px | 456 | 0.009em |
| **body-bold** | 16px | 24px | 600 | 0.009em |
| **compact** | 14px | 20px | 456 | 0.014em |
| **compact-bold** | 14px | 20px | 600 | 0.014em |
| **caption** | 12px | 16px | 456 | 0.017em |
| **caption-bold** | 12px | 16px | 600 | 0.017em |

> **Font Weight**: 440/456 = regular, 600 = semibold, 652 = display 

---

## 📐 Spacing Scale

```
0 → 4 → 8 → 12 → 16 → 20 → 24 → 28 → 32 → 36 → 40 → 44 → 48 → 52 → 56 → 60 → 64 → 80
```

**Artış**: 4px base, 4px increments

---

## 🔘 Border Radius Scale

| Token | Value |
|-------|-------|
| `radius-4` | 4px |
| `radius-8` | 8px |
| `radius-12` | 12px |
| `radius-16` | 16px |
| `radius-20` | 20px |
| `radius-24` | 24px |
| `radius-28` | 28px |
| `radius-32` | 32px |
| `radius-40` | 40px |
| `radius-full` | 9999px |

---

## 🌫️ Shadow Scale

| Token | Value | Kullanım |
|-------|-------|----------|
| `shadow` | `0 12px 80px hsl(0 0% 0%/16%)` | Default elevation |
| `shadow-dropdown` | `0 8px 24px hsl(0 0% 0%/12%)` | Dropdown/popover |
| `shadow-dropdown-dark` | `0 8px 24px hsl(0 0% 0%/48%)` | Dark mode dropdown |
| `shadow-image-inset` | `inset 0 0 0 0.5px hsl(0 0% 0%/10%)` | Image border |
| `shadow-glass` | `0 12px 80px hsl(0 0% 0%/16%)` | Glass effect |
| `shadow-xs` | `0 1px 2px rgba(0,0,0,0.04)` | Subtle |
| `shadow-large` | `0px 10px 20px -5px rgba(0,0,0,0.25)` | Heavy |
| `shadow-inset-1` | `inset 0px 0px 0px 1px` | Border simulation |
| `shadow-inset-2` | `inset 0px 0px 0px 2px` | Thick border |

---

## 📱 Breakpoints

| Name | Value | Container Max |
|------|-------|---------------|
| `min-720` | 720px | 720px |
| `min-840` | 840px | 840px |
| `min-1024` | 1024px | 1024px |
| `min-1280` | 1280px | 1280px |
| `min-1536` | 1536px | 1536px |
| `min-1920` | 1920px | 1920px |

**Max Content Width**: `1280px` (--max-content-width)

---

## ✨ Effects

### Blur
| Token | Value |
|-------|-------|
| blur | 8px |
| blur-md | 12px |
| blur-lg | 16px |
| blur-xl / blur-glass | 24px |

### Transition
| Token | Duration |
|-------|----------|
| fast | 100ms |
| default | 150ms |
| medium | 200ms |
| slow | 300ms |

### Easing
| Token | Curve |
|-------|-------|
| ease-out | `cubic-bezier(0, 0, 0.2, 1)` |
| ease-in-out | `cubic-bezier(0.4, 0, 0.2, 1)` |
| smooth | `cubic-bezier(0.32, 0.72, 0, 1)` |

---

## 🧊 Glass Morphism

Mobbin'de belirgin bir glass/frosted panel dili var:

```css
/* Glass Background */
background: hsl(0 0% 93% / 72%);
backdrop-filter: blur(24px);

/* Glass Border */
border-color: hsl(0 0% 93% / 8%);

/* Marketing Menu specifically */
--glass-background-unique-marketing-menu: 0 0% 93%/72%;
```

---

## 📋 Dosyalar

| Dosya | Açıklama |
|-------|----------|
| [tokens.tokens.json](./tokens.tokens.json) | DTCG format JSON |
| Bu dosya | Human-readable özet |

---

*Çıkarım tarihi: 2026-01-12*
