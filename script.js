const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const newsletterForm = document.getElementById("newsletterForm");

const whatsappNumber = "573002730057";

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const isOpen = navMenu.classList.contains("active");

  menuBtn.textContent = isOpen ? "×" : "☰";
  menuBtn.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-label", "Abrir menú");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);

  const nombre = data.get("nombre");
  const email = data.get("email");
  const servicio = data.get("servicio");
  const mensaje = data.get("mensaje");

  const text = `
Hola Finanzas e Inversiones AYG.

Soy ${nombre}.
Correo: ${email}
Servicio de interés: ${servicio}

Mensaje:
${mensaje}
  `;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  formMessage.textContent = "Abriendo WhatsApp...";
  window.open(whatsappUrl, "_blank");

  contactForm.reset();

  setTimeout(() => {
    formMessage.textContent = "";
  }, 3000);
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = newsletterForm.querySelector("input");

  alert(`Gracias por suscribirte: ${input.value}`);
  newsletterForm.reset();
});