import React, { useEffect, useState } from "react";
import styled from "styled-components";
const SlideshowContainer = styled.div`
  position: relative;
  margin: auto;
  box-shadow: 6px 6px 105px 51px rgba(0, 0, 0, 0.75);
`;
const SlideshowImage = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;
const Slideshow = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      if (slides.length === 0) {
        return;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > slides.length) {
          newIndex = 1;
        }
        return newIndex;
      });
      if (slideIndex !== 0) {
        slides[slideIndex - 1].style.display = "block";
      }
    };
    const interval = setInterval(showSlides, 2000);
    return () => clearInterval(interval);
  }, [slideIndex]);
  return (
    <div>
      <SlideshowContainer
        className="restaurantImagesCover"
        style={{ backgroundImage: `url(${props.imageUrls[2]})` }}
      >
        <SlideshowImage
          className={`mySlides fade ${slideIndex === 1 ? "active" : ""}`}
          id="slide1"
          style={{ backgroundImage: `url(${props.imageUrls[0]}) ` }}
        ></SlideshowImage>
        <SlideshowImage
          className={`mySlides fade ${slideIndex === 2 ? "active" : ""}`}
          id="slide2"
          style={{ backgroundImage: `url(${props.imageUrls[1]}) ` }}
        ></SlideshowImage>
        <SlideshowImage
          className={`mySlides fade ${slideIndex === 3 ? "active" : ""}`}
          id="slide3"
          style={{ backgroundImage: `url(${props.imageUrls[2]}) ` }}
        ></SlideshowImage>
      </SlideshowContainer>
      <br />
    </div>
  );
};

export default Slideshow;
