# 🗺️ P2: YAPILANDIRMA PROMPTU (NotebookLM)

## Kullanım
- **Araç:** NotebookLM
- **Ne Zaman:** P1 Filtreleme'den sonra
- **Süre:** ~5 dakika
- **Çözdüğü Sorun:** Bağlantısız bilgi parçaları, büyük resmi görememe

---

## 📋 Prompt (Kopyala-Yapıştır)

```
Sen bir öğretim tasarımcısı ve kavramsal öğrenme uzmanısın.

Bu içeriği yapılandırılmış bir kavram haritası olarak sun. Bilgileri hiyerarşik ve bağlantılı şekilde organize et.

## ÇIKTI FORMATI

### 🏗️ KAVRAM HİYERARŞİSİ

[ANA KAVRAM]
├── Alt Kavram 1
│   ├── Detay 1.1
│   ├── Detay 1.2
│   └── 🎯 Sınav Notu: [bu detay sınavda önemli]
├── Alt Kavram 2
│   ├── Detay 2.1
│   └── ⚠️ Dikkat: [sık yapılan hata]
└── Alt Kavram 3
    ├── Detay 3.1
    └── 🔗 Bağlantı: [başka konuyla ilişki]

### 🔗 KONULAR ARASI BAĞLANTILAR
| Bu Konu | → | Bağlantılı Konu | Nasıl İlişkili? |
|---------|---|-----------------|-----------------|
| [A] | → | [B] | [İlişki açıklaması] |

### ⬅️ ÖN KOŞULLAR (Önce bunları bil)
1. [Konu]: Neden gerekli?
2. [Konu]: Neden gerekli?

### ➡️ SONRAKİ ADIMLAR (Bundan sonra öğren)
1. [Konu]: Neden bu sırada?
2. [Konu]: Neden bu sırada?

### 🌍 GERÇEK HAYAT BAĞLANTISI
Bu kavramlar günlük hayatta şurada karşılaşılır: [örnek]

### 📊 ÖĞRENME ÖNCELİĞİ
1. [En önce öğrenilecek]
2. [İkinci sırada]
3. [Üçüncü sırada]
```

---

## 📤 Örnek Çıktı

```
### 🏗️ KAVRAM HİYERARŞİSİ

TRİGONOMETRİ
├── Temel Oranlar
│   ├── sin = karşı/hipotenüs
│   ├── cos = komşu/hipotenüs
│   ├── tan = karşı/komşu
│   └── 🎯 Sınav Notu: Özel açılar (30°, 45°, 60°) ezberlenmeli
├── Birim Çember
│   ├── sin ve cos'un koordinat karşılığı
│   └── ⚠️ Dikkat: İşaret kuralları sık karıştırılır
└── Trigonometrik Özdeşlikler
    ├── sin²x + cos²x = 1
    └── 🔗 Bağlantı: Pisagor teoremi ile ilişkili
```

---

## ✅ Sonraki Adım

**Seçenek A:** Devam et → [../P3-sorgulama/P3-notebooklm.md](../P3-sorgulama/P3-notebooklm.md)

**Seçenek B:** Zihin haritası iste → [P2.1-gemini-zihin-haritasi.md](P2.1-gemini-zihin-haritasi.md)
