'use strict';
document.addEventListener("DOMContentLoaded", function () {
  const orderButton = document.querySelector(".button--fixed-order");
  const contactsSection = document.getElementById("contacts");

  function toggleOrderButton() {
    if (!contactsSection) return;

    const contactsTop = contactsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (contactsTop < windowHeight - 100) {
      orderButton.classList.add("hidden");
    } else {
      orderButton.classList.remove("hidden");
    }
  }

  window.addEventListener("scroll", toggleOrderButton);
  window.addEventListener("resize", toggleOrderButton);
  toggleOrderButton();

  const langMenu = document.getElementById("language-menu");
  const orderMenu = document.getElementById("order");
  const openLang = document.getElementById("open-language");
  const closeLang = document.getElementById("close-language");
  const closeOrder = document.getElementById("close-order");

  function closeAllSubmenus() {
    document.body.classList.remove("no-scroll");
    langMenu.classList.remove("active");
    orderMenu.classList.remove("active");
  }

  openLang.addEventListener("click", function (e) {
    e.preventDefault();
    closeAllSubmenus();
    langMenu.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  closeLang.addEventListener("click", function (e) {
    e.preventDefault();
    langMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });


  closeOrder.addEventListener("click", function (e) {
    e.preventDefault();
    orderMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
    orderButton.classList.remove("hidden");
  });

  const openOrderButtons = document.querySelectorAll(".open-order");

  openOrderButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      closeAllSubmenus();
      orderMenu.classList.add("active");
      document.body.classList.add("no-scroll");
      orderButton.classList.add("hidden");
    });
  });

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


  const tabs = document.querySelectorAll(".order__tab");
  const contents = document.querySelectorAll(".order__content");

  function activateTab(tabNumber) {
    tabs.forEach(t => t.classList.remove("order__tab--active"));

    contents.forEach(c => c.classList.remove("active"));

    document.querySelectorAll(`.order__tab[data-tab="${tabNumber}"]`)
      .forEach(tab => tab.classList.add("order__tab--active"));

    const content = document.getElementById(`content${tabNumber}`);
    if (content) content.classList.add("active");
  }

  tabs.forEach(tab => tab.addEventListener("click", e => {
    e.preventDefault();
    activateTab(tab.dataset.tab);
  }));

  const nextToPay = document.getElementById("next-to-pay");
  if (nextToPay) {
    nextToPay.addEventListener("click", e => {
      e.preventDefault();
      const form1 = document.querySelector("#content1 .form");
      if (!form1.checkValidity()) { form1.reportValidity(); return; }
      activateTab(2);
    });
  }

  const nextToComplete = document.getElementById("next-to-complete");
  if (nextToComplete) {
    nextToComplete.addEventListener("click", e => {
      e.preventDefault();
      const form2 = document.querySelector("#content2 .form");
      if (!form2.checkValidity()) { form2.reportValidity(); return; }
      activateTab(3);
    });
  }

  activateTab(1);

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
