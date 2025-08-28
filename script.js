// Toggle modo oscuro
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Validación del formulario
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Por favor completa todos los campos.");
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Correo inválido.");
    return;
  }
  alert("Formulario enviado correctamente ✅");
  form.reset();
});

// Carrusel básico
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const cardWidth = 270; // ancho + margen
const maxIndex = track.children.length - 1;

nextBtn.addEventListener("click", () => {
  if (index < maxIndex) index++;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

prevBtn.addEventListener("click", () => {
  if (index > 0) index--;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});
