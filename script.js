document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".navbar a");
  const reveals = document.querySelectorAll(".reveal");
  const counters = document.querySelectorAll("[data-counter]");
  const cursorGlow = document.querySelector(".cursor-glow");
  const loader = document.getElementById("siteLoader");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
      });
    });
  }

  if (typeof Typed !== "undefined") {
    new Typed(".text", {
      strings: ["Forex Trader", "Analyzer", "Web Developer"],
      typeSpeed: 80,
      backSpeed: 45,
      backDelay: 1200,
      loop: true,
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((item) => observer.observe(item));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.counter || 0);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 30));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current;
        }, 35);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  function activateNav() {
    let current = "";
    sections.forEach((section) => {
      const top = window.scrollY;
      const offset = section.offsetTop - 140;
      const height = section.offsetHeight;
      if (top >= offset && top < offset + height) current = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateNav);
  activateNav();

  window.addEventListener("mousemove", (e) => {
    if (!cursorGlow) return;
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });

  window.addEventListener("load", () => {
    if (loader) {
      setTimeout(() => loader.classList.add("hidden"), 600);
    }
  });
});
