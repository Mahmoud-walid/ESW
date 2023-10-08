const navBar = document.querySelector("nav");

export const callback = function (entries) {
  const [entry] = entries;
  console.log(entry);
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

