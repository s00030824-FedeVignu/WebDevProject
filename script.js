// 1. NAVBAR TOGGLE (Mobile Menu)

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
  navMenu.classList.toggle("open");
});

// 2. CONTACT FORM VALIDATION

const form = document.querySelector("#contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  let isValid = true;

  // Reset error messages
  document.querySelector("#name-error").textContent = "";
  document.querySelector("#email-error").textContent = "";
  document.querySelector("#message-error").textContent = "";
  document.querySelector("#form-success").textContent = "";

  // Name validation
  if (name.length < 2) {
    document.querySelector("#name-error").textContent = "Please enter your name.";
    isValid = false;
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.querySelector("#email-error").textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Message validation
  if (message.length < 10) {
    document.querySelector("#message-error").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  // If valid → simulate sending
  if (isValid) {
    document.querySelector("#form-success").textContent = "Your message has been sent successfully!";
    form.reset();
  }
});

// 3. SMOOTH SCROLL FOR NAV LINKS

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 4. FOOTER YEAR AUTO-UPDATE

document.querySelector("#year").textContent = new Date().getFullYear();
