import { callback } from "./model";

window.addEventListener("load", () => {
  const mainLoader = document.querySelector(".main-loader");
  mainLoader.classList.add("main-loader-hidden");

  mainLoader.addEventListener("transitionend", () => {
    mainLoader.remove();
  });
});

document.querySelector(".menuBtn").addEventListener("click", () => {
  document.querySelector(".mobileMenu").classList.toggle("hidden");
});

const header = document.querySelector(".header");

const navObserver = new IntersectionObserver(callback, {
  root: null,
  threshold: 0,
});

navObserver.observe(header);
