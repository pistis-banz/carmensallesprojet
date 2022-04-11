/*animation de defilement des sections */

const sections = document.querySelectorAll(".sections");

let options = {
  root: null,
  rootMargin: "-10% 0px",
  threshold: 0.2,
};

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.right = "0%";
      entry.target.style.alignItems = "center";
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);

sections.forEach((section) => {
  observer.observe(section);
});
