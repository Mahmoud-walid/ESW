const navBar = document.querySelector("nav");
const navBarContent = document.querySelector(".navContent");

export const callback = function (entries) {
  const [entry] = entries;
  //   console.log(entry);
  const isIntersecting = entry.isIntersecting;
  if (!isIntersecting) {
    navBar.classList.add(
      "stickyNavBar",
      "transition",
      "animated-element-fadeInDown"
    );
  } else {
    navBar.classList.add("transition");
    navBar.classList.remove("stickyNavBar", "animated-element-fadeInDown");
  }
};

export const navBarActive = function () {
  const hashUrl = window.location.hash;

  const links = navBarContent.querySelectorAll("a");
  links.forEach((link) => {
    link.classList.add("text-gray-300");
    link.classList.remove("bg-gray-900", "text-white");
  });

  const activeLink = navBarContent.querySelector(`a[href="${hashUrl}"]`);
  if (activeLink) {
    activeLink.classList.add("bg-gray-900", "text-white");
    activeLink.classList.remove("hover:bg-gray-700", "text-gray-300");
  }
};
