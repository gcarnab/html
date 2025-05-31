// Questo script carica cv.md e lo converte in HTML usando la libreria marked.js

// Carica la libreria marked.js dinamicamente
const script = document.createElement("script")
script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
script.onload = () => {
  fetch("cv.md")
    .then((response) => response.text())
    .then((md) => {
      // Converte il markdown in HTML
      const html = marked.parse(md)
      document.querySelector(".cv-content").innerHTML = html
    })
    .catch(() => {
      document.querySelector(".cv-content").innerHTML =
        "<p>Impossibile caricare il CV.</p>"
    })
}
document.head.appendChild(script)
