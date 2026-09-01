/*=============== SCROLL REVEAL ===============*/
const revealElements = document.querySelectorAll(
  ".work__card, .skills__content, .contact__content"
);

revealElements.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

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

/*=============== WORK MODAL ===============*/
const workModal = document.querySelector("#work-modal");

if (workModal) {
  const workModalImg = document.querySelector("#work-modal-img");
  const workModalTitle = document.querySelector("#work-modal-title");
  const workModalDescription = document.querySelector(
    "#work-modal-description"
  );
  const workModalDemo = document.querySelector("#work-modal-demo");
  const workModalGithub = document.querySelector("#work-modal-github");
  const workImgLinks = document.querySelectorAll(".work__img__link");

  const openWorkModal = (trigger) => {
    const { title, description, image, imageAlt, demo, github } =
      trigger.dataset;

    workModalImg.src = image;
    workModalImg.alt = imageAlt || "";
    workModalTitle.textContent = title;
    workModalDescription.textContent = description;
    workModalDemo.href = demo;
    workModalGithub.href = github;

    workModal.showModal();
  };

  workImgLinks.forEach((trigger) => {
    trigger.addEventListener("click", () => openWorkModal(trigger));
  });

  workModal.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", () => workModal.close());
  });

  // Light-dismiss: close when a click lands on the ::backdrop,
  // i.e. outside the dialog's own content box.
  workModal.addEventListener("click", (e) => {
    const rect = workModal.getBoundingClientRect();
    const clickedInside =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!clickedInside) workModal.close();
  });
}

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
