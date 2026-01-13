# Visual Diff Tool

Screenshot comparison between reference and target sites.

---

## Kurulum

```bash
cd onepage/target
npm install puppeteer pixelmatch pngjs
```

---

## Ön Hazırlık

Her iki siteyi de **VR mode** ile çalıştır:

**Terminal 1 — Reference Site:**
```bash
cd onepage/ref/mobbin
python3 -m http.server 8000
```

**Terminal 2 — Target Site:**
```bash
cd onepage/target
npm run dev
# → http://localhost:5173
```

---

## Çalıştırma

```bash
cd onepage/target/tools
node visual-diff.js
```

---

## Çıktılar

`tools/output/` klasöründe:

| Dosya | Açıklama |
|-------|----------|
| `ref.png` | Referans site screenshot |
| `target.png` | Target site screenshot |
| `diff.png` | Fark görselleştirmesi (kırmızı = farklı) |
| `results.json` | Karşılaştırma metrikleri |

---

## Ayarlar

`visual-diff.js` içindeki `CONFIG` değişkenini düzenle:

```javascript
const CONFIG = {
  ref: 'http://localhost:8000?vr=1',
  target: 'http://localhost:5173?vr=1',
  viewport: { width: 1280, height: 800 },
  fullPage: true,
};
```

---

## İpuçları

1. **`?vr=1` zorunlu** — Animasyonları kapatmak için
2. **Viewport uyumu** — Her iki site aynı genişlikte olmalı
3. **Font yüklenmesi** — Script 1 saniye bekliyor, yavaş bağlantıda artır
4. **Diff yorumlama** — Kırmızı alanlar farklılık gösterir

---

*Son güncelleme: 2026-01-12*
