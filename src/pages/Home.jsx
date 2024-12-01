import { categories, homeItems } from "../constants/Index";
import { useState } from "react";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? homeItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === homeItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="h-screen pt-5">
      <div className="h-3/4 w-full flex justify-center overflow-x-hidden">

        <div
          className="min-w-max min-h-max p-5 cursor-pointer flex text-center z-10"
          onClick={handlePrev}
        >
          <img src="/src/assets/slider/sliderback.svg" alt="" />
        </div>

        <div className="w-2/3 h-full flex justify-center relative">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-20"
            style={{
              transform: `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 5}rem))`,
            }}
          >
            {homeItems.map((items, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 ">
                <img
                  src={items.img}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end items-end h-full ">
            <div className="flex gap-2 z-10 absolute pr-5 text-base items-center text-nowrap pb-5">
              <button className="bg-[#FFBE98] rounded-sm py-2 px-5">
                Попробовать бесплатно
              </button>
              <button className="bg-[#FFBE98] rounded-sm py-2 px-5">
                Трейлер
              </button>
              <button className="w-10 h-10 rounded-xl bg-gray-700/20 flex justify-center items-center">
                <img src="/src/assets/home/favorite.svg" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="min-w-max min-h-max p-5 cursor-pointer flex text-center z-10"
          onClick={handleNext}
        >
          <img src="/src/assets/slider/sliderforward.svg" alt="" />
        </div>

      </div>

      <div>
        <ul className="flex flex-wrap w-full justify-center pt-10 gap-2">
          {categories.map((item, index) => (
            <li
              key={index}
              className="bg-[#1B1A1D] px-4 py-4 rounded-md shadow-md flex justify-center items-center gap-2"
            >
              <img src={item.icon} />
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
