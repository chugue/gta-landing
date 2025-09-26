import { useMediaQuery } from "react-responsive";

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1025 });

  if (isMobile) {
    console.log("mobile", isMobile);
    return {
      initialMaskPos: "50% 20%",
      initialMaskSize: "2900% 1600%",
      maskPos: "50% 14.5%",
      maskSize: "31% 31%",
    };
  }

  if (isTablet) {
    console.log("tablet", isTablet);
    return {
      initialMaskPos: "50% 20%",
      initialMaskSize: "2900% 2150%",
      maskPos: "50% 18%",
      maskSize: "23.5% 23.5%",
    };
  }
  console.log("desktop", true);

  return {
    initialMaskPos: "50% 20%",
    initialMaskSize: "3600% 3600%",
    maskPos: "50% 17%",
    maskSize: "18% 17%",
  };
};
