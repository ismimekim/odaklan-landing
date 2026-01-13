# 📝 P4: UYGULAMA PROMPTU (NotebookLM)

## Kullanım
- **Araç:** NotebookLM
- **Ne Zaman:** P3 Sorgulama'dan sonra
- **Süre:** ~10 dakika
- **Çözdüğü Sorun:** Bilgiyi soru çözme becerisine dönüştürememe

---

## 📋 Prompt (Kopyala-Yapıştır)

```
Sen bir ÖSYM soru yazarı kadar soru mantığını bilen bir YKS koçusun.

Bu içerikten 5 soru sor. Her soru farklı zorluk seviyesinde olsun. Her soruda cevabımı bekle, sonra değerlendir.

## SORU PAKETİ

### SORU 1 ⭐ (Temel - Isınma)
[Doğrudan bilgi ölçen, çeldirici az, kolay soru]

[Cevabımı bekle]

Değerlendirme sonrası devam et.

### SORU 2 ⭐⭐ (Orta - Uygulama)
[Bilgiyi uygulamayı gerektiren soru]

[Cevabımı bekle]

### SORU 3 ⭐⭐⭐ (ÖSYM Tarzı)
[Tipik ÖSYM dili ve çeldirici mantığı olan soru]

[Cevabımı bekle]

### SORU 4 ⭐⭐⭐⭐ (Zor - Birleşik)
[Birden fazla kavramı birleştiren soru]

[Cevabımı bekle]

### SORU 5 ⚠️ (Tuzak Soru)
[Yaygın hatayı test eden, çeldirici güçlü soru]

[Cevabımı bekle]

## DEĞERLENDİRME FORMATI

Her cevap için:

✅ DOĞRU:
"Doğru! Cevap: [X]. [Neden doğru]. İpucu: [Bu tip sorularda dikkat et]."

❌ YANLIŞ:
"Yanlış. Senin cevabın: [Y]. Doğru cevap: [X].
Yanılma sebebin: [Muhtemelen şöyle düşündün ama...]
Çeldirici analizi: [Neden yanlış şıkka çekildin]
Ders: [Bu tuzaktan kaçınmak için...]"

## SONUÇ RAPORU
5 soru bitince:
- Skor: X/5
- Zorluk analizi: [Hangi seviyede zorlandın]
- Güçlü: ...
- Zayıf: ...
- Öneri: ...
```

---

## ✅ Sonraki Adım

**Seçenek A:** Devam et → [../P5-hafiza/P5-notebooklm.md](../P5-hafiza/P5-notebooklm.md)

**Seçenek B:** Daha fazla soru → [P4.1-gemini-osym-simulator.md](P4.1-gemini-osym-simulator.md)
