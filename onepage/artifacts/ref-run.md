# Referans Site: Çalıştırma Kılavuzu

## Kaynak
`onepage/ref/mobbin/` — **Mobbin.com** statik Next.js export

---

## Çalıştırma Komutu

```bash
cd onepage/ref/mobbin
python3 -m http.server 8000
```

**Alternatif:**
```bash
npx serve onepage/ref/mobbin -l 8000
```

---

## Erişim URL'si

**http://localhost:8000**

---

## Dikkat Notları

> [!WARNING]
> Bazı görseller yüklenmiyor. Site Next.js `_next/image` optimizer kullandığı için 404 veriyor. **Yapısal analiz için sorun yok.**

- Statik HTML dosyası, JS/CSS inline değil → her şey relative path
- CSS: 4 ayrı dosya (`css/` altında)
- JS: 55+ chunk (Next.js bundle)
- Font ve image dosyaları lokal çalışıyor
- Port 8000 meşgulse → farklı port kullan (örn: 8001)
