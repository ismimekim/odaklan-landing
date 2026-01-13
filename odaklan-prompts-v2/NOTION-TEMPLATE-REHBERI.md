# 📓 Notion Template Oluşturma Rehberi

## Genel Bakış

Bu rehber, odaklan-prompts-v2 klasöründeki 35 dosyayı Notion'a aktarmanı ve birbiriyle bağlantılı bir template oluşturmanı sağlayacak.

**Süre:** ~20 dakika
**Gerekli:** Notion hesabı

---

## 📁 ADIM 1: Ana Sayfa Oluştur (2 dk)

### 1.1 Yeni Sayfa Aç
1. Notion'da sol menüden **"+ Add a page"** tıkla
2. Sayfa adı: `📚 odaklan.co YKS Prompt Paketi`
3. Icon: 📚 (emoji seç)
4. Cover: Bir YKS/eğitim görseli ekle

### 1.2 Ana Sayfa İçeriği
Sayfaya şunu yaz (kopyala-yapıştır):

```
# 📚 odaklan.co YKS Prompt Paketi

> YouTube'dan izlediğin dersi kalıcı öğrenmeye dönüştür - AI ile.

---

## 🚀 Hızlı Başlangıç
1. NotebookLM aç → [notebooklm.google.com](https://notebooklm.google.com)
2. İçeriğini yükle (YouTube/PDF)
3. Aşağıdan uygun promptu seç ve kopyala

---

## 🧭 Hangi Promptu Kullanmalıyım?
→ [Karar Ağacı]

---

## 📂 İçerik

### 🎯 Aktif Öğrenme (6 Ana Prompt)
→ [P1 Filtreleme] [P2 Yapılandırma] [P3 Sorgulama] [P4 Uygulama] [P5 Hafıza] [P6 Planlama]

### 📘 TYT Dersleri
→ [Türkçe] [Matematik] [Fen] [Sosyal]

### 📗 AYT Dersleri
→ [Edebiyat] [Geometri] [Fizik] [Kimya] [Biyoloji]

### 🔄 Tekrar Sistemi
→ [Günlük Tekrar] [Aralıklı Tekrar] [Haftalık Özet] [Flashcard]

### 🎁 Özel Durumlar
→ [Deneme Analizi] [Sınav Öncesi] [Motivasyon]

### ⚡ Bonus
→ [Master Prompt] [20dk Hızlı] [Podcast]
```

**Not:** Köşeli parantez içindekiler sonra bağlantı olacak.

---

## 📁 ADIM 2: Alt Sayfaları Oluştur (10 dk)

### 2.1 Klasör Yapısı
Ana sayfanın içinde şu sayfaları oluştur:

```
📚 odaklan.co YKS Prompt Paketi
├── 🧭 Hangi Promptu Seçmeliyim (Karar Ağacı)
├── 📝 Başlangıç Rehberi
│
├── 🎯 Aktif Öğrenme
│   ├── P1 Filtreleme
│   ├── P2 Yapılandırma
│   ├── P3 Sorgulama
│   ├── P4 Uygulama
│   ├── P5 Hafıza
│   └── P6 Planlama
│
├── 📘 TYT Dersleri
│   ├── Türkçe
│   │   ├── Paragraf Okuma
│   │   └── Dil Bilgisi
│   ├── Matematik
│   │   └── Problem Çözüm
│   ├── Fen
│   │   ├── Fizik Formül
│   │   ├── Kimya Denklem
│   │   └── Biyoloji Sistem
│   └── Sosyal
│       ├── Tarih Kronoloji
│       ├── Coğrafya Harita
│       ├── Felsefe Akımlar
│       └── Din Kavramlar
│
├── 📗 AYT Dersleri
│   ├── Edebiyat
│   │   ├── Dönem Analizi
│   │   └── Şiir Analizi
│   ├── Geometri
│   │   └── Şekil Analizi
│   ├── Fizik
│   │   └── Modern Fizik
│   ├── Kimya
│   │   └── Organik Kimya
│   └── Biyoloji
│       └── Genetik
│
├── 🔄 Tekrar Sistemi
│   ├── Günlük Tekrar
│   ├── Aralıklı Tekrar
│   ├── Haftalık Özet
│   └── Flashcard Sistemi
│
├── 🎁 Özel Durumlar
│   ├── Deneme Analizi
│   ├── Sınav Öncesi Tekrar
│   └── Motivasyon
│
└── ⚡ Bonus
    ├── Master Prompt
    ├── 20dk Hızlı
    └── Podcast
```

