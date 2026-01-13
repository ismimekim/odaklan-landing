# 🎬 YouTube'dan NotebookLM'e Akış

## Genel Bakış

```
┌─────────────────────────────────────────────────────────────┐
│                    AKTİF ÖĞRENME AKIŞI                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📺 YouTube    →    📓 NotebookLM    →    🤖 Gemini         │
│  (Pasif)            (Analiz)              (Derinleştir)     │
│                                                             │
│  Video izle    →    İçeriği yükle    →    Detay ekle        │
│                →    Promptları uygula →    Soru üret        │
│                →    Öğren             →    Planla           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Adım Adım Akış

### ADIM 1: Video Bul ve İzle (Kısmen)

```
1. YouTube'da konu ara (örn: "Trigonometri konu anlatımı")
2. Güvenilir bir kanal seç
3. Videoyu izle (not alarak izlersen daha iyi)
4. Video bitince linkini kopyala
```

### ADIM 2: NotebookLM'e Yükle

```
1. notebooklm.google.com aç
2. Yeni notebook oluştur veya mevcut olanı seç
3. "Add Source" (+) tıkla
4. "YouTube" seç
5. Linki yapıştır → "Add" tıkla
6. 1-2 dakika bekle (video analiz ediliyor)
```

### ADIM 3: Filtreleme Promptunu Kullan (P1)

```
1. 03-ana-promptlar/P1-filtreleme/P1-notebooklm.md aç
2. Promptu kopyala
3. NotebookLM chat'ine yapıştır
4. Cevabı oku: Neyin önemli olduğunu öğren
```

### ADIM 4: Sırasıyla Diğer Promptları Uygula

```
P1 (Filtreleme) ✓
    ↓
P2 (Yapılandırma) → Kavram haritası al
    ↓
P3 (Sorgulama) → Kendini test et
    ↓
P4 (Uygulama) → Soru çöz
    ↓
P5 (Hafıza) → Hafıza teknikleri al
    ↓
P6 (Planlama) → Sonraki adımı planla
```

### ADIM 5: Gemini ile Derinleştir (Opsiyonel)

```
NotebookLM çıktısını al
    ↓
Gemini'ye yapıştır
    ↓
Alt promptları kullan (P1.1, P1.2 vb.)
    ↓
Daha detaylı bilgi al
```

---

## ⏱️ Tahmini Süreler

| Aşama | Süre |
|-------|------|
| Video yükleme | 2 dk |
| P1 Filtreleme | 3 dk |
| P2 Yapılandırma | 5 dk |
| P3 Sorgulama | 10 dk |
| P4 Uygulama | 10 dk |
| P5 Hafıza | 5 dk |
| P6 Planlama | 2 dk |
| **TOPLAM** | **~40 dk** |

---

## 💡 İpuçları

| İpucu | Açıklama |
|-------|----------|
| Hepsini yapma | Zamana göre P1-P2-P3 yeterli olabilir |
| Zorlanırsan | Gemini alt promptlarını kullan |
| Kaydet | Önemli çıktıları bir yere not et |
| Tekrar | Ertesi gün P5'teki tekrar planını uygula |

---

## ✅ Sonraki

[02-6-asamali-ogrenme.md](02-6-asamali-ogrenme.md) → 6 aşamayı detaylı öğren
