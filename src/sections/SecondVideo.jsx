import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const SecondVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".lucia", {
      marginTop: "-60vh",
      opacity: 0,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lucia",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(".lucia", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  });

  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          src="/videos/output2.mp4"
          muted
          playsInline
          preload="auto"
          className="size-full object-cover second-vd"
          style={{
            objectPosition: "15% 0%",
          }}
        ></video>
      </div>
    </section>
  );
};

export default SecondVideo;
