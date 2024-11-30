import { afisha, cardbox } from "../constants/Index";
import { useState, useEffect } from "react";

const Catalog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(240);
  const [visibleSlides, setVisibleSlides] = useState(5);

  useEffect(() => {
    const updateDimensions = () => {
      const sliderContainer = document.querySelector(
        ".pt-10.flex.flex-nowrap.gap-5.overflow-hidden.w-full"
      );
      const containerWidth = sliderContainer ? sliderContainer.clientWidth : 0;
      const newVisibleSlides = Math.floor(containerWidth / 260);
      const newCardWidth = Math.floor(containerWidth / newVisibleSlides - 19);
      setCardWidth(newCardWidth);
      setVisibleSlides(newVisibleSlides);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const maxIndex = Math.max(0, cardbox.length - visibleSlides);

  const nextSlide = () => {
    if (currentSlide < maxIndex) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="flex-col flex w-full">
          <h3 className="pb-16 pl-10 text-2xl font-bold">Топ-4 на BUZZ</h3>
          <div className="flex flex-wrap justify-center gap-12 ">
            {afisha.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-end rounded-2xl bg-custom-gradient min-w-80 h-40 overflow-visible pr-5"
              >
                <span className="absolute text-[250px] min-w-full min-h-full font-bold text-gray-800 -left-2 bottom-1 z-10">
                  <img src={item.span} />
                </span>

                <img
                  src={item.img}
                  alt=""
                  className="min-w-2/3 h-32 object-cover z-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center overflow-x-hidden gap-7 pt-14">
        <img src="/src/assets/kino-title/kino-title.svg" className="size-96" />
        <img
          src="/src/assets/kino-title/kino-title-1.svg"
          className="size-3/5"
        />
        <img
          src="/src/assets/kino-title/kino-title-2.svg"
          className="size-96"
        />
      </div>

      <div className="flex items-center overflow-x-hidden w-full">
        <div
          className="min-w-max min-h-max p-5 cursor-pointer"
          onClick={prevSlide}
        >
          <img src="/src/assets/slider/sliderback.svg" alt="Previous Slide" />
        </div>

        <div className="pt-10 flex flex-nowrap overflow-hidden w-full gap-5">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-5"
            style={{
              transform: `translateX(-${currentSlide * (cardWidth + 20)}px)`,
            }}
          >
            {cardbox.map((item, index) => (
              <div
                key={index}
                className="bg-[#181A1E] text-white rounded-lg shadow"
                style={{
                  minWidth: `${cardWidth}px`,
                  maxWidth: `${cardWidth}px`,
                  height: `${cardWidth * 1}px`,
                }}
              >
                <div className="pl-5 pt-5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="min-w-max min-h-max p-5 cursor-pointer"
          onClick={nextSlide}
        >
          <img src="/src/assets/slider/sliderforward.svg" alt="Next Slide" />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
