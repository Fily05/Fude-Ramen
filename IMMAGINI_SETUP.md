# 🖼️ Guida Setup Immagini di Sfondo

## 📸 Immagini Necessarie

Per far funzionare correttamente il sito, hai bisogno di **2 immagini di sfondo**:

1. **background-desktop.png** - Per computer/tablet
2. **background-mobile.png** - Per smartphone

---

## 📁 Dove Prendere le Immagini

Le immagini originali sono state fornite da Figma. Devi:

1. Scaricare le immagini dai tuoi asset Figma
2. O usare le immagini che hai già fornito
3. Rinominarle correttamente

---

## 🎨 Specifiche Immagini

### Background Desktop
- **Nome file**: `background-desktop.png`
- **Dimensioni consigliate**: 1920x1080px (Full HD) o superiore
- **Formato**: PNG, JPG o WEBP
- **Orientamento**: Orizzontale (landscape)
- **Peso**: Meno di 2MB (per velocità di caricamento)

### Background Mobile
- **Nome file**: `background-mobile.png`
- **Dimensioni consigliate**: 1080x1920px o 750x1334px
- **Formato**: PNG, JPG o WEBP
- **Orientamento**: Verticale (portrait)
- **Peso**: Meno di 1MB

---

## 📂 Struttura Cartelle

Dopo aver preparato le immagini, la struttura deve essere:

```
fude-ramen-discount-card/
├── index.html
├── assets/
│   ├── background-desktop.png
│   └── background-mobile.png
├── README.md
└── DEPLOYMENT_GUIDE.md
```

---

## 🔧 Come Preparare le Immagini

### Opzione 1: Hai già le immagini giuste

Se hai già le due immagini (desktop e mobile):

1. **Rinomina le immagini**:
   - L'immagine orizzontale → `background-desktop.png`
   - L'immagine verticale → `background-mobile.png`

2. **Crea la cartella**:
   - Nella stessa cartella di `index.html`
   - Crea una cartella chiamata `assets`

3. **Sposta le immagini**:
   - Copia le due immagini rinominate in `assets/`

### Opzione 2: Devi scaricare da Figma

1. **Apri il progetto Figma**
2. **Seleziona l'immagine di sfondo desktop**
3. Click destro → Export → PNG → Export
4. Salva come `background-desktop.png`
5. **Ripeti per l'immagine mobile**
6. Salva come `background-mobile.png`
7. **Crea cartella `assets/`** e metti le immagini dentro

### Opzione 3: Ottimizzare immagini esistenti

Se le immagini sono troppo grandi, ottimizzale:

