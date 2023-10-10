const ScrollToUp = function () {
  this.scrollToTopBtn = null; // Initialize to null

  this.init = function () {
    this.scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    this.rootElement = document.documentElement;
    this.setupScrollToTop();
  };

  this.setupScrollToTop = function () {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    this.scrollToTopBtn.addEventListener("click", this.scrollTop.bind(this));
  };

  this.handleScroll = function () {
    const scrollTotal =
      this.rootElement.scrollHeight - this.rootElement.clientHeight;
    if (this.rootElement.scrollTop / scrollTotal > 0.15) {
      this.scrollToTopBtn.classList.remove("hidden");
    } else {
      this.scrollToTopBtn.classList.add("hidden");
    }
  };

  this.scrollTop = function () {
    this.rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};

export default new ScrollToUp();
