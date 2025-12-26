import React, { useState } from 'react';
import { Mail, Phone, Gift, Clipboard, ClipboardList, Lightbulb, MapPin, Clock, ArrowLeft } from 'lucide-react';
import backgroundImgDesktop from 'figma:asset/5757814d1902dd49d577b7771f3ade93210b66a4.png';
import backgroundImgMobile from 'figma:asset/e2daaf38fa8cb13cce462e1381f2dadbdc918db6.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'success' | 'privacy' | 'marketing'>('home');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && phone && consent1) {
      setCurrentPage('success');
    }
  };

  const goToHome = () => {
    setCurrentPage('home');
    setEmail('');
    setPhone('');
    setConsent1(false);
    setConsent2(false);
  };

  const goToPrivacy = () => {
    setCurrentPage('privacy');
  };

  const goToMarketing = () => {
    setCurrentPage('marketing');
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0">
        {/* Desktop background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImgDesktop})` }}
        />
        {/* Mobile background */}
        <div 
          className="block md:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImgMobile})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {currentPage === 'home' && <HomePage 
          email={email}
          phone={phone}
          consent1={consent1}
          consent2={consent2}
          setEmail={setEmail}
          setPhone={setPhone}
          setConsent1={setConsent1}
          setConsent2={setConsent2}
          handleSubmit={handleSubmit}
          goToPrivacy={goToPrivacy}
          goToMarketing={goToMarketing}
        />}
        {currentPage === 'success' && (
          <div className="container mx-auto px-4 py-8 space-y-6">
            {/* Success Message */}
            <div className="bg-gradient-to-b from-red-900/80 to-red-800/80 backdrop-blur-sm rounded-2xl p-6 border border-red-800/50">
              <h2 className="text-2xl text-white text-center">La Tua Carta Sconto è Pronta!</h2>
              <p className="text-white/80 text-center mt-2">
                Complimenti! La tua carta sconto è pronta per essere utilizzata.
              </p>
            </div>

            {/* Card Code */}
            <div className="bg-gradient-to-b from-red-900/80 to-red-950/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-red-800/50 space-y-6">
              <h3 className="text-xl text-white text-center">Il Tuo Codice Carta:</h3>
              
              <div className="bg-gradient-to-r from-red-900/60 to-orange-900/60 rounded-xl p-8 border-2 border-red-500/50 text-center">
                <p className="text-3xl md:text-5xl text-white tracking-widest font-bold">FUDE666</p>
              </div>

              <div className="text-center space-y-1">
                <p className="text-orange-400 text-xl">-20% CARTA SCONTO</p>
                <p className="text-white">FUDE RAMEN ARZIGNANO</p>
              </div>
            </div>

            {/* Special Offers */}
            <div className="bg-gradient-to-b from-red-900/80 to-red-950/80 backdrop-blur-sm rounded-2xl p-6 border border-red-800/50 space-y-4">
              <div className="flex items-center gap-2 text-orange-400">
                <Gift className="w-6 h-6" />
                <h3 className="text-xl">Offerte Speciali:</h3>
              </div>
              <div className="text-center">
                <p className="text-2xl text-white">🍜 Tutto al -20% Sconto</p>
              </div>
            </div>

            {/* Card Details */}
            <div className="bg-gradient-to-b from-red-900/80 to-red-950/80 backdrop-blur-sm rounded-2xl p-6 border border-red-800/50 space-y-4">
              <div className="flex items-center gap-2 text-orange-400">
                <ClipboardList className="w-6 h-6" />
                <h3 className="text-xl">Dettagli della Carta Sconto:</h3>
              </div>
              <ul className="list-none space-y-1 text-white text-sm md:text-base">
                <li>• Valida fino al 15 gennaio 2026</li>
                <li>• Solo presso il nostro ristorante ad Arzignano</li>
                <li>• Non cumulabile con altre promozioni</li>
              </ul>
            </div>

            {/* Restaurant Info */}
            <div className="bg-gradient-to-b from-red-900/80 to-red-950/80 backdrop-blur-sm rounded-2xl p-6 border border-red-800/50 space-y-4">
              <div className="flex items-center gap-2 text-orange-400">
                <MapPin className="w-6 h-6" />
                <h3 className="text-xl">Vieni a Trovarci!</h3>
              </div>
              
              <div className="space-y-4 text-white">
                <div>
                  <p className="text-lg font-medium">FUDE RAMEN ARZIGNANO</p>
                  <p className="text-white/80">Viale delle Fontanelle 145, Arzignano</p>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <a href="tel:3339739013" className="hover:text-orange-400 transition-colors">
                    333 973 9013
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <a href="mailto:info.fuderamen.sanbonifacio@gmail.com" className="hover:text-orange-400 transition-colors break-all">
                    info.fuderamen.sanbonifacio@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p>Orari di apertura</p>
                    <p className="text-white/80">12:00-14:30  |  18:00-23:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Use */}
            <div className="bg-gradient-to-b from-red-900/80 to-red-950/80 backdrop-blur-sm rounded-2xl p-6 border border-red-800/50 space-y-4">
              <div className="flex items-center gap-2 text-orange-400">
                <Lightbulb className="w-6 h-6" />
                <h3 className="text-xl">Come Utilizzare la Carta Sconto:</h3>
              </div>
              <ol className="list-none space-y-1 text-white text-sm md:text-base">
                <li>1. Salva questa email o fai uno screenshot del codice</li>
                <li>2. Vieni nel nostro ristorante ad Arzignano</li>
                <li>3. Mostra il codice alla cassa</li>
                <li>4. Goditi i tuoi sconti speciali!</li>
              </ol>
            </div>

            {/* Footer */}
            <div className="text-center space-y-4 pt-4">
              <p className="text-white/70 text-sm">
                Hai domande? Contattaci tramite telefono o email
              </p>
              <p className="text-white/50 text-xs">
                © 2025 FUDE RAMEN ARZIGNANO - Tutti i diritti riservati
              </p>
            </div>

            {/* Back to Home Button */}
            <button
              onClick={() => setCurrentPage('home')}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              Torna alla Home
            </button>
          </div>
        )}
        {currentPage === 'privacy' && <PrivacyPage goToHome={goToHome} />}
        {currentPage === 'marketing' && <MarketingPage goToHome={goToHome} />}
      </div>
    </div>
  );
}