### 2.2 Hızlı Oluşturma Yöntemi

**Yöntem A: Manuel (Temiz ama yavaş)**
1. Her sayfa için "/" yaz → "Page" seç
2. İsmi ver
3. İçeriği kopyala-yapıştır

**Yöntem B: Import (Hızlı)**
1. Notion'da ana sayfayı aç
2. `odaklan-prompts-v2` klasörünü Finder'da aç
3. `.md` dosyalarını Notion sayfasına sürükle-bırak
4. Notion otomatik sayfa oluşturur

---

## 📁 ADIM 3: İçerikleri Aktar (5 dk)

### 3.1 Markdown Import
Her `.md` dosyası için:
1. Dosyayı Notion sayfasına sürükle-bırak
2. Veya dosya içeriğini kopyala → Notion'a yapıştır

### 3.2 Dosya-Sayfa Eşleştirme

| Dosya | Notion Sayfası |
|-------|----------------|
| `hangi-promptu-secmeliyim.md` | 🧭 Karar Ağacı |
| `baslangic-rehberi.md` | 📝 Başlangıç |
| `P1-filtreleme.md` | P1 Filtreleme |
| `P2-yapilandirma.md` | P2 Yapılandırma |
| ... | ... |

---

## 📁 ADIM 4: Sayfaları Bağla (3 dk)

### 4.1 Bağlantı Oluşturma
1. Bağlantı vermek istediğin metni seç
2. `Cmd+K` (Mac) veya `Ctrl+K` (Windows) bas
3. Bağlanacak sayfayı ara ve seç

### 4.2 Önemli Bağlantılar

| Nereden | Nereye |
|---------|--------|
| Ana sayfa | Tüm alt sayfalara |
| Karar ağacı | İlgili promptlara |
| Her prompt sonu | Sonraki prompt |
| P1 | P2'ye bağla |
| P2 | P3'e bağla |
| ... | ... |

### 4.3 Callout ile Navigasyon
Her sayfanın sonuna ekle:

```
💡 Sonraki: [Bağlantı]
🔙 Geri: [Ana Sayfa]
```

Notion'da:
1. "/" yaz → "Callout" seç
2. İçine yaz
3. Bağlantıları ekle

---

## 📁 ADIM 5: Görselleştirme (Opsiyonel, 5 dk)

### 5.1 Toggle Kullanımı
Promptları toggle içine koy:
1. "/" → "Toggle list"
2. Başlık: "✂️ Promptu Göster"
3. İçine promptu yapıştır

### 5.2 Callout Kutuları
Önemli notları kutula:
- 💡 İpucu
- ⚠️ Dikkat
- ✅ Tamamlandı

### 5.3 Tablo Formatı
Tablolar Markdown'dan otomatik gelir.

---

## 📁 ADIM 6: Template Olarak Kaydet (1 dk)

### 6.1 Duplicate Butonu
1. Ana sayfanın sağ üstünde "..." tıkla
2. "Turn into template" varsa seç
3. Yoksa "Share" → "Copy link" ile paylaş

### 6.2 Public Paylaşım (Satış için)
1. Ana sayfada "Share" tıkla
2. "Publish to web" aç
3. "Allow duplicate as template" aç
4. Linki kopyala

---

## ✅ Kontrol Listesi

- [ ] Ana sayfa oluşturuldu
- [ ] Tüm alt sayfalar oluşturuldu (35 sayfa)
- [ ] İçerikler aktarıldı
- [ ] Sayfalar birbirine bağlandı
- [ ] Navigasyon eklendi
- [ ] Template olarak kaydedildi

---

## 🎯 Son Görünüm

```
📚 odaklan.co YKS Prompt Paketi
│
├── 🧭 Karar Ağacı ← Öğrenci buradan başlar
│       ↓
├── 🎯 Aktif Öğrenme
│   P1 → P2 → P3 → P4 → P5 → P6
│       ↓
├── 📘 TYT Dersleri ← Derse özel
├── 📗 AYT Dersleri
│       ↓
├── 🔄 Tekrar Sistemi ← Günlük/haftalık
│       ↓
└── 🎁 Özel + Bonus
```

---

## ❓ Sorun Giderme

| Sorun | Çözüm |
|-------|-------|
| Markdown düzgün görünmüyor | Yapıştırırken "Paste as text" değil normal yapıştır |
| Tablolar bozuk | Tekrar yapıştır veya Notion'da manuel tablo oluştur |
| Bağlantılar çalışmıyor | Sayfa adlarını kontrol et, @ ile ara |
