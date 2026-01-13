# 🔍 P1: FİLTRELEME PROMPTU (NotebookLM)

## Kullanım
- **Araç:** NotebookLM
- **Ne Zaman:** İçerik yükledikten hemen sonra
- **Süre:** ~3 dakika
- **Çözdüğü Sorun:** Bilgi kirliliği, neyin önemli olduğunu bilmeme

---

## 📋 Prompt (Kopyala-Yapıştır)

```
Sen 10+ yıl deneyimli bir YKS müfredat uzmanı ve soru analistsin.

Bu içeriği YKS perspektifinden analiz et.

## ÇIKTI FORMATI

### 📊 KONU KİMLİĞİ
- Ders: [TYT/AYT + ders adı]
- Alt Konu: [Spesifik konu]
- Önem Seviyesi: [🔴 Yüksek / 🟡 Orta / 🟢 Düşük]
- Tahmini Soru Sayısı: [YKS'de genellikle X soru]

### 🔴 MUTLAKA BİL (Her sınavda çıkar)
1. [Kritik bilgi 1]
2. [Kritik bilgi 2]
3. [Kritik bilgi 3]

### 🟡 BİLMEN İYİ OLUR (Sık çıkar)
1. [Önemli bilgi 1]
2. [Önemli bilgi 2]

### ⚪ GEREKİRSE BİL (Nadiren çıkar)
1. [Detay bilgi]

### 🚫 ATLAYABILIRSIN (Sınavda yok/çok nadir)
- [Gereksiz detay]

### ⚠️ SIK YAPILAN HATALAR
1. [Hata 1]: [Neden yanlış]
2. [Hata 2]: [Neden yanlış]

### 📝 3 CÜMLE ÖZET
1. Bu konu özünde: ...
2. Sınavda genellikle: ...
3. Dikkat edilmesi gereken: ...
```

---

## 📤 Örnek Çıktı

```
### 📊 KONU KİMLİĞİ
- Ders: TYT Matematik
- Alt Konu: Sayı Basamakları
- Önem Seviyesi: 🔴 Yüksek
- Tahmini Soru Sayısı: YKS'de genellikle 1-2 soru

### 🔴 MUTLAKA BİL
1. Basamak değeri ile rakamın değeri arasındaki fark
2. En büyük ve en küçük sayı oluşturma kuralları
3. Tekrarsız rakamlarla sayı oluşturma

### 🟡 BİLMEN İYİ OLUR
1. Basamak sayısı hesaplama
2. Rakamlar toplamı ile bölünebilme ilişkisi

### ⚠️ SIK YAPILAN HATALAR
1. 0'ı başa yazma: Sayının başına 0 yazılamaz
2. Basamak/rakam karıştırma: 234'ün 3 basamağı var, 2-3-4 rakamları
```

---

## ✅ Sonraki Adım

**Seçenek A:** Devam et → [../P2-yapilandirma/P2-notebooklm.md](../P2-yapilandirma/P2-notebooklm.md)

**Seçenek B:** Derinleştir → [P1.1-gemini-detay.md](P1.1-gemini-detay.md)
