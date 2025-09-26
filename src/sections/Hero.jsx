import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useMaskSettings } from "../../constants";
import ComingSoon from "./ComingSoon";

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskSize, maskPos } =
    useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });
    gsap.set(".white-overlay", { opacity: 0 });
    gsap.set(".entrance-message", { marginTop: "0vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=200%",
        scrub: 2.5,
        pin: true,
      },
    });

    tl.to(".fade-out", { opacity: 0, scale: 0.95, ease: "power1.inOut" })
      .to(".scale-out", { scale: 1, ease: "power1.inOut" }, "<")
      .to(
        ".mask-wrapper",
        {
          maskSize: maskSize,
          maskPosition: maskPos,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(".white-overlay", { opacity: 1 }, "<")
      .to(".entrance-message", {
        duration: 1,
        ease: "power1.inOut",
        maskImage:
          "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
      })
      .to(".entrance-message .mask-wrapper", {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
      });
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out "
        />
        <div className="white-overlay" />
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;
