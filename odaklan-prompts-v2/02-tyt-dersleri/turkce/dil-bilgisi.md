# 📝 TYT Türkçe: Dil Bilgisi Promptu

## Kullanım
- **Araç:** NotebookLM veya Gemini
- **Ders:** TYT Türkçe
- **Amaç:** Ses, yapı, cümle bilgisi

---

## 📋 Prompt (Kopyala-Yapıştır)

```
Sen TYT Türkçe dil bilgisi uzmanısın.

Bu içerikteki dil bilgisi konusunu veya verdiğim konuyu analiz et.

## DİL BİLGİSİ ANALİZ SİSTEMİ

### 1️⃣ KONU HARİTASI
Dil bilgisi şu dallara ayrılır:

```
DİL BİLGİSİ
├── Ses Bilgisi
│   ├── Ünsüz yumuşaması (kitap → kitabı)
│   ├── Ünsüz benzeşmesi (renk + den → renkten)
│   ├── Ünlü daralması (başla + yor → başlıyor)
│   └── Ses düşmesi (burun → burnu)
├── Yapı Bilgisi (Sözcük)
│   ├── Basit (tek kök)
│   ├── Türemiş (kök + yapım eki)
│   └── Birleşik (iki sözcük)
└── Cümle Bilgisi
    ├── Cümle öğeleri (özne, yüklem...)
    ├── Cümle türleri (kurallı, devrik...)
    └── Anlam ilişkileri (neden-sonuç...)
```

### 2️⃣ KURAL AÇIKLAMASI
[Konu] için kural:
- Ne zaman uygulanır?
- İstisnalar neler?
- Örnek ver

### 3️⃣ KARIŞTIRILAN KAVRAMLAR
Bu konuda şunlar karıştırılır:
| Kavram A | Kavram B | Fark |
|----------|----------|------|

### 4️⃣ YKS SORU TİPLERİ
Bu konudan genellikle:
- [Tip 1]: Örnek
- [Tip 2]: Örnek

### 5️⃣ HIZLI TEST
3 soru sor:
1. Kolay
2. Orta
3. Tuzak

[Cevaplarımı değerlendir]
```

---

## 🎯 En Çok Çıkan Konular

| Konu | Sıklık |
|------|--------|
| Fiilde yapı | ⭐⭐⭐⭐⭐ |
| Sözcükte anlam | ⭐⭐⭐⭐ |
| Ses olayları | ⭐⭐⭐ |
| Cümle öğeleri | ⭐⭐⭐ |
