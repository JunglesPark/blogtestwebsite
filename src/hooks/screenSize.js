import { useEffect, useState } from "react";

const screenSize = () => {
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null;
  const [screenSizeWidth, setScreenSizeWidth] = useState(
    window.screen.innerWidth ? window.screen.innerWidth : 1280
  );
  const handleResize = () => {
    setScreenSizeWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return screenSizeWidth;
};

export { screenSize };
