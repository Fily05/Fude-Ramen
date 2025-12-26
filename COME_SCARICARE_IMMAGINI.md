# 📥 Come Scaricare le Immagini di Sfondo

## 🎯 Immagini Necessarie

Per completare il pacchetto hai bisogno di scaricare **2 immagini**:

1. **background-desktop.png** - Sfondo orizzontale per computer
2. **background-mobile.png** - Sfondo verticale per smartphone

---

## 📍 Dove Sono le Immagini

Le immagini sono quelle che hai fornito durante lo sviluppo:

### Immagine Desktop (Orizzontale)
- La foto con i personaggi ramen e tramonto sul mare
- Orientamento: **orizzontale/landscape**
- Con scritta "SAN BONIFACIO" o simile
- **Asset ID**: `5757814d1902dd49d577b7771f3ade93210b66a4`

### Immagine Mobile (Verticale)  
- La stessa scena ma in formato verticale
- Orientamento: **verticale/portrait**
- Ottimizzata per smartphone
- **Asset ID**: `e2daaf38fa8cb13cce462e1381f2dadbdc918db6`

---

## 🔄 Opzione 1: Hai Già le Immagini?

Se hai già le immagini sul tuo computer:

### Passo 1: Trova le Immagini
```
Cerca nel tuo computer:
- File con personaggi ramen
- Tramonto/mare sullo sfondo
- Due versioni: orizzontale e verticale
```

### Passo 2: Rinomina
```
Immagine orizzontale → background-desktop.png
Immagine verticale → background-mobile.png
```

### Passo 3: Metti nella Cartella
```
Copia entrambe le immagini in:
assets/background-desktop.png
assets/background-mobile.png
```

✅ **Fatto!** Passa alla sezione "Verifica Finale"

---

## 📥 Opzione 2: Scaricare da Figma

Se le immagini sono nel tuo progetto Figma:

### Metodo A: Export Diretto

1. **Apri Figma**
   - Vai al tuo progetto Fude Ramen

2. **Trova il Frame con lo Sfondo Desktop**
   - Cerca il frame con la scena del tramonto (orizzontale)
   - Selezionalo con un click

3. **Export Immagine Desktop**
   - Pannello destro → Sezione "Export"
   - Se non vedi "Export", clicca il `+` accanto
   - Formato: **PNG** o **JPG**
   - Scala: **1x** o **2x** (se vuoi alta risoluzione)
   - Click su **Export [nome-frame]**
   - Salva come: `background-desktop.png`

4. **Ripeti per Sfondo Mobile**
   - Trova il frame verticale
   - Export → PNG/JPG
   - Salva come: `background-mobile.png`

### Metodo B: Screenshot (Alternativa Veloce)

Se non riesci a trovare i frame originali:

**Desktop:**
1. Apri Figma con il design desktop
2. Zoom per vedere tutto il frame
3. Screenshot (Cmd+Shift+4 su Mac, Win+Shift+S su Windows)
4. Salva come `background-desktop.png`

**Mobile:**
1. Stessa cosa con il design mobile
2. Salva come `background-mobile.png`

⚠️ **Nota**: Questa soluzione è meno qualitativa

---

## 🎨 Opzione 3: Immagini Alternative

Se non trovi le immagini originali, puoi usare alternative:

### Immagini Simili

Cerca online immagini di:
- Ramen sunset
- Japanese food background
- Sunset ocean ramen

