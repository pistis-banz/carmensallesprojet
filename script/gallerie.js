// animation de la section couverture

const article = document.querySelector("#section-couverture article");
const img = document.querySelectorAll("#section-couverture img");
window.addEventListener("load", function () {
  // manipulation de la timeline des animations de la section couverture
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
    0.5,
    { left: "100%", opacity: 0, ease: "power2.out" },
    0.5
  );

  TL.play();
});