interface HomePageProps {
  email: string;
  phone: string;
  consent1: boolean;
  consent2: boolean;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
  setConsent1: (value: boolean) => void;
  setConsent2: (value: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
  goToPrivacy: () => void;
  goToMarketing: () => void;
}

function HomePage({ email, phone, consent1, consent2, setEmail, setPhone, setConsent1, setConsent2, handleSubmit, goToPrivacy, goToMarketing }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl text-white">
            <span className="bg-gradient-to-r from-red-400 via-white to-orange-400 bg-clip-text text-transparent">
              -20% SCONTO
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white">
            FUDE RAMEN ARZIGNANO
          </h2>
          <p className="text-white/90 text-sm md:text-base">
            Offerta valida fino al 15 gennaio 2026
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-b from-red-900/80 to-orange-950/80 rounded-3xl p-6 md:p-8 space-y-6 backdrop-blur-sm border border-red-700/50">
          {/* Warning */}
          <div className="bg-gradient-to-r from-yellow-900/80 to-red-900/80 rounded-xl p-4 border border-yellow-600/30">
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">⚠️</span>
              <p className="text-white text-sm md:text-base">
                Per consentire al negozio di verificare la tua carta sconto, inserisci il tuo numero di telefono corretto.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white text-sm md:text-base">
                <Mail className="w-5 h-5" />
                Indirizzo Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@gmail.com"
                className="w-full px-4 py-3 bg-white border border-red-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white text-sm md:text-base">
                <Phone className="w-5 h-5" />
                Numero di Telefono
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+39 123 456 7890"
                className="w-full px-4 py-3 bg-white border border-red-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consent1}
                  onChange={(e) => setConsent1(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-red-600 bg-white text-red-500 focus:ring-2 focus:ring-red-500 cursor-pointer"
                  required
                />
                <span className="text-white text-sm group-hover:text-red-200">
                  Accetto l'<button type="button" onClick={goToPrivacy} className="underline hover:text-red-300">informativa sulla privacy</button> e il trattamento dei miei dati personali.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consent2}
                  onChange={(e) => setConsent2(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-red-600 bg-white text-red-500 focus:ring-2 focus:ring-red-500 cursor-pointer"
                />
                <span className="text-white text-sm group-hover:text-red-200">
                  Voglio ricevere aggiornamenti, promozioni e offerte esclusive. Autorizzo il trattamento dei miei dati personali per finalità di marketing secondo le <button type="button" onClick={goToMarketing} className="underline hover:text-red-300">condizioni indicate</button>.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-500/50 flex items-center justify-center gap-2"
            >
              <Gift className="w-5 h-5" />
              Ricevi la tua carta sconto
            </button>
          </form>

          {/* Footer Text */}
          <p className="text-center text-white/80 text-sm">
            Mostra la carta alla cassa per lo sconto immediato
          </p>
        </div>

        {/* Special Discount Preview */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl text-white">
            SCONTO SPECIALE
          </h3>
        </div>
      </div>
    </div>
  );
}

interface PrivacyPageProps {
  goToHome: () => void;
}

function PrivacyPage({ goToHome }: PrivacyPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 py-12">
      <div className="max-w-4xl w-full space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={goToHome}
            className="text-white hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl md:text-4xl text-white">Privacy Policy</h1>
        </div>

        <div className="bg-gradient-to-b from-red-900/80 to-red-950/80 rounded-3xl p-6 md:p-10 space-y-6 backdrop-blur-sm border border-red-700/50">
          <div className="space-y-6 text-white">
            <div>
              <h2 className="text-2xl text-orange-400 mb-2">Informativa sulla Privacy (GDPR)</h2>
              <p className="text-white/80">Ultimo aggiornamento: dicembre 2025</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-orange-300 mb-2">1. Titolare del Trattamento</h3>
                <p>Il Titolare del trattamento dei dati è:</p>
                <div className="ml-4 mt-2 space-y-1">
                  <p><strong>Fude Ramen Arzignano</strong></p>
                  <p>Indirizzo: Viale delle Fontanelle 145, Arzignano</p>
                  <p>Email: info.fuderamen.sanbonifacio@gmail.com</p>
                  <p>Tel: 333 973 9013</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">2. Dati Raccolti</h3>
                <p>Raccogliamo esclusivamente i seguenti dati personali forniti volontariamente dall'utente tramite il modulo online:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">3. Finalità del Trattamento</h3>
                <p>I dati raccolti verranno utilizzati esclusivamente per:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>Invio del coupon promozionale richiesto</li>
                  <li>Comunicazioni relative a promozioni, offerte o aggiornamenti del ristorante</li>
                  <li>Marketing diretto (solo previo consenso esplicito)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">4. Base Giuridica del Trattamento</h3>
                <p>Ai sensi del GDPR (Reg. UE 2016/679), il trattamento si basa su:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>Consenso dell'interessato, espresso tramite selezione dell'apposita casella nel modulo</li>
                  <li>Esecuzione di misure precontrattuali, per l'invio del coupon richiesto</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">5. Modalità del Trattamento</h3>
                <p>I dati sono trattati con strumenti elettronici e salvati su server protetti.</p>
                <p className="mt-2">Adottiamo misure tecniche e organizzative adeguate per garantire:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>integrità</li>
                  <li>riservatezza</li>
                  <li>protezione da accessi non autorizzati</li>
                  <li>perdita o distruzione</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">6. Conservazione dei Dati</h3>
                <p>I dati saranno conservati solo per il tempo necessario a:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>inviare il coupon</li>
                  <li>fornire comunicazioni promozionali (solo se l'utente ha dato il consenso)</li>
                </ul>
                <p className="mt-2">L'utente può in qualsiasi momento richiedere la cancellazione dei propri dati.</p>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">7. Comunicazione dei Dati</h3>
                <p>I dati:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>non saranno comunicati a terzi</li>
                  <li>non saranno trasferiti fuori dall'Unione Europea</li>
                  <li>saranno trattati esclusivamente da personale autorizzato di Fude Ramen</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">8. Sicurezza</h3>
                <p>Adottiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati personali da:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>accessi non autorizzati</li>
                  <li>perdita</li>
                  <li>distruzione</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">9. Diritti dell'Interessato</h3>
                <p>Ai sensi degli artt. 15–22 del GDPR, hai il diritto di:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>Accedere ai tuoi dati personali</li>
                  <li>Richiedere la rettifica o la cancellazione dei dati</li>
                  <li>Limitare il trattamento</li>
                  <li>Opporti al trattamento</li>
                  <li>Richiedere la portabilità dei dati</li>
                  <li>Revocare il consenso in qualsiasi momento</li>
                  <li>Presentare reclamo all'Autorità Garante per la Protezione dei Dati Personali</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">10. Contatti</h3>
                <p>Per esercitare i tuoi diritti o per qualsiasi informazione relativa al trattamento dei dati, contattaci a:</p>
                <div className="ml-4 mt-2 space-y-1">
                  <p>📩 Email: info.fuderamen.sanbonifacio@gmail.com</p>
                  <p>📞 Tel: 333 973 9013</p>
                </div>
              </div>

              <div className="pt-4 border-t border-red-700/50">
                <p className="text-orange-300">Ultimo aggiornamento</p>
                <p>Dicembre 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={goToHome}
          className="w-full bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white py-4 rounded-xl transition-all duration-200"
        >
          Torna alla Home
        </button>
      </div>
    </div>
  );
}

interface MarketingPageProps {
  goToHome: () => void;
}

function MarketingPage({ goToHome }: MarketingPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 py-12">
      <div className="max-w-4xl w-full space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={goToHome}
            className="text-white hover:text-orange-400 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl md:text-4xl text-white">Condizioni di Marketing</h1>
        </div>

        <div className="bg-gradient-to-b from-red-900/80 to-red-950/80 rounded-3xl p-6 md:p-10 space-y-6 backdrop-blur-sm border border-red-700/50">
          <div className="space-y-6 text-white">
            <div>
              <h2 className="text-2xl text-orange-400 mb-2">Termini e condizioni per le comunicazioni commerciali</h2>
              <p className="text-white/90 mt-3">
                Accettando le presenti condizioni di marketing, autorizzi Fude Ramen a utilizzare i tuoi dati personali (nome, cognome, indirizzo email e numero di telefono) per le seguenti finalità commerciali e promozionali, ai sensi del GDPR.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-orange-300 mb-2">1. Invio di comunicazioni promozionali</h3>
                <p>Potremo contattarti tramite:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>Email</li>
                  <li>WhatsApp</li>
                  <li>SMS</li>
                </ul>
                <p className="mt-3">per inviarti:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>offerte speciali e sconti riservati,</li>
                  <li>coupon personalizzati,</li>
                  <li>novità sui servizi e prodotti disponibili presso il nostro ristorante.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">2. Aggiornamenti periodici</h3>
                <p>Riceverai comunicazioni riguardanti:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>promozioni stagionali e iniziative in ristorante,</li>
                  <li>nuovi piatti disponibili,</li>
                  <li>informazioni utili per migliorare la tua esperienza come cliente.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">3. Personalizzazione delle offerte</h3>
                <p>I tuoi dati potranno essere utilizzati per proporti offerte rilevanti e personalizzate, basate:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>sui tuoi interessi,</li>
                  <li>sulle preferenze di acquisto,</li>
                  <li>sulle interazioni precedenti con i nostri servizi.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">4. Revoca del consenso</h3>
                <p>Puoi revocare il consenso in qualsiasi momento, senza costi e senza pregiudicare la liceità del trattamento precedente.</p>
                <p className="mt-3">Per revocare il consenso, scrivi a:</p>
                <p className="ml-4 mt-2">📩 info.fuderamen.sanbonifacio@gmail.com</p>
                <p className="mt-3">Dopo la revoca:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>non riceverai più comunicazioni promozionali,</li>
                  <li>i tuoi dati potranno essere conservati solo per obblighi amministrativi o legali.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">5. Limitazioni e frequenza di invio</h3>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>Le comunicazioni verranno inviate con frequenza moderata, proporzionata alle nostre offerte reali.</li>
                  <li>Non effettuiamo spam né vendiamo i tuoi dati a terzi.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-orange-300 mb-2">6. Protezione dei dati</h3>
                <p>I tuoi dati personali saranno trattati:</p>
                <ul className="list-disc ml-8 mt-2 space-y-1">
                  <li>nel rispetto del Regolamento (UE) 679/2016 (GDPR),</li>
                  <li>con misure tecniche e organizzative adeguate,</li>
                  <li>al fine di garantirne sicurezza, integrità e riservatezza,</li>
                  <li>da personale autorizzato di Fude Ramen.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={goToHome}
          className="w-full bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white py-4 rounded-xl transition-all duration-200"
        >
          Torna alla Home
        </button>
      </div>
    </div>
  );
}