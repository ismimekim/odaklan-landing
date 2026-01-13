# Runbook — One-Page Site Migration

> Çalıştırma komutları ve geliştirme rehberi.

---

## Referans Site

```bash
cd onepage/ref/mobbin
python3 -m http.server 8000
```

**URL:** http://localhost:8000

**VR Mode:** http://localhost:8000?vr=1

---

## Target Site

```bash
cd onepage/target
npm run dev -- --port 5173
```

**URL:** http://localhost:5173

**VR Mode:** http://localhost:5173?vr=1

---

## VR Mode Nedir?

`?vr=1` query parametresi ile açıldığında:

- `html.vr-mode` class'ı eklenir
- Tüm `animation-duration: 0s !important`
- Tüm `transition-duration: 0s !important`
- `scroll-behavior: auto !important`
- Hover efektleri devre dışı

Bu mod, visual diff karşılaştırması için kullanılır.

### CSS Implementasyonu

```css
html.vr-mode *,
html.vr-mode *::before,
html.vr-mode *::after {
  animation-duration: 0s !important;
  transition-duration: 0s !important;
}
```

---

## Motion Animasyonları

### Load Sequence (Hero)
- `.animate-hero-label` — 0ms delay
- `.animate-hero-heading` — 100ms delay
- `.animate-hero-subtitle` — 200ms delay
- `.animate-hero-cta` — 300ms delay

### Scroll Reveal
- `.reveal` — tek element reveal
- `.reveal-stagger` — child'lar 80ms aralıkla reveal
- `useScrollReveal()` hook — IntersectionObserver

### Hover Effects
- `.hover-lift` — translateY(-4px) + scale(1.02)
- `.hover-fade` — opacity 0.8

---

## Visual Diff Aracı

### Kurulum

```bash
cd onepage/target
npm install puppeteer pixelmatch pngjs
```

### Çalıştırma

```bash
# Her iki siteyi başlat
# Terminal 1: python3 -m http.server 8000 (ref)
# Terminal 2: npm run dev -- --port 5173 (target)

# Visual diff
cd onepage/target/tools
node visual-diff.js
```

### Çıktılar

`tools/output/` klasörü:

| Dosya | Açıklama |
|-------|----------|
| `ref.png` | Referans screenshot |
| `target.png` | Target screenshot |
| `diff.png` | Fark görselleştirmesi |
| `results.json` | Karşılaştırma metrikleri |

---

## Reduced Motion Desteği

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Bu, kullanıcının sistem ayarlarına saygı gösterir.

---

## Production Build

```bash
cd onepage/target
npm run build
npm run preview
```

---

## Hızlı Kontrol Listesi

- [x] Ref site çalışıyor mu? (port 8000)
- [x] Target site çalışıyor mu? (port 5173)
- [x] VR mode animasyonları kapatıyor mu?
- [x] Hero load animasyonları çalışıyor mu?
- [x] Scroll reveal çalışıyor mu?
- [x] Hover efektleri çalışıyor mu?
- [x] Responsive breakpoint'ler çalışıyor mu?

---

*Son güncelleme: 2026-01-12 — Motion implementation complete*
