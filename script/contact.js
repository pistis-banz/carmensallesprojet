const sectionCouverture = document.querySelector("#section-couverture");

window.addEventListener("load", function () {
  // manipulation de la timeline des animations de la section couverture
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(body, 1, { opacity: 0, ease: "power2.out" }, 0.5);
  TL.staggerFrom(
    sectionCouverture,
    0.5,
    { right: "-100%", opacity: 0, ease: "power2.out" },
    0.5
  );
  TL.play();
});
