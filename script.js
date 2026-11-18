document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".dot")];
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  // Header shadow
  const updateHeader = () => {
    header?.classList.toggle("scrolled", window.scrollY > 12);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // Mobile menu
  const closeMenu = () => {
    if (!mobileNav || !menuButton) return;
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  };

  menuButton?.addEventListener("click", () => {
    const open = mobileNav?.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(!!open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", !!open);
  });

  mobileNav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  // Hero slideshow
  let current = 0;
  let timer;

  const showSlide = index => {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === current));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  };

  const startSlideshow = () => {
    clearInterval(timer);
    if (slides.length > 1) {
      timer = setInterval(() => showSlide(current + 1), 6500);
    }
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlideshow();
    });
  });

  showSlide(0);
  startSlideshow();

  // Pause the slideshow when the tab is hidden.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearInterval(timer);
    else startSlideshow();
  });

  const ENQUIRY_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwOQWI-qmrGt_xkQltIQdZegbEoqvQhq-wSPgDRfWk6b3vCe58y-AqkEWKW0-Vb5d2GSQ/exec";

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

  enquiryForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const submitButton =
      document.getElementById("submitButton");

    const formStatus =
      document.getElementById("formStatus");

    const formData =
      new FormData(enquiryForm);

    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {

      await fetch(ENQUIRY_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      enquiryForm.reset();

      formStatus.textContent =
        "Thank you! Your enquiry has been received. We will get back to you shortly.";

      formStatus.className =
        "form-status success";

    } catch (error) {

      formStatus.textContent =
        "Something went wrong. Please try WhatsApp or call us directly.";

      formStatus.className =
        "form-status error";

    } finally {

      submitButton.disabled = false;

      submitButton.innerHTML =
        'Send Enquiry <span>↗</span>';

    }

  });

}


});
