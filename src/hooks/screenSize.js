import { useEffect, useState } from "react";

const screenSize = () => {
  const [screenSizeWidth, setScreenSizeWidth] = useState(
    window.screen.innerWidth
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