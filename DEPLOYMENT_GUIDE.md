# 🚀 Guida Rapida al Deployment - Fude Ramen Carta Sconto

## ⚡ Quick Start (5 minuti)

### Passo 1: Preparare i File
```
1. Estrarre tutti i file dalla cartella
2. Verificare la presenza di:
   ✓ index.html
   ✓ assets/background-desktop.png
   ✓ assets/background-mobile.png
```

### Passo 2: Caricare sul Server
```
1. Accedere al pannello di controllo del server
2. Navigare alla cartella public_html (o www, httpdocs)
3. Caricare:
   - index.html (nella root)
   - assets/ (intera cartella)
```

### Passo 3: Testare
```
1. Aprire: http://tuodominio.com
2. Testare il form
3. Verificare le immagini di sfondo
4. Testare da mobile
```

---

## 📋 Istruzioni Dettagliate per Tipo di Server

### 🔵 cPanel (Hosting Condiviso)

1. **Login a cPanel**
   - Vai su `https://tuodominio.com/cpanel`
   - Inserisci username e password

2. **Aprire File Manager**
   - Clicca su "File Manager" nella sezione "Files"
   - Seleziona "public_html" o "www"

3. **Caricare i File**
   - Clicca su "Upload" in alto
   - Seleziona `index.html` → Upload
   - Torna indietro
   - Clicca "New Folder" → Nome: `assets`
   - Entra nella cartella `assets`
   - Upload `background-desktop.png`
   - Upload `background-mobile.png`

4. **Verificare i Permessi**
   - Seleziona `index.html` → Permissions → 644
   - Seleziona cartella `assets` → Permissions → 755
   - Seleziona le immagini → Permissions → 644

5. **Testare**
   - Apri `http://tuodominio.com` nel browser

---

### 🟢 Plesk

1. **Login a Plesk**
   - Vai su `https://tuodominio.com:8443`
   - Login con le credenziali

2. **Navigare ai File**
   - Clicca sul dominio
   - Vai su "Files" → "File Manager"
   - Entra in `httpdocs` o `public_html`

3. **Upload**
   - Clicca "Upload Files"
   - Carica `index.html`
   - Clicca "New Directory" → Nome: `assets`
   - Entra nella cartella `assets`
   - Carica le due immagini

4. **Testare**
   - Apri `http://tuodominio.com`

---

### 🟡 FTP (FileZilla, WinSCP)

1. **Connessione FTP**
   ```
   Host: ftp.tuodominio.com
   Username: [il tuo username FTP]
   Password: [la tua password FTP]
   Port: 21 (o 22 per SFTP)
   ```

2. **Navigare alla Cartella Web**
   - Lato remoto: vai in `/public_html` o `/www` o `/httpdocs`

3. **Upload dei File**
   - Trascina `index.html` nella cartella web
   - Crea cartella `assets`
   - Trascina le immagini in `assets/`

4. **Struttura Finale**
   ```
   /public_html/
   ├── index.html
   └── assets/
       ├── background-desktop.png
       └── background-mobile.png
   ```

---

### 🔴 Apache (Linux Server)

1. **Connessione SSH**
   ```bash
   ssh user@tuoserver.com
   ```

2. **Navigare alla Directory Web**
   ```bash
   cd /var/www/html
   ```

3. **Caricare i File** (usando SCP dal computer locale)
   ```bash
   # Dal tuo computer
   scp index.html user@tuoserver.com:/var/www/html/
   scp -r assets user@tuoserver.com:/var/www/html/
   ```

4. **Impostare i Permessi**
   ```bash
   chmod 644 index.html
   chmod 755 assets
   chmod 644 assets/*.png
   ```

5. **Riavviare Apache (se necessario)**
   ```bash
   sudo systemctl restart apache2
   ```

---

### 🟣 Nginx (Linux Server)

1. **Connessione SSH**
   ```bash
   ssh user@tuoserver.com
   ```

2. **Navigare alla Directory Web**
   ```bash
   cd /usr/share/nginx/html
   # oppure
   cd /var/www/html
   ```

3. **Caricare i File**
   ```bash
   # Dal tuo computer
   scp index.html user@tuoserver.com:/usr/share/nginx/html/
   scp -r assets user@tuoserver.com:/usr/share/nginx/html/
   ```

4. **Permessi**
   ```bash
   chmod 644 index.html
   chmod 755 assets
   chmod 644 assets/*.png
   ```

5. **Riavviare Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

---

### 🌐 Netlify (Hosting Statico - CONSIGLIATO)

**Metodo 1: Drag & Drop (Più Facile)**

