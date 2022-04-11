const logo = document.querySelector("#section-couverture .logo");
const title1 = document.querySelector("#section-couverture h1");
const title2 = document.querySelector("#section-couverture h4");

window.addEventListener("load", function () {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(body, 2, { opacity: 0, ease: "power2.out" }, 1);
  TL.staggerFrom(
    title1,
    2,
    { left: "-100%", opacity: 0, ease: "power2.out" },
    1
  );
  TL.staggerFrom(
    title2,
    1,
    { left: "100%", opacity: 0, ease: "power2.out" },
    1,
    "-=1"
  );
  TL.play();
});
