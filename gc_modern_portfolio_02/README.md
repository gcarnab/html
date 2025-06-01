# Template Portfolio Web Moderno (Google Gemini)

Questo è un template HTML5, CSS3 e JavaScript vanilla per un portfolio web personale. È progettato per essere moderno, minimale, responsive (mobile-first) e facilmente personalizzabile. Non richiede strumenti di build o dipendenze da `npm`; tutto funziona aprendo `index.html` in un browser.

## Caratteristiche Principali

* **Design Moderno e Minimale:** Layout pulito e focalizzato sui contenuti.
* **Responsive Mobile-First:** Ottimizzato per tutti i dispositivi, partendo dai più piccoli.
* **Tailwind CSS:** Utilizzato via CDN per uno styling utility-first rapido e flessibile.
* **Intestazione Sticky:** Navigazione che rimane visibile durante lo scroll.
* **Scroll Fluido:** Navigazione fluida tra le sezioni della pagina (tramite CSS `scroll-behavior`).
* **Sezioni Incluse:**
    * Hero (con nome, titolo, immagine profilo)
    * Chi Sono
    * Progetti (con slider/carousel)
    * Contatti (con link social)
* **Slider Progetti:** Realizzato con [Swiper.js](https://swiperjs.com/) per mostrare i tuoi lavori in modo interattivo.
* **Modali Dettagli Progetto:** Utilizzo di [Micromodal.js](https://micromodal.vercel.app/) per visualizzare informazioni aggiuntive su ciascun progetto.
* **Animazioni allo Scroll:** Effetti di apparizione leggeri per le sezioni durante lo scroll, implementati con [ScrollReveal.js](https://scrollrevealjs.org/).
* **Effetto 3D sulle Card:** Interazione 3D "tilt" sulle card dei progetti grazie a [VanillaTilt.js](https://micku7zu.github.io/vanilla-tilt.js/).
* **Icone Social:** Utilizzo di [Font Awesome](https://fontawesome.com/) per le icone.
* **Codice Commentato:** Per facilitare la comprensione e la personalizzazione.
* **Pulsante "Torna Su":** Per una facile navigazione.
* **Form Contatti:** https://dashboard.emailjs.com/sign-in

## Struttura dei File


tuo-portfolio/
├── index.html             # File HTML principale
├── css/
│   └── style.css          # Stili CSS personalizzati
├── js/
│   └── main.js            # Logica JavaScript personalizzata
└── assets/                # Cartella per immagini, icone personalizzate, ecc.
└── (immagini_profilo.jpg, progetto1.png, ecc.)


**Nota:** Le librerie JavaScript (Swiper, Micromodal, ScrollReveal, VanillaTilt) e i CSS (Tailwind, Font Awesome) sono inclusi tramite CDN direttamente in `index.html` per semplicità e per evitare la necessità di una cartella `js/lib/`.

## Come Usare

1.  **Scarica o Clona:** Ottieni i file del template.
2.  **Apri `index.html`:** Apri il file `index.html` in un qualsiasi browser web moderno.
3.  **Inizia a Personalizzare!**

## Personalizzazione

### 1. Contenuti (in `index.html`):

* **Testi:** Modifica tutti i testi segnaposto (Nome Cognome, Il Mio Titolo, descrizioni, ecc.) con le tue informazioni.
    * **Intestazione:** Aggiorna il tuo nome e titolo nella sezione `<header>` e `<section id="hero">`.
    * **Chi Sono:** Scrivi la tua biografia nella sezione `<section id="about">`.
    * **Progetti:**
        * Per ogni slide in `<div class="swiper-wrapper">` dentro `<section id="projects">`:
            * Cambia `Nome Progetto X`, la descrizione breve e l'immagine (`src` dell' `<img>` tag).
            * Assicurati che l'attributo `data-micromodal-trigger` sul pulsante "Dettagli" corrisponda all'`id` del modale corretto (es. `modal-project-1`).
        * Per ogni modale (es. `<div class="modal micromodal-slide" id="modal-project-1" ...>`):
            * Aggiorna il titolo (`modal-project-X-title`), l'immagine, la descrizione dettagliata, le tecnologie usate e il link al progetto/repository.
    * **Contatti:**
        * Modifica l'indirizzo email nel link `mailto:`.
        * Aggiorna i link ai tuoi profili social (LinkedIn, GitHub, Twitter/X, ecc.).
        * Il form di contatto è solo frontend; per funzionalità di invio reali, dovrai integrarlo con un servizio backend (es. Formspree, Netlify Forms) o scrivere il tuo script server-side.
    * **Footer:** Aggiorna l'anno e il nome nel footer.
* **Immagini:**
    * Sostituisci le immagini placeholder (`https://placehold.co/...`) con le tue.
    * **Immagine Profilo:** In `<section id="hero">`, aggiorna `src` dell'`<img>` tag.
    * **Immagini Progetti:** Aggiorna `src` per le anteprime nelle card e nei modali.
    * Conserva le immagini nella cartella `assets/` e aggiorna i percorsi di conseguenza (es. `assets/mia-foto-profilo.jpg`).

### 2. Stili (in `css/style.css` e Configurazione Tailwind):

* **Tailwind CSS:**
    * Puoi personalizzare il tema di Tailwind (colori, font, ecc.) direttamente nello script di configurazione in `index.html` dentro `<head>`:
        ```html
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        fontFamily: {
                            sans: ['NomeTuoFont', 'sans-serif'],
                        },
                        colors: {
                            primary: '#tuoColorePrimario',
                            secondary: '#tuoColoreSecondario',
                            // ...altri colori
                        }
                    }
                }
            }
        </script>
        ```
    * Utilizza le classi utility di Tailwind direttamente nell'HTML per la maggior parte dello styling.
* **CSS Personalizzato (`css/style.css`):**
    * Modifica o aggiungi stili personalizzati in questo file per elementi che richiedono uno styling più specifico non facilmente ottenibile con le utility di Tailwind o per sovrascrivere stili delle librerie.
    * I colori principali (`primary`, `secondary`, `accent`, `dark`, `light`) sono definiti nella configurazione di Tailwind e usati come classi (es. `bg-primary`, `text-secondary`).

### 3. JavaScript (in `js/main.js`):

* **Swiper.js:** Puoi configurare le opzioni dello slider (velocità, effetti, numero di slide visibili, ecc.) nell'oggetto di configurazione di `new Swiper('.project-swiper', { /* opzioni */ });`. Consulta la [documentazione di Swiper.js](https://swiperjs.com/swiper-api) per tutte le opzioni disponibili.
* **ScrollReveal.js:** Modifica le opzioni di default (`origin`, `distance`, `duration`, `delay`, ecc.) o aggiungi configurazioni specifiche per diversi elementi. Consulta la [documentazione di ScrollReveal.js](https://scrollrevealjs.org/api/reveal.html).
* **VanillaTilt.js:** Personalizza le opzioni (`max`, `speed`, `glare`, ecc.) nell'inizializzazione di `VanillaTilt.init(...)`. Vedi la [documentazione di VanillaTilt.js](https://micku7zu.github.io/vanilla-tilt.js/).
* **Micromodal.js:** Le opzioni di base sono configurate. Per personalizzazioni avanzate, fai riferimento alla [documentazione di Micromodal.js](https://micromodal.vercel.app/#configuration).

### 4. Librerie Esterne:

* Tutte le librerie sono caricate tramite CDN. Se preferisci ospitarle localmente:
    1.  Scarica i file `.js` e `.css` necessari dalle rispettive fonti.
    2.  Salvali, ad esempio, in una cartella `js/lib/` e `css/lib/`.
    3.  Aggiorna i tag `<link>` e `<script>` in `index.html` per puntare ai file locali.

## Font

* Il template usa "Inter" come font di esempio, caricato da Google Fonts e configurato in Tailwind. Puoi cambiarlo modificando il link a Google Fonts e la configurazione `tailwind.config` in `index.html`.

## Icone

* Font Awesome è incluso per le icone. Puoi cercare e usare altre icone dalla [libreria di Font Awesome](https://fontawesome.com/icons).

## Suggerimenti

* **Ottimizza le Immagini:** Comprimi le tue immagini per migliorare i tempi di caricamento della pagina.
* **Accessibilità (a11y):** Presta attenzione all'accessibilità. Usa attributi `alt` significativi per le immagini, assicurati un buon contrasto dei colori e testa la navigazione da tastiera. Le librerie usate (Swiper, Micromodal) hanno opzioni di accessibilità integrate.
* **Test:** Testa il tuo portfolio su diversi browser e dispositivi per assicurarti che appaia e funzioni come previsto.

Spero questo template ti sia d'aiuto per creare un fantastico portfolio!