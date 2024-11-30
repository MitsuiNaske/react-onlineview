import { categories } from "../constants/Index";

const Home = () => {
  return (
    <div className="h-screen pt-5">
      <div className="h-3/4 w-full flex justify-center">
        <div className="min-w-max min-h-max p-5 cursor-pointer flex text-center">
          <img src="/src/assets/slider/sliderback.svg" alt="" />
        </div>
        <div className="w-2/3 h-full flex justify-center">
          <img
            src="/src/assets/afisha-img/noimg.png"
            className="h-full w-full"
          />
          <div className="flex justify-end items-end h-full pr-7 pb-5">
            <div className="flex gap-2 z-20 absolute pr-5 text-base items-center text-nowrap">
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
      </div>

      <div>
        <ul className="flex flex-wrap w-full justify-center pt-10 gap-2">
          {categories.map((item, index) => (
            <li
              key={index}
              className="bg-[#1B1A1D] px-4 py-4 rounded-md shadow-md"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
