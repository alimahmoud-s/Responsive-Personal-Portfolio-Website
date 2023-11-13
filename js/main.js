/*======show menu=======*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*----menu show -----*/
/* validate if constent exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=====menu hidden====*/
/*validate if consrant exists*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*===remove menu mobile ===*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((e) => e.addEventListener("click", linkAction));

/*----change background Header----*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is grater than 50vh ,add the scroll-header class to the head tag

  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=========shadow header===========*/

const shadowHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is grater than 50vh ,add the shadow-header class to the head tag

  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=====email js===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_6pfuhye",
      "template_9dyn94e",
      "#contact-form",
      "vBaS3fY0V6KpSxALp"
    )
    .then(
      () => {
        //show sent message
        contactMessage.textContent = " Message sent successfully ✅";

        // Remove message after five seconds

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //clear inputs
        contactForm.reset();
      },
      () => {
        // Show error message

        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);
/*==================Show ScrollUp=================*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher than 350 viewport height ,add the
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=========scrollsetion active link======== */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    // Skip the 'services' section
    if (sectionId === "services") {
      return;
    }

    const sectionClass = document.querySelector(
      '.nav__menu a[href*="' + sectionId + '"]'
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);
// This will skip the 'services' section while still applying the active-link class to other sections. Make sure to add this JavaScript code after your original scrollActive function.

/*============Dark Theme=============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

//we validate if the user prev chose a topic
if (selectedTheme) {
  //if the validate is fulfilled ,we ask what the issue was to know if we activated or des
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedTheme === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}
//activate /deactivate the theme manully

themeButton.addEventListener("click", () => {
  //add or remove the dark icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //we save the theme  and the current icon that the user choose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=================Scrool Reveal Animation==========*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 200,
  reset: true,
});

sr.reveal(".home__profil, .about__image , .contact__mail", { origin: "right" });

sr.reveal(".services__card ,.projects__card", { interval: 100 });

sr.reveal(
  ".home__name, .home__info ,.about__container .section__title-1, .about__info , .contact__data",
  { origin: "left" }
);