**Siti consigliati** (gratis):
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)  
- [Pixabay](https://pixabay.com)

**Cerca**:
```
Desktop: "ramen sunset landscape" or "japanese food background wide"
Mobile: "ramen sunset vertical" or "japanese food background portrait"
```

### Immagini dal Ristorante

Oppure usa foto vere di Fude Ramen:
- Foto del ristorante
- Foto dei piatti
- Foto dell'atmosfera

**Vantaggi**:
- Uniche e personalizzate
- Autentiche
- Marketing migliore

---

## 📐 Specifiche Tecniche Immagini

### Background Desktop
```
Nome: background-desktop.png
Formato: PNG o JPG
Orientamento: Orizzontale (landscape)
Dimensioni minime: 1920 x 1080 px
Dimensioni consigliate: 2560 x 1440 px (per schermi 2K)
Dimensioni ottimali: 3840 x 2160 px (per schermi 4K)
Peso massimo: 2 MB
Rapporto aspetto: 16:9 o simile
```

### Background Mobile  
```
Nome: background-mobile.png
Formato: PNG o JPG
Orientamento: Verticale (portrait)
Dimensioni minime: 750 x 1334 px (iPhone 8)
Dimensioni consigliate: 1080 x 1920 px (Full HD)
Dimensioni ottimali: 1284 x 2778 px (iPhone 14 Pro)
Peso massimo: 1 MB
Rapporto aspetto: 9:16 o 9:19.5
```

---

## 🔧 Ottimizzazione Immagini

Dopo aver scaricato le immagini, ottimizzale:

### Online (Più Facile)

**TinyPNG** - https://tinypng.com
1. Vai sul sito
2. Trascina le tue immagini
3. Aspetta la compressione
4. Scarica le versioni ottimizzate
5. ✅ Perfetto! Peso ridotto del 60-80%

**Squoosh** - https://squoosh.app
1. Vai sul sito (by Google)
2. Trascina l'immagine
3. Scegli formato (WebP o JPG)
4. Regola la qualità (70-80% è ottimale)
5. Scarica

### Con Software

**Photoshop:**
```
1. Apri immagine
2. File → Export → Save for Web
3. Formato: JPEG
4. Qualità: 70-80
5. Save
```

**GIMP (Gratis):**
```
1. Apri immagine
2. File → Export As
3. Tipo file: JPEG
4. Qualità: 75-85
5. Export
```

---

## ✅ Verifica Finale

Dopo aver preparato le immagini:

### Checklist Immagini

- [ ] **background-desktop.png** presente
- [ ] **background-mobile.png** presente
- [ ] Desktop è orizzontale ✓
- [ ] Mobile è verticale ✓
- [ ] Desktop < 2MB ✓
- [ ] Mobile < 1MB ✓
- [ ] Entrambe in cartella `assets/` ✓
- [ ] Nomi esatti (maiuscole/minuscole) ✓

### Test Visivo

1. **Apri index.html** (doppio click)
2. **Verifica sfondo desktop** (si vede bene?)
3. **Apri DevTools** (F12)
4. **Toggle device toolbar** (icona smartphone)
5. **Verifica sfondo mobile** (si vede bene?)

Se entrambi si vedono bene → ✅ **Perfetto!**

---

## 🚨 Problemi Comuni

### ❌ Immagine troppo grande (> 2MB)

**Soluzione:**
```
1. Usa TinyPNG per comprimere
2. Oppure riduci la risoluzione:
   - Desktop max: 1920x1080
   - Mobile max: 1080x1920
3. Oppure salva come JPG qualità 70-80%
```

### ❌ Immagine sfocata

**Soluzione:**
```
1. Usa immagine ad alta risoluzione
2. Desktop almeno 1920px larghezza
3. Mobile almeno 1080px larghezza
4. Non ingrandire immagini piccole (diventa pixelata)
```

### ❌ Immagine non si vede nel sito

**Soluzione:**
```
1. Controlla il nome file (esatto?)
2. Controlla che sia in assets/
3. Prova a ricaricare la pagina (Ctrl+F5)
4. Apri console (F12) per vedere errori
```

### ❌ Colori diversi dall'originale

**Soluzione:**
```
1. Salva come PNG invece di JPG
2. Oppure usa profilo colore sRGB
3. In Photoshop: Edit → Convert to Profile → sRGB
```

---

## 📋 Riepilogo Veloce

### 3 Passi Rapidi:

1. **Scarica/Trova** le due immagini (desktop + mobile)
2. **Rinomina** come `background-desktop.png` e `background-mobile.png`  
3. **Metti** in cartella `assets/`

### Struttura Finale:

```
fude-ramen-discount-card/
├── index.html
├── assets/
│   ├── background-desktop.png  ← QUESTA
│   └── background-mobile.png   ← E QUESTA
└── ...
```

✅ **Fatto!** Le immagini sono pronte.

---

## 💡 Consigli Pro

### Per Risultato Migliore:

1. **Usa immagini originali** dal designer (massima qualità)
2. **Ottimizza sempre** prima di inserire nel sito
3. **Testa su mobile reale** oltre al browser
4. **Usa formato WebP** se possibile (migliore compressione)
5. **Considera lazy loading** per caricamento veloce

### Alternative Formato:

Se vuoi usare **WebP** invece di PNG/JPG:

1. Converti le immagini su [Squoosh.app](https://squoosh.app)
2. Rinomina: `background-desktop.webp` e `background-mobile.webp`
3. Modifica `index.html` (riga ~120-130):
   ```css
   background-image: url('assets/background-desktop.webp');
   ```

**Vantaggi WebP:**
- File più piccoli (30-40% meno di JPG)
- Stessa qualità visiva
- Caricamento più veloce

---

## 📞 Serve Aiuto?

Se hai problemi a scaricare o preparare le immagini:

1. Leggi la sezione "Problemi Comuni" sopra
2. Consulta **IMMAGINI_SETUP.md** per dettagli tecnici
3. Prova le alternative (screenshot, immagini alternative)
4. Contatta il designer originale per i file sorgente

---

## ✨ Opzione Premium: Immagini Professionali

Se vuoi immagini ancora migliori:

### Servizi a Pagamento:

**Shutterstock / Adobe Stock:**
- Cerca: "ramen restaurant background"
- Alta risoluzione
- Licenza commerciale inclusa
- Costo: ~10-30€ per immagine

**Designer Freelance:**
- Chiedi immagini custom
- Perfette per il brand
- Costo: ~50-200€ (entrambe)

---

**Pro Tip**: Le immagini sono la prima impressione del sito. Vale la pena investire tempo per averle perfette! 📸✨

---

© 2025 Fude Ramen Arzignano  
Versione: 1.0.0