**Online (Gratis):**
- [TinyPNG](https://tinypng.com/) - Comprimi PNG/JPG
- [Squoosh](https://squoosh.app/) - Compressore Google
- [Compressor.io](https://compressor.io/)

**Passaggi:**
1. Vai su uno di questi siti
2. Carica l'immagine
3. Scarica la versione compressa
4. Rinomina come richiesto
5. Metti in `assets/`

---

## 🎯 Formato File Consigliato

### Se devi scegliere il formato:

**PNG**
- ✅ Migliore qualità
- ✅ Supporta trasparenza
- ❌ File più grandi

**JPG/JPEG**
- ✅ File più piccoli
- ✅ Caricamento veloce
- ❌ No trasparenza
- ⭐ **CONSIGLIATO per sfondi fotografici**

**WEBP**
- ✅ Ottima compressione
- ✅ Buona qualità
- ⚠️ Non supportato da browser molto vecchi

---

## ✏️ Se Vuoi Modificare le Immagini

### Cambio Nome File

Se vuoi usare nomi diversi (es. `sfondo-desktop.jpg`), devi modificare `index.html`:

1. Apri `index.html` con un editor di testo
2. Cerca queste righe (circa linea 120-130):
   ```css
   .bg-desktop {
       background-image: url('assets/background-desktop.png');
   }
   
   .bg-mobile {
       background-image: url('assets/background-mobile.png');
   }
   ```
3. Cambia i nomi file con i tuoi:
   ```css
   .bg-desktop {
       background-image: url('assets/sfondo-desktop.jpg');
   }
   
   .bg-mobile {
       background-image: url('assets/sfondo-mobile.jpg');
   }
   ```

### Cambio Formato (PNG → JPG)

Se usi JPG invece di PNG:
- Basta rinominare: `background-desktop.jpg` e `background-mobile.jpg`
- E aggiornare l'HTML come sopra

---

## 🧪 Come Testare le Immagini

### Test 1: Verifica Locale
1. Apri `index.html` con doppio click
2. Dovresti vedere lo sfondo desktop
3. Apri DevTools (F12)
4. Clicca l'icona mobile (Toggle device toolbar)
5. Dovresti vedere lo sfondo mobile

### Test 2: Dimensioni Corrette
1. Click destro sullo sfondo → Inspect
2. Nella console scrivi:
   ```javascript
   console.log(window.innerWidth, window.innerHeight)
   ```
3. Verifica che l'immagine copra tutto lo schermo

### Test 3: Peso File
- Desktop < 2MB
- Mobile < 1MB
- Se sono più grandi, comprimi!

---

## 🚨 Troubleshooting Immagini

### ❌ Le immagini non si vedono

**Controlla:**
1. La cartella `assets` esiste?
2. I nomi file sono esatti? (maiuscole/minuscole contano!)
3. Le immagini sono dentro `assets/`?
4. I permessi sono corretti? (644 per i file)

**Soluzione:**
```
assets/
├── background-desktop.png  ✅ Corretto
├── Background-desktop.png  ❌ Sbagliato (B maiuscola)
├── background_desktop.png  ❌ Sbagliato (underscore)
└── desktop-background.png  ❌ Sbagliato (ordine parole)
```

### ❌ Immagini pixelate o sfocate

**Soluzione:**
1. Usa immagini ad alta risoluzione
2. Desktop: almeno 1920x1080px
3. Mobile: almeno 1080x1920px

### ❌ Caricamento lento

**Soluzione:**
1. Comprimi le immagini (vedi Opzione 3)
2. Target: Desktop < 500KB, Mobile < 300KB
3. Usa formato JPG con qualità 80%

---

## 📊 Riepilogo File

Alla fine dovresti avere:

```
✅ assets/background-desktop.png (o .jpg) - circa 500KB-2MB
✅ assets/background-mobile.png (o .jpg) - circa 300KB-1MB
✅ index.html - già pronto
```

---

## 🎨 Suggerimenti per Immagini Bellissime

1. **Risoluzione**: Più alta possibile (poi comprimi)
2. **Colori**: Controlla che il testo bianco si legga bene
3. **Focus**: Il soggetto deve essere centrale
4. **Overlay**: C'è già un overlay nero al 30% nel codice
5. **Consistenza**: Usa lo stesso stile per desktop e mobile

---

## 💡 Alternative se Non Hai Immagini

### Usa un Gradiente (Temporaneo)

Se non hai ancora le immagini, puoi usare un gradiente:

1. Apri `index.html`
2. Trova:
   ```css
   .bg-desktop {
       background-image: url('assets/background-desktop.png');
   }
   ```
3. Sostituisci con:
   ```css
   .bg-desktop {
       background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   }
   ```

### Usa un Colore Solido

```css
.bg-desktop {
    background: #1a1a1a;
}
```

---

## ✅ Checklist Finale

Prima di deployare, verifica:

- [ ] Cartella `assets/` creata
- [ ] `background-desktop.png` presente in assets/
- [ ] `background-mobile.png` presente in assets/
- [ ] Nomi file esatti (minuscole, niente spazi)
- [ ] Immagini non troppo grandi (< 2MB)
- [ ] Testato in locale (doppio click su index.html)
- [ ] Immagini si vedono su desktop
- [ ] Immagini si vedono su mobile (F12 → device toolbar)

---

## 📞 Serve Aiuto?

Se hai problemi con le immagini:
1. Controlla questa guida passo-passo
2. Verifica la struttura delle cartelle
3. Testa in locale prima del deploy
4. Contatta il team di sviluppo se necessario

---

**Ricorda**: Le immagini sono fondamentali per l'impatto visivo del sito! Prenditi il tempo per ottimizzarle correttamente. 🎨
