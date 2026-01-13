# Mobbin Reference — Motion Map

> Tüm animasyon ve interaction'ların envanterleri.

---

## 1. Load Sequence (Sayfa Yüklenme)

| Element | Property | Duration | Delay | Easing |
|---------|----------|----------|-------|--------|
| Hero H1 Başlık | `opacity: 0→1`, `transform: translateY(20px→0)` | 500ms | 0ms | `ease-out` |
| Hero P (Alt metin) | `opacity: 0→1`, `transform: translateY(20px→0)` | 500ms | 100ms | `ease-out` |
| Hero CTA Butonları | `opacity: 0→1`, `transform: translateY(20px→0)` | 500ms | 200ms | `ease-out` |
| "Join for free" Shine | `background-position` (sliding gradient) | 800ms | 800ms | `ease-in-out` |
| Brand Logo Marquee | `transform: translateX` (loop) | 60s | 0ms | `linear` |
| Screen Marquee | `transform: translateX` (loop) | 80s | 0ms | `linear` |

---

## 2. Scroll-triggered (Scroll Reveal)

### 2.1 General Section Reveal

| Element | Trigger | Property | Duration | Easing |
|---------|---------|----------|----------|--------|
| Section Headers | `IntersectionObserver` | `opacity: 0→1`, `transform: translateY(30px→0)` | 400-600ms | `ease-out` |
| Feature Cards | `IntersectionObserver` | `opacity: 0→1`, `transform: translateY(40px→0)` | 400-600ms | `ease-out` |
| Testimonial Cards | `IntersectionObserver` | `opacity: 0→1` | 400ms | `ease-out` |

### 2.2 Library Stats Section (Scroll-linked)

| Element | Trigger | Property | Behavior |
|---------|---------|----------|----------|
| Container | Sticky scroll (`h-[400vh]`) | `position: sticky` | Scroll-progress driven |
| Stat Numbers (1,150 / 577,400 / 306,000) | Scroll progress | `transform: scale`, `opacity` | Fade in/out as scroll progresses |
| Background Images | Scroll progress | `opacity`, `blur` | Parallax-like effect |

> **Not:** Bu section `IntersectionObserver` değil, `scroll-timeline` veya JS ile `scrollTop` takibi kullanıyor.

### 2.3 Footer Reveal

| Element | Trigger | Property | Behavior |
|---------|---------|----------|----------|
| Footer | Scroll to bottom | `position: sticky`, `bottom: 0`, `z-index: -1` | Content scrolls up, footer "reveals" from behind |

---

## 3. Hover Interactions

| Element | Trigger | Property | Duration | Easing |
|---------|---------|----------|----------|--------|
| Nav Links (Pricing, Login) | `:hover` | `opacity: 1→0.8` | 150ms | `cubic-bezier(0, 0, 0.2, 1)` |
| Primary Button (Join for free) | `:hover` | `background-color`, `color` | 150ms | `cubic-bezier(0, 0, 0.2, 1)` |
| Secondary Button (See our plans) | `:hover` | `background-color: transparent→white/10` | 150ms | `cubic-bezier(0, 0, 0.2, 1)` |
| Segmented Control Tabs | `:hover` | `color`, `background-color` | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Feature Cards | `:hover` | `transform: scale(1.02)` | 300ms | `ease-out` |
| Footer Links | `:hover` | `opacity: 1→0.8`, `text-decoration: underline` | 150ms | `ease-out` |

---

## 4. Click Interactions

| Element | Trigger | Property | Duration | Easing |
|---------|---------|----------|----------|--------|
| Segmented Control Active Indicator | `click` | `width`, `transform: translateX` | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` |

---

## 5. Continuous / Infinite Animations

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Brand Logo Marquee (Uber, Airbnb...) | `transform: translateX(-50%)` | 60s | `linear` |
| Screen Marquee (Design Patterns) | `transform: translateX(-50%)` | 80s | `linear` |
| App Icon Ticker (Coinbase, Nike...) | `transform: translateX(-50%)` | 60s | `linear` |

> **Not:** Marquee'ler `@keyframes` ile loop yapıyor, duplicate content ile seamless scroll sağlıyor.

---

## 6. Easing Cheat Sheet

| Easing | CSS | Kullanım |
|--------|-----|----------|
| `ease-out` | `cubic-bezier(0.0, 0.0, 0.2, 1.0)` | Reveal animations, hover exits |
| `ease-in-out` | `cubic-bezier(0.4, 0.0, 0.2, 1.0)` | Shine effects, smooth transitions |
| `linear` | `linear` | Marquee/ticker loops |
| `ease` | `cubic-bezier(0.25, 0.1, 0.25, 1.0)` | Generic transitions |

---

## 7. Stagger Patterns

| Context | Base Delay | Stagger Increment |
|---------|------------|-------------------|
| Hero Load | 0ms | +100ms per element |
| Section Cards (3 col) | 0ms | +80ms per card |
| Testimonial Grid | 0ms | +50ms per card |

---

## 8. VR Mode (`?vr=1`) — Animasyon Kapatma Yaklaşımı

### Tespit

```javascript
// main.js veya index.js'de
const params = new URLSearchParams(window.location.search);
if (params.get('vr') === '1') {
  document.documentElement.classList.add('vr-mode');
}
```

### CSS Override

```css
/* vr-mode.css veya main.css sonuna ekle */
html.vr-mode *,
html.vr-mode *::before,
html.vr-mode *::after {
  animation-delay: 0s !important;
  animation-duration: 0s !important;
  animation-iteration-count: 1 !important;
  transition-delay: 0s !important;
  transition-duration: 0s !important;
  scroll-behavior: auto !important;
}

/* Marquee'leri tamamen durdur */
html.vr-mode [class*="marquee"],
html.vr-mode [class*="ticker"] {
  animation-play-state: paused !important;
  transform: translateX(0) !important;
}

/* Scroll-linked animasyonları bypass */
html.vr-mode .sticky-section {
  position: relative !important;
  height: auto !important;
}
```

### Bonus: prefers-reduced-motion Desteği

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

> **Kullanım:** Tarayıcıda `http://localhost:8000?vr=1` olarak açıldığında tüm animasyonlar devre dışı kalır.

---

## Özet Tablo

| Trigger | Toplam Item | Örnek Elementler |
|---------|-------------|------------------|
| **Load** | 6 | Hero text, buttons, marquees |
| **Scroll** | 8+ | Section reveals, stats section, footer |
| **Hover** | 7 | Nav links, buttons, cards, tabs |
| **Click** | 1 | Segmented control |
| **Continuous** | 3 | Marquees/tickers |

---

**Kaynaklar:**
- [section-map.md](file:///Users/ekim/Desktop/odaklan.2/onepage/artifacts/section-map.md) — Section yapısı
- [ref-run.md](file:///Users/ekim/Desktop/odaklan.2/onepage/artifacts/ref-run.md) — Çalıştırma kılavuzu
