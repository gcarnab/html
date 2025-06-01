document.addEventListener("DOMContentLoaded", function () {
  // ----- GESTIONE NAVIGAZIONE STICKY -----
  const header = document.getElementById("header")
  const scrollThreshold = 50 // Quanti pixel scrollare prima che la nav diventi sticky

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // ----- GESTIONE MENU MOBILE -----
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const mobileMenuLinks = mobileMenu.querySelectorAll(".mobile-menu-link")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden")
      mobileMenu.classList.toggle("open") // Per CSS se necessario
      // Cambia icona hamburger/close
      const icon = mobileMenuButton.querySelector("i")
      if (mobileMenu.classList.contains("hidden")) {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      } else {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      }
    })

    // Chiudi il menu mobile quando si clicca un link
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden")
        mobileMenu.classList.remove("open")
        mobileMenuButton.querySelector("i").classList.remove("fa-times")
        mobileMenuButton.querySelector("i").classList.add("fa-bars")
      })
    })
  }

  // ----- SMOOTH SCROLL PER LINK DI NAVIGAZIONE (se CSS 'scroll-behavior' non basta o per più controllo) -----
  // CSS 'scroll-behavior: smooth;' in <html class="scroll-smooth"> gestisce già questo per i link #hash.
  // Se si volesse un controllo più granulare o offset:
  // const navLinks = document.querySelectorAll('nav a[href^="#"], header > div > a[href^="#"]');
  // navLinks.forEach(link => {
  //     link.addEventListener('click', function(e) {
  //         e.preventDefault();
  //         let targetId = this.getAttribute('href');
  //         let targetElement = document.querySelector(targetId);
  //         if (targetElement) {
  //             // Calcola l'offset dell'header sticky
  //             const headerOffset = header.offsetHeight;
  //             const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  //             const offsetPosition = elementPosition - headerOffset;
  //
  //             window.scrollTo({
  //                 top: offsetPosition,
  //                 behavior: 'smooth'
  //             });
  //         }
  //     });
  // });

  // ----- INIZIALIZZAZIONE SWIPER.JS PER CAROUSEL PROGETTI -----
  try {
    const projectSwiper = new Swiper(".project-swiper", {
      // Opzioni Swiper
      loop: true, // Loop infinito
      slidesPerView: 1, // Slide visibili su mobile
      spaceBetween: 20, // Spazio tra le slide
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // Quando la larghezza della finestra è >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // Quando la larghezza della finestra è >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
      // Accessibilità
      a11y: {
        prevSlideMessage: "Progetto precedente",
        nextSlideMessage: "Progetto successivo",
        firstSlideMessage: "Questo è il primo progetto",
        lastSlideMessage: "Questo è lultimo progetto",
        paginationBulletMessage: "Vai al progetto {{index}}",
      },
    })
    console.log("Swiper inizializzato.")
  } catch (e) {
    console.error("Errore inizializzazione Swiper:", e)
  }

  // ----- INIZIALIZZAZIONE MICROMODAL.JS -----
  try {
    MicroModal.init({
      onShow: (modal) => console.info(`${modal.id} è mostrato`),
      onClose: (modal) => console.info(`${modal.id} è chiuso`),
      openTrigger: "data-micromodal-trigger",
      closeTrigger: "data-micromodal-close",
      openClass: "is-open",
      disableScroll: true,
      disableFocus: false,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
      debugMode: false, // Imposta a true per log dettagliati
    })
    console.log("Micromodal inizializzato.")
  } catch (e) {
    console.error("Errore inizializzazione Micromodal:", e)
  }

  // ----- INIZIALIZZAZIONE SCROLLREVEAL.JS -----
  try {
    const sr = ScrollReveal({
      origin: "bottom", // Da dove appare l'elemento (top, bottom, left, right)
      distance: "50px", // Distanza dell'animazione
      duration: 800, // Durata dell'animazione in ms
      delay: 200, // Ritardo prima che l'animazione parta
      opacity: 0, // Opacità iniziale
      scale: 0.9, // Scala iniziale (effetto zoom out)
      easing: "cubic-bezier(0.5, 0, 0, 1)", // Curva di easing
      reset: false, // L'animazione si ripete ogni volta che l'elemento diventa visibile?
      // mobile: true, // Animazioni attive su mobile? (default: true)
      // viewFactor: 0.2, // Percentuale dell'elemento che deve essere visibile per triggerare l'animazione
    })

    // Applica ScrollReveal agli elementi desiderati
    // Puoi usare classi specifiche o selettori più generici
    sr.reveal("[data-scrollreveal]") // Applica a tutti gli elementi con l'attributo data-scrollreveal
    // Esempi più specifici:
    // sr.reveal('#about h2, #projects h2, #contact h2', { origin: 'top', delay: 100 });
    // sr.reveal('.project-card', { interval: 150 }); // Applica con un intervallo tra gli elementi
    // sr.reveal('#hero h1', { origin: 'left', distance: '80px', duration: 1000 });
    // sr.reveal('#hero p', { origin: 'right', distance: '80px', duration: 1000, delay: 300 });
    // sr.reveal('#hero .btn', { scale: 0.8, duration: 1200, delay: 600 });

    console.log("ScrollReveal inizializzato.")
  } catch (e) {
    console.error("Errore inizializzazione ScrollReveal:", e)
  }

  // ----- INIZIALIZZAZIONE VANILLATILT.JS SULLE CARD DEI PROGETTI -----
  try {
    const projectCards = document.querySelectorAll(".project-card")
    if (projectCards.length > 0) {
      VanillaTilt.init(projectCards, {
        max: 15, // Angolo massimo di tilt
        speed: 400, // Velocità dell'animazione
        glare: true, // Effetto riflesso
        "max-glare": 0.3, // Intensità del riflesso
        perspective: 1000, // Prospettiva per l'effetto 3D
        scale: 1.03, // Leggero ingrandimento all'hover
      })
      console.log("VanillaTilt inizializzato su", projectCards.length, "cards.")
    } else {
      console.warn("Nessuna .project-card trovata per VanillaTilt.")
    }
  } catch (e) {
    console.error("Errore inizializzazione VanillaTilt:", e)
  }

  // ----- GESTIONE PULSANTE "TORNA SU" -----
  const scrollTopBtn = document.getElementById("scrollTopBtn")
  if (scrollTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        // Mostra dopo 300px di scroll
        scrollTopBtn.classList.remove("hidden", "hide")
        scrollTopBtn.classList.add("show")
      } else {
        scrollTopBtn.classList.remove("show")
        scrollTopBtn.classList.add("hide")
        // Aggiungi 'hidden' dopo che l'animazione di fade out è completata se usi transizioni CSS per opacity
        setTimeout(() => {
          if (!scrollTopBtn.classList.contains("show")) {
            // Ricontrolla nel caso l'utente sia risalito velocemente
            scrollTopBtn.classList.add("hidden")
          }
        }, 300) // Deve corrispondere alla durata della transizione CSS
      }
    })

    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }

  // ----- AGGIORNA ANNO CORRENTE NEL FOOTER -----
  const currentYearSpan = document.getElementById("current-year")
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear()
  }

  // ----- GESTIONE INVIO FORM (SOLO FRONTEND - NO INVIO REALE) -----
  // https://dashboard.emailjs.com/sign-in
  const contactForm = document.querySelector("#contact form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault()
      // Cambia questi valori con i tuoi dati EmailJS
      const serviceID = "service_zmkhhh5"
      const templateID = "template_1gmb3jg"

      emailjs.sendForm(serviceID, templateID, contactForm).then(
        () => {
          alert("Messaggio inviato con successo!")
          contactForm.reset()
        },
        (err) => {
          alert("Errore nell'invio del messaggio. Riprova più tardi.")
          console.error("EmailJS error:", err)
        }
      )
    })
  }

  console.log("Script principale caricato e inizializzato.")
})
