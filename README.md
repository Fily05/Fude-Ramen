# Fude Ramen Arzignano - Carta Sconto Web Application

## 📦 Pacchetto di Consegna

Questo pacchetto contiene una web application già compilata e pronta per il deployment per il sistema di carta sconto di Fude Ramen Arzignano.

## 📁 Struttura del Pacchetto

```
fude-ramen-discount-card/
├── index.html                    # File HTML principale (già compilato)
├── assets/                       # Cartella delle risorse
│   ├── background-desktop.png    # Immagine di sfondo per desktop
│   └── background-mobile.png     # Immagine di sfondo per mobile
└── README.md                     # Questo file
```

## 🎯 Caratteristiche

- ✅ **Già Compilato**: Nessuna compilazione necessaria
- ✅ **HTML Standalone**: Tutto in un unico file HTML
- ✅ **Responsive**: Funziona su desktop e mobile
- ✅ **GDPR Compliant**: Include privacy policy e condizioni marketing
- ✅ **Multi-pagina**: 5 pagine (Home, Successo, Dettagli, Privacy, Marketing)

## 🚀 Come Deployare

### Opzione 1: Server Web Tradizionale (Apache, Nginx, IIS)

1. **Estrarre i file** dal pacchetto
2. **Caricare tutti i file** nella root del server web:
   ```
   /var/www/html/               (Linux/Apache)
   C:\inetpub\wwwroot\          (Windows/IIS)
   ```
3. **Verificare la struttura**:
   - `index.html` deve essere nella root
   - Cartella `assets/` deve essere nella stessa directory di `index.html`
4. **Aprire nel browser**: `http://tuodominio.com`

### Opzione 2: Hosting Statico (Netlify, Vercel, GitHub Pages)

