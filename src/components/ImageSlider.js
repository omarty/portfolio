import React, { useEffect, useState } from "react";

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div style={styles.sliderContainer}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  sliderContainer: {
    width: "100%",
    height: "300px", // tu peux ajuster selon ton design
    overflow: "hidden",
    position: "relative",
    borderRadius: "10px", // optionnel
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // respecte ton style
    transition: "opacity 0.5s ease-in-out",
  },
};

export default ImageSlider;
