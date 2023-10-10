import { callback } from "./navBar";
import scrollToUp from "./scrollToUp";

const controlMainLoader = function () {
  window.addEventListener("load", () => {
    const mainLoader = document.querySelector(".main-loader");
    mainLoader.classList.add("main-loader-hidden");
    mainLoader.addEventListener("transitionend", () => {
      mainLoader.remove();
    });
  });
};

const controlMenuMobileBtn = function () {
  document.querySelector(".menuBtn").addEventListener("click", () => {
    document.querySelector(".mobileMenu").classList.toggle("hidden");
  });
};

const controlHeader = function () {
  const header = document.querySelector(".header");
  const navObserver = new IntersectionObserver(callback, {
    root: null,
    threshold: 0,
  });
  navObserver.observe(header);
};

const controlScrollToUp = function () {
  const header = document.querySelector(".header");
  const navObserver = new IntersectionObserver(callback, {
    root: null,
    threshold: 0,
  });
  navObserver.observe(header);
  scrollToUp.init();
};

const init = () => {
  controlMenuMobileBtn();
  controlMainLoader();
  controlHeader();
  controlScrollToUp();
};
init();
