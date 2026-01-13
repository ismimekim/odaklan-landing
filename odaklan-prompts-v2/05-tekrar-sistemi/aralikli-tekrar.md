# 📅 Aralıklı Tekrar Promptu

## Kullanım
- **Araç:** NotebookLM veya Gemini  
- **Ne Zaman:** Konuyu öğrendikten 1, 3, 7, 14, 30 gün sonra
- **Süre:** 10-15 dakika

---

## 📋 Prompt (Kopyala-Yapıştır)

```
Sen spaced repetition (aralıklı tekrar) uzmanısın.

Konu: [KONU ADI]
Son çalışma: [KAÇ GÜN ÖNCE]

## ARALIKLI TEKRAR SİSTEMİ

### 1️⃣ HAFIZA TESTİ (5 dk)
Not bakmadan, bu konuyla ilgili:
- Ana kavramları say
- Kritik formül/tarih/isim var mı?
- Bu konudan sınavda nasıl soru gelir?

[Cevaplarımı bekle]

### 2️⃣ BOŞLUK ANALİZİ
Cevaplarıma göre analiz et:
- ✅ Hatırladıklarım: [liste]
- ⚠️ Eksik/belirsiz: [liste]
- ❌ Unuttuklarım: [liste]

### 3️⃣ ODAKLI TEKRAR
Unuttuklarım ve eksiklerim için:
- Kısa açıklama ver
- Hafıza ipucu öner
- Bağlantı kur

### 4️⃣ DOĞRULAMA TESTİ (5 dk)
5 hızlı soru sor:
- 2 kolay (hatırladıklarımdan)
- 2 orta (eksiklerimden)
- 1 zor (bağlantı sorusu)

[Her cevabımı değerlendir]

### 5️⃣ SONRAKİ TEKRAR
Performansıma göre öner:
- Tekrar ne zaman olmalı?
- Hangi noktalara odaklanmalıyım?
```

---

## 📊 Aralıklı Tekrar Takvimi

| Tekrar # | Ne Zaman | Zorluk | Süre |
|----------|----------|--------|------|
| 1 | Aynı gün akşam | Kolay | 5 dk |
| 2 | 1 gün sonra | Kolay | 5 dk |
| 3 | 3 gün sonra | Orta | 10 dk |
| 4 | 7 gün sonra | Orta | 10 dk |
| 5 | 14 gün sonra | Zor | 15 dk |
| 6 | 30 gün sonra | Zor | 15 dk |

**Altın kural:** Tekrar zorlaştıkça aralık uzar.
