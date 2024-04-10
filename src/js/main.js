import * as flsFunctions from "./modules/functions.js";
import Swiper from "swiper";
import { Scrollbar } from "swiper/modules";
import { slide } from "./data.js";

flsFunctions.isWebp();

const contact = document.querySelector(".call");
const contactPopup = document.querySelector(".popup");
const wrapper = document.querySelector(".wrapper");
const close = document.querySelector(".close");
const cookies = document.querySelector(".accept");
const slider = document.querySelector(".swiper-wrapper");

contact.onclick = function () {
  contactPopup.classList.add("show");
  wrapper.classList.add("blur");
};

close.onclick = () => {
  contactPopup.classList.remove("show");
  wrapper.classList.remove("blur");
};

cookies.onclick = () => {
  document.querySelector(".cookies").style.display = "none";
};

const createSlide = (slide) => {
  return `
  <div class="swiper-slide">
  <div class="swiper-content">
    <div class="product">
      <h2>${slide.title1}</h2>
      <p>
      ${slide.text1}
      </p>
      <button class="button">Продукція</button>
    </div>
    <div class="img">
      <img src=${slide.img} loading="lazy" alt="" />
    </div>
    <div class="about">
      <p>${slide.text2}</p>
      <h5>${slide.title2}</h5>
      <button class="button">Детальніше</button>
    </div>
  </div>
</div>
  `;
};

const innerSlide = () => {
  let slideHTML = "";

  slide.forEach((slide) => {
    slideHTML += createSlide(slide);
  });

  slider.innerHTML = slideHTML;
};

innerSlide();

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 400,
  spaceBetween: 0,

  modules: [Scrollbar],

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const phoneInput = document.getElementById("phone");
const inpTel = document.querySelector(".phone");
const submit = document.querySelector(".submit");
const form = document.querySelector(".form");
const succes = document.querySelector(".succes");

function addPrefix() {
  if (!phoneInput.value.startsWith("+380-")) {
    phoneInput.value = "+380-" + phoneInput.value;
  }
}

function formatPhoneNumber() {
  var formattedNumber = "";
  var numbers = phoneInput.value.replace(/\D/g, "");
  var hasPlus = phoneInput.value.startsWith("+");

  if (hasPlus) {
    formattedNumber += "+";
  }

  for (var i = 0; i < numbers.length; i++) {
    if (i === 3 || i === 5 || i === 8 || i === 10) {
      formattedNumber += "-";
    }
    formattedNumber += numbers[i];
  }
  phoneInput.value = formattedNumber;
}

phoneInput.addEventListener("blur", function () {
  if (phoneInput.value.replace(/\D/g, "").length < 12) {
    inpTel.classList.add("error");
  } else {
    inpTel.classList.remove("error");
  }
});

submit.onclick = (e) => {
  if (phoneInput.value.replace(/\D/g, "").length == 0) {
  } else if (phoneInput.value.replace(/\D/g, "").length < 12) {
    e.preventDefault();
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.display = "none";
  succes.style.display = "block";
  setTimeout(() => {
    e.target.submit();
  }, 1500);
});

phoneInput.addEventListener("focus", addPrefix);
phoneInput.addEventListener("input", formatPhoneNumber);

const burger = document.querySelector(".header__burger");
const list = document.querySelector(".header__list");

burger.onclick = () => {
  burger.classList.toggle("active");
  list.classList.toggle("show");
  document.body.classList.toggle("hide");
  document.querySelector(".number").classList.toggle("show");
  document.querySelector(".language").classList.toggle("show");
};
