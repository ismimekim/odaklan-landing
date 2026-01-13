# 🔄 6 Aşamalı Aktif Öğrenme Sistemi

## Neden 6 Aşama?

Her aşama **bir YKS öğrenci sorununu** çözer:

| Aşama | Çözdüğü Sorun |
|-------|---------------|
| 1. Filtreleme | "Neyi öğrenmeliyim?" |
| 2. Yapılandırma | "Nasıl organize edeyim?" |
| 3. Sorgulama | "Gerçekten anladım mı?" |
| 4. Uygulama | "Soru çözebiliyor muyum?" |
| 5. Hafıza | "Nasıl unutmam?" |
| 6. Planlama | "Şimdi ne yapmalıyım?" |

---

## 📊 Aşama Detayları

### 1️⃣ FİLTRELEME

```
AMAÇ: Bilgi kirliliğini azalt, YKS'de ne çıkacağını öğren

GİRDİ: Ham içerik (video, PDF, not)
ÇIKTI: Önceliklendirilmiş bilgi listesi

PROMPT: P1-notebooklm.md
ARAÇ: NotebookLM

SÜRE: ~3 dakika
```

**Ne öğrenirsin:**
- Bu konu sınavda ne kadar önemli
- Hangi alt konular kritik
- Neleri atlayabilirsin

---

### 2️⃣ YAPILANDIRMA

```
AMAÇ: Bilgiyi organize et, bağlantıları gör

GİRDİ: Filtrelenmiş içerik
ÇIKTI: Kavram haritası, hiyerarşi

PROMPT: P2-notebooklm.md
ARAÇ: NotebookLM

SÜRE: ~5 dakika
```

**Ne öğrenirsin:**
- Ana kavram ve alt kavramlar
- Konular arası bağlantılar
- Ön koşul ve sonraki konular

---

### 3️⃣ SORGULAMA

```
AMAÇ: Pasif öğrenmeyi kır, gerçek anlama testi yap

GİRDİ: Yapılandırılmış bilgi
ÇIKTI: Anlama puanı, eksikler

PROMPT: P3-notebooklm.md
ARAÇ: NotebookLM

SÜRE: ~10 dakika
```

**Ne yaparsın:**
- Kavramları kendi cümlerinle açıklarsın
- AI sorularına cevap verirsin
- Eksiklerini fark edersin

---

### 4️⃣ UYGULAMA

```
AMAÇ: Bilgiyi soru çözme becerisine dönüştür

GİRDİ: Anlaşılmış kavramlar
ÇIKTI: Pratik sorular, performans analizi

PROMPT: P4-notebooklm.md + P4.1-gemini.md
ARAÇ: NotebookLM + Gemini

SÜRE: ~10 dakika
```

**Ne yaparsın:**
- Farklı zorlukta sorular çözersin
- ÖSYM mantığını öğrenirsin
- Çeldirici analizini görürsün

---

### 5️⃣ HAFIZA

```
AMAÇ: Öğrenileni kalıcı hale getir

GİRDİ: Tüm öğrenilenler
ÇIKTI: Hafıza kartları, teknik, takvim

PROMPT: P5-notebooklm.md + P5.1-gemini.md
ARAÇ: NotebookLM + Gemini

SÜRE: ~5 dakika
```

**Ne alırsın:**
- Flash kartlar
- Hafıza teknikleri (mnemonik, hikaye)
- Aralıklı tekrar takvimi

---

### 6️⃣ PLANLAMA

```
AMAÇ: Sonraki adımları netleştir

GİRDİ: Oturum özeti
ÇIKTI: Aksiyon planı

PROMPT: P6-notebooklm.md
ARAÇ: NotebookLM

SÜRE: ~2 dakika
```

**Ne alırsın:**
- Bugün ne öğrendin özeti
- Yarın ne yapmalısın
- Sonraki konu önerisi

---

## 🚀 Hızlı vs Tam Akış

### Zamanın Azsa (20 dk):
```
P1 (Filtreleme) → P2 (Yapılandırma) → P3 (Sorgulama)
```

### Normal Çalışma (40 dk):
```
P1 → P2 → P3 → P4 → P5 → P6 (Tam akış)
```

### Derinlemesine (60+ dk):
```
Tam akış + Gemini alt promptları (P1.1, P2.1, vb.)
```

---

## ✅ Sonraki

[03-notebooklm-gemini-gecisi.md](03-notebooklm-gemini-gecisi.md) → İki araç arası geçişi öğren