1. Vai su [netlify.com](https://netlify.com)
2. Crea un account (gratis)
3. Clicca "Add new site" → "Deploy manually"
4. Trascina l'intera cartella del progetto
5. ✅ Fatto! Il sito è online

**Metodo 2: Git**

1. Crea un repository su GitHub
2. Carica i file
3. Su Netlify: "New site from Git"
4. Connetti GitHub
5. Seleziona il repository
6. Deploy!

**Vantaggi Netlify:**
- ✅ HTTPS automatico
- ✅ CDN globale
- ✅ Deploy in 30 secondi
- ✅ Dominio gratuito (.netlify.app)
- ✅ Possibilità di collegare dominio custom

---

### ⚡ Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Sign up (gratis)
3. Clicca "Add New Project"
4. Trascina la cartella del progetto
5. ✅ Deploy automatico!

---

### 🎯 GitHub Pages

1. **Crea Repository**
   - Vai su [github.com](https://github.com)
   - New repository → Nome: `fude-ramen-discount`

2. **Carica i File**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tuousername/fude-ramen-discount.git
   git push -u origin main
   ```

3. **Attiva GitHub Pages**
   - Vai su Settings del repository
   - Clicca "Pages" nel menu laterale
   - Source: Deploy from a branch
   - Branch: main → Folder: / (root)
   - Save

4. **Sito Online**
   - URL: `https://tuousername.github.io/fude-ramen-discount`

---

## 🔧 Configurazione Backend (Opzionale)

Se vuoi salvare i dati del form in un database:

### Esempio con PHP + MySQL

Crea un file `save-data.php`:

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Connessione database
$servername = "localhost";
$username = "tuousername";
$password = "tuapassword";
$dbname = "fude_ramen_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'error' => 'Connection failed']));
}

// Ricevi dati POST
$data = json_decode(file_get_contents('php://input'), true);
$email = $conn->real_escape_string($data['email']);
$phone = $conn->real_escape_string($data['phone']);
$consent1 = $data['consent1'] ? 1 : 0;
$consent2 = isset($data['consent2']) && $data['consent2'] ? 1 : 0;

// Inserisci nel database
$sql = "INSERT INTO discount_cards (email, phone, privacy_consent, marketing_consent, created_at) 
        VALUES ('$email', '$phone', $consent1, $consent2, NOW())";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true, 'message' => 'Data saved successfully']);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}

$conn->close();
?>
```

E modifica l'index.html per chiamare questo endpoint (vedi sezione nel JavaScript).

---

## ✅ Checklist Post-Deployment

Dopo aver caricato i file, verifica:

- [ ] Il sito si apre correttamente
- [ ] Le immagini di sfondo si vedono (desktop e mobile)
- [ ] Il form funziona
- [ ] Le pagine Privacy e Marketing si aprono
- [ ] Il sito è responsive (testare da smartphone)
- [ ] HTTPS è attivo (importante per GDPR)
- [ ] I dati del form vengono salvati (se hai un backend)

---

## 🆘 Problemi Comuni

### ❌ Immagini non visibili
**Soluzione:**
```
1. Verifica i percorsi nel codice
2. Controlla che le immagini siano in assets/
3. Verifica i nomi: background-desktop.png e background-mobile.png
4. Controlla i permessi (644 per i file)
```

### ❌ Errore 404
**Soluzione:**
```
1. Verifica che index.html sia nella root
2. Non deve essere in una sottocartella
3. Controlla il nome file (deve essere index.html in minuscolo)
```

### ❌ Form non invia
**Soluzione:**
```
1. Apri la console del browser (F12)
2. Verifica eventuali errori JavaScript
3. Se hai backend, controlla l'URL dell'endpoint
4. Verifica CORS se backend su dominio diverso
```

### ❌ Mobile non funziona
**Soluzione:**
```
1. Svuota cache del browser mobile
2. Verifica che background-mobile.png esista
3. Testa con Chrome DevTools → Toggle device toolbar
```

---

## 📞 Contatti di Supporto

Se hai problemi con il deployment, contatta:

**Team di Sviluppo**
- Email: [inserire email team]
- Telefono: [inserire telefono]

**Fude Ramen Arzignano**
- Email: info.fuderamen@gmail.com
- Telefono: 333 973 9013

---

## 🎉 Completato!

Una volta verificato che tutto funziona:

1. ✅ Comunica l'URL finale al team
2. ✅ Testa da più dispositivi
3. ✅ Condividi il link con i clienti
4. ✅ Monitora le conversioni

**URL del sito**: `http://tuodominio.com`

Buon lavoro! 🍜
