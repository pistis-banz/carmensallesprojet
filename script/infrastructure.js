const article = document.querySelector("#section-couverture article");
const img = document.querySelector("#section-couverture img");
const sections = document.querySelectorAll(".sections");
window.addEventListener("load", function () {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(body, 1, { opacity: 0, ease: "power2.out" }, 0.5);
  TL.staggerFrom(
    article,
    1,
    { left: "-100%", opacity: 0, ease: "power2.out" },
    1
  );
  TL.staggerFrom(
    img,
    1,
    { left: "100%", opacity: 0, ease: "power2.out" },
    1,
    "-=1"
  );
  TL.staggerFrom(
    sections,
    1,
    { left: "100%", opacity: 0, ease: "power2.out" },
    1,
    "-=1"
  );

  TL.play();
});
