# Mobbin Reference Site — Section Map

> Yukarıdan aşağıya tüm section'lar, yapısal analiz.

---

## 1. Navigation Bar (Sticky)

| Özellik | Değer |
|---------|-------|
| **Konum** | Sabit, top |
| **Layout** | Flexbox, center |
| **İçerik** | Logo · Pricing · Login · CTA button |
| **UI Detay** | Glass morphism, backdrop-blur, rounded-full (pill shape) |
| **Kolon** | Tek satır |

---

## 2. Hero Section

| Özellik | Değer |
|---------|-------|
| **Amaç** | Ana değer önerisi |
| **İçerik Blokları** | App logo stack · Başlık (H1) · Alt metin · 2x CTA button |
| **Component Türü** | Hero |
| **Grid** | 1 kolon, dikey stack |
| **UI Detay** | Logo animasyonu, stacked logo efekti, "Join for free" + "See our plans" butonları |

---

## 3. Social Proof — Trusted By Logos

| Özellik | Değer |
|---------|-------|
| **Amaç** | Güvenilirlik göstergesi |
| **İçerik** | "Trusted by design teams at" + 6-8 logo (Uber, Airbnb, Meta, Revolut, Pinterest...) |
| **Component Türü** | Logo bar / Trust strip |
| **Grid** | Tek satır, horizontal flex, gap-24 |
| **UI Detay** | Gri tonlama logolar, minimal |

---

## 4. Product Cover Section

| Özellik | Değer |
|---------|-------|
| **Amaç** | Ürün ekran görüntüsü showcase |
| **İçerik** | Büyük browser mockup / dashboard ekranı |
| **Component Türü** | Image showcase |
| **Grid** | 1 kolon, geniş container |
| **UI Detay** | rounded-24, subtle shadow, overflow-hidden |

---

## 5. Library Stats Section (Scroll-triggered)

| Özellik | Değer |
|---------|-------|
| **Amaç** | İçerik genişliğini vurgulama |
| **İçerik** | "A growing library of..." + 3 stat (`1,150 apps` · `577,400 screens` · `306,000 flows`) |
| **Component Türü** | Stats / Counter |
| **Grid** | 1 kolon, dikey |
| **UI Detay** | Sticky section, scroll-driven animation, büyük tipografi (spotlight/showcase text) |

---

## 6. Search & Filter Section — "Design Patterns"

| Özellik | Değer |
|---------|-------|
| **Amaç** | Arama özelliği tanıtımı |
| **İçerik** | Başlık + Segmented Control (Screens / UI Elements / Flows / Text) + Marquee screenshot row |
| **Component Türü** | Feature highlight + Carousel / Marquee |
| **Grid** | 1 kolon + horizontal scroll |
| **UI Detay** | SegmentedControl pill tabs, infinite marquee animation, screen cards with captions |

---

## 7. Flows Section — "User Journeys"

| Özellik | Değer |
|---------|-------|
| **Amaç** | Flow özelliği tanıtımı |
| **İçerik** | Başlık + 2 video card (Videos / Prototype mode) |
| **Component Türü** | Feature cards with video |
| **Grid** | 2 kolon (desktop) / 1 kolon (mobile) |
| **UI Detay** | Video autoplay, rounded containers, caption altında açıklama |

---

## 8. Features Section — "From Inspiration to Creation"

| Özellik | Değer |
|---------|-------|
| **Amaç** | Çekirdek özellikleri tanıtma |
| **İçerik** | 3 video/gif card: Copy to Figma · Save to collections · Leave comments |
| **Component Türü** | Feature cards grid |
| **Grid** | 3 kolon (desktop) / 1 kolon (mobile) |
| **UI Detay** | aspect-[1.1], rounded-24, video autoplay loop, centered captions |

---

## 9. Testimonials Section

| Özellik | Değer |
|---------|-------|
| **Amaç** | Kullanıcı yorumları / sosyal kanıt |
| **İçerik** | "What our users are saying" + testimonial cards (avatar + isim + şirket + yorum) |
| **Component Türü** | Testimonial grid / Masonry |
| **Grid** | 4 kolon (desktop) / 2-3 kolon (tablet) / 1 kolon (mobile), masonry columns |
| **UI Detay** | rounded-24 cards, border, gradient fade overlay at bottom |

---

## 10. Final CTA Section

| Özellik | Değer |
|---------|-------|
| **Amaç** | Son dönüşüm çağrısı |
| **İçerik** | "Never run out of inspiration again" + CTA button |
| **Component Türü** | Hero CTA |
| **Grid** | 1 kolon, centered |
| **UI Detay** | Minimal, bold text |

---

## 11. App Ticker / Logo Marquee

| Özellik | Değer |
|---------|-------|
| **Amaç** | Desteklenen uygulamaları gösterme |
| **İçerik** | Scrolling app icons (Coinbase, Nike, Spotify, Netflix, X...) |
| **Component Türü** | Infinite marquee |
| **Grid** | Tek satır, horizontal loop |
| **UI Detay** | Logo row, grayscale or colored, auto-scroll animation |

---

## 12. Footer

| Özellik | Değer |
|---------|-------|
| **Amaç** | Navigasyon + yasal linkler |
| **İçerik Blokları** | 3 kolon: Explore · Company · Support + Alt satır: Copyright · Social icons · Legal links |
| **Component Türü** | Footer |
| **Grid** | 3 kolon (desktop) |
| **UI Detay** | Dark section, link grupları, social icons row |

---

## Özet Tablo

| # | Section | Component Türü | Grid |
|---|---------|---------------|------|
| 1 | Navigation | Navbar (Glass) | 1 row |
| 2 | Hero | Hero + CTA | 1 col |
| 3 | Social Proof | Logo bar | 1 row |
| 4 | Product Cover | Image showcase | 1 col |
| 5 | Library Stats | Stats/Counter | 1 col |
| 6 | Design Patterns | Feature + Marquee | 1 col + scroll |
| 7 | User Journeys | Feature cards | 2 col |
| 8 | Features | Feature cards | 3 col |
| 9 | Testimonials | Testimonial grid | 4 col masonry |
| 10 | Final CTA | Hero CTA | 1 col |
| 11 | App Ticker | Marquee | 1 row loop |
| 12 | Footer | Footer | 3 col |
