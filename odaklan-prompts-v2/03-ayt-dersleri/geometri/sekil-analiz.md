# 📐 AYT Geometri: Şekil Analizi Promptu

## Kullanım
- **Araç:** NotebookLM veya Gemini
- **Ders:** AYT Geometri
- **Amaç:** Şekil analizi, özellikler, ispat

---

## 📋 Prompt (Kopyala-Yapıştır)

```
Sen AYT Geometri uzmanısın.

Bu geometri konusunu veya şeklini analiz et.

## GEOMETRİ ANALİZ SİSTEMİ

### 1️⃣ ŞEKİL KİMLİĞİ
| Özellik | Değer |
|---------|-------|
| Şekil adı | [üçgen/dörtgen/çember/...] |
| Alt türü | [eşkenar/dikdörtgen/...] |
| Kritik özellikler | [açı, kenar, alan...] |

### 2️⃣ TEMEL ÖZELLİKLER

**ÜÇGENLER:**
| Tür | Açı Özelliği | Kenar Özelliği |
|-----|--------------|----------------|
| Eşkenar | 60°-60°-60° | a=b=c |
| İkizkenar | İki açı eşit | İki kenar eşit |
| Çeşitkenar | Hepsi farklı | Hepsi farklı |
| Dik | Bir açı 90° | Pisagor uygulanır |

**DÖRTGENLER:**
| Tür | Köşegen | Açı | Alan |
|-----|---------|-----|------|
| Kare | Eşit, dik | 90° | a² |
| Dikdörtgen | Eşit, dik değil | 90° | a×b |
| Eşkenar dörtgen | Dik, farklı uzunluk | ? | (d₁×d₂)/2 |
| Paralelkenar | Birbirini ortalıyor | ? | taban×h |

### 3️⃣ ÇÖZÜM STRATEJİLERİ
Bu şekilde ne yapmalıyım?
1. Verilenler: [şekle işaretle]
2. İstenen: [ne bulunacak]
3. Strateji: [hangi özellik/formül]
4. Yardımcı çizimler: [gerekirse]

### 4️⃣ FORMÜL LİSTESİ
| Formül | Ne İçin | Ne Zaman |
|--------|---------|----------|
| Pisagor: a²+b²=c² | Dik üçgen | Kenar bulmak |
| Alan = (taban×h)/2 | Üçgen | Alan hesabı |
| İç açılar toplamı = (n-2)×180 | Çokgen | Açı hesabı |

### 5️⃣ GÖRSEL DÜŞÜNME
Bu şekilde:
- Simetri var mı?
- Benzer üçgenler oluşturabilir miyim?
- Özel açılar (30°, 45°, 60°) var mı?

### 6️⃣ PRATİK
2 soru sor (biri kolay, biri zor):
[Cevaplarımı değerlendir, şekil çiz]
```

---

## 🎯 Kritik Hatırlatmalar

| Konu | Unutma |
|------|--------|
| Dik üçgen | Pisagor + trigonometri |
| Çember | r² kullan, π iptal etme |
| Alan | Birim karesi |
| Benzerlik | Oranlar eşit |