#### Netlify
1. Vai su [netlify.com](https://netlify.com)
2. Trascina l'intera cartella del progetto
3. Il sito sarà online immediatamente

#### Vercel
1. Vai su [vercel.com](https://vercel.com)
2. Importa il progetto
3. Deploy automatico

#### GitHub Pages
1. Crea un repository su GitHub
2. Carica tutti i file
3. Vai in Settings > Pages
4. Seleziona la branch main e salva
5. Il sito sarà disponibile su `username.github.io/repo-name`

### Opzione 3: Hosting Condiviso (cPanel, Plesk)

1. **Accedi al pannello di controllo**
2. **Apri File Manager**
3. **Naviga a public_html** (o www, o httpdocs)
4. **Carica i file**:
   - `index.html`
   - Cartella `assets/` con le immagini
5. **Verifica i permessi**: 644 per i file, 755 per le cartelle
6. **Apri il sito**: `http://tuodominio.com`

### Opzione 4: Test Locale

Per testare in locale prima del deployment:

1. **Metodo 1 - Doppio click**:
   - Doppio click su `index.html`
   - Si aprirà nel browser predefinito

2. **Metodo 2 - Server locale Python**:
   ```bash
   # In the project folder
   python -m http.server 8000
   # Apri: http://localhost:8000
   ```

3. **Metodo 3 - Server locale Node.js**:
   ```bash
   npx serve
   # Apri l'URL mostrato nel terminale
   ```

## 🖼️ Setup delle Immagini

**IMPORTANTE**: Le immagini di sfondo devono essere collocate nella cartella `assets/`.

1. Rinomina le tue immagini di sfondo come:
   - `background-desktop.png` (per desktop/tablet)
   - `background-mobile.png` (per smartphone)

2. Posizionale nella cartella `assets/`

3. Formati supportati: PNG, JPG, WEBP

## ⚙️ Configurazione

### Modificare le Informazioni del Ristorante

Tutte le informazioni sono nel file `index.html`. Per modificarle:

1. Apri `index.html` con un editor di testo
2. Cerca le seguenti stringhe e sostituiscile:
   - **Nome**: "FUDE RAMEN ARZIGNANO"
   - **Indirizzo**: "Viale delle Fontanelle 145, Arzignano"
   - **Telefono**: "333 973 9013"
   - **Email**: "info.fuderamen@gmail.com"
   - **Orari**: "12:00-14:30  |  18:00-23:00"
   - **Codice Sconto**: "FUDE666"
   - **Scadenza**: "15 gennaio 2026"

### Integrare con Backend

Per salvare i dati del form nel vostro database, cerca questa sezione nello script:

```javascript
// Form submission
document.getElementById('discount-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const consent1 = document.getElementById('consent1').checked;
    
    // QUI AGGIUNGERE IL CODICE PER INVIARE AL BACKEND
    // Esempio con fetch:
    /*
    fetch('https://tuoserver.com/api/save-discount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, phone, consent1 })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        navigateTo('success');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Errore nell\'invio dei dati');
    });
    */
    
    // Navigate to success page
    navigateTo('success');
});
```

## 📱 Funzionalità

### Pagine Incluse

1. **Home** - Form di registrazione per la carta sconto
2. **Successo** - Mostra il codice sconto FUDE666
3. **Dettagli** - Informazioni complete sul ristorante
4. **Privacy** - Informativa GDPR completa
5. **Marketing** - Condizioni per comunicazioni commerciali

### Validazioni

- Email obbligatoria (formato valido)
- Telefono obbligatorio
- Consenso privacy obbligatorio
- Consenso marketing opzionale

## 🔒 Privacy e GDPR

L'applicazione include:
- ✅ Informativa Privacy completa
- ✅ Condizioni Marketing dettagliate
- ✅ Consensi separati (privacy obbligatorio, marketing opzionale)
- ✅ Dati: solo email e telefono

**IMPORTANTE**: Questa applicazione raccoglie dati personali. Assicuratevi di:
1. Avere un sistema backend sicuro per memorizzare i dati
2. Implementare misure di sicurezza adeguate
3. Rispettare il GDPR per la conservazione e gestione dei dati

## 🌐 Browser Supportati

- ✅ Chrome (versione recente)
- ✅ Firefox (versione recente)
- ✅ Safari (versione recente)
- ✅ Edge (versione recente)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Metriche e Analytics

Per tracciare le visite, aggiungi Google Analytics o altro servizio di analytics inserendo il codice prima del tag `</head>` in `index.html`.

Esempio Google Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Le immagini non si vedono
- Verifica che la cartella `assets/` sia allo stesso livello di `index.html`
- Verifica i nomi dei file: `background-desktop.png` e `background-mobile.png`
- Controlla i permessi (devono essere leggibili: 644)

### Il form non funziona
- Apri la console del browser (F12) per vedere eventuali errori
- Verifica che JavaScript sia abilitato nel browser

### Il sito non è responsive
- Svuota la cache del browser (Ctrl+F5)
- Verifica che il meta viewport sia presente (già incluso)

## 📞 Supporto

Per problemi tecnici o domande sul deployment, contattate il vostro team di sviluppo.

### Informazioni del Ristorante
- **Nome**: Fude Ramen Arzignano
- **Telefono**: 333 973 9013
- **Email**: info.fuderamen@gmail.com
- **Indirizzo**: Viale delle Fontanelle 145, Arzignano

## 📝 Note per lo Sviluppo Futuro

Se in futuro vorrete modificare il design o aggiungere funzionalità:

1. Il file `index.html` contiene tutto il codice
2. Gli stili CSS sono nella sezione `<style>` nell'head
3. Il JavaScript è nella sezione `<script>` prima del `</body>`
4. Per modifiche sostanziali, considerate di passare a un framework (React, Vue, etc.)

## ✅ Checklist Pre-Deployment

- [ ] Immagini di sfondo caricate nella cartella `assets/`
- [ ] Informazioni del ristorante corrette
- [ ] Codice sconto corretto (FUDE666)
- [ ] Data scadenza corretta (15 gennaio 2026)
- [ ] Backend configurato per ricevere i dati del form (se applicabile)
- [ ] Test su mobile e desktop
- [ ] Privacy policy verificata
- [ ] SSL/HTTPS abilitato sul server (raccomandato per GDPR)

## 📄 Licenza

Questo progetto è proprietà di Fude Ramen Arzignano.
© 2025 Fude Ramen Arzignano - Tutti i diritti riservati.

---

**Versione**: 1.0.0  
**Data**: Dicembre 2025  
**Ultima modifica**: 2025-12-21
