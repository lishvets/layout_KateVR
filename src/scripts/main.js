'use strict';
document.addEventListener("DOMContentLoaded", function () {
  const langMenu = document.getElementById("language-menu");
  const helpMenu = document.getElementById("help-menu");
  const faqMenu = document.getElementById("faq-menu");

  const openLang = document.getElementById("open-language");
  const openHelp = document.getElementById("open-help");
  const openFaq = document.getElementById("open-faq");


  const closeLang = document.getElementById("close-language");
  const closeHelp = document.getElementById("close-help");
  const closeFaq = document.getElementById("close-faq");

  const dropdownBtn = document.querySelector(".dropdown__button");
  const dropdownMenu = document.querySelector(".dropdown__menu");

  dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("active");
    }
  });

  function closeAllSubmenus() {
    document.body.classList.remove("no-scroll");
    langMenu.classList.remove("active");
    helpMenu.classList.remove("active");
    faqMenu.classList.remove("active");
  }

  openLang.addEventListener("click", function (e) {
    e.preventDefault();
    closeAllSubmenus();
    langMenu.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  openHelp.addEventListener("click", function (e) {
    e.preventDefault();
    closeAllSubmenus();
    helpMenu.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  openFaq.addEventListener("click", function (e) {
    e.preventDefault();
    closeAllSubmenus();
    faqMenu.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  closeLang.addEventListener("click", function (e) {
    e.preventDefault();
    langMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  closeHelp.addEventListener("click", function (e) {
    e.preventDefault();
    helpMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  closeFaq.addEventListener("click", function (e) {
    e.preventDefault();
    faqMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  const headerFaqLinks = document.querySelectorAll('a[href="#faq-menu"]');
  const headerHelpLinks = document.querySelectorAll('a[href="#help-menu"]');

  headerFaqLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllSubmenus();
      faqMenu.classList.add('active');
      document.body.classList.add('no-scroll');
    });
  });

  headerHelpLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllSubmenus();
      helpMenu.classList.add('active');
      document.body.classList.add('no-scroll');
    });
  });

  const slides = document.querySelectorAll('.slider__slide');
  const track = document.querySelector('.slider__track');
  const dots = document.querySelectorAll('.slider__dot');
  const counter = document.querySelector('.slider__counter');
  const prevButton = document.querySelector('.slider__prev');
  const nextButton = document.querySelector('.slider__next');

  let currentIndex = 0;


  function showSlide (index) {
    if (index < 0) {
      index =  slides.length - 1;
    }

    if (index >= slides.length) {
      index = 0;
    }

    currentIndex = index;
    track.style.transform = `translateX(-${100 * index}%)`;

    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));

    if (counter) {
      counter.textContent = `${index + 1} / ${slides.length}`;
    }
  }

  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    showSlide(currentIndex + 1);
  });


  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });

  showSlide(currentIndex);

});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('no-scroll');
  });
});