/*=============== SCROLL HEADER ===============*/
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
});

/*=============== SHOW / HIDE MOBILE MENU ===============*/
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/*=============== ACTIVE NAV LINK ===============*/
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});

/*=============== SCROLL UP ===============*/
const scrollUp = document.querySelector(".scrollup");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

/*=============== PORTFOLIO FILTER ===============*/
const workItems = document.querySelectorAll(".work__item");
const workCards = document.querySelectorAll(".work__card");

workItems.forEach((item) => {
  item.addEventListener("click", () => {
    workItems.forEach((i) => i.classList.remove("active-work"));
    item.classList.add("active-work");

    const category = item.dataset.category;

    workCards.forEach((card) => {
      const show = category === "all" || card.dataset.category === category;
      card.classList.toggle("work__card--hidden", !show);
    });
  });
});

/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector(".contact__form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_w1l136f",
      "template_0jm8q6d",
      contactForm,
      "GKx_m2YDQ1qAztfjD"
    )
    .then(
      () => {
        contactForm.reset();
      },
      (error) => {
        console.error(error.text);
      }
    );
});
