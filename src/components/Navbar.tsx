import { useState } from "react";
import { SearchIcon } from "./Icon";

const navData = ["Home", "Movies", "Series", "How To Download", "Contact Us"];

const Navbar = () => {
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
  const [isShowNav, setIsShowNav] = useState<boolean>(false);

  const handleClickIcon = () => {
    setIsShowSearch(true);
  };

  return (
    <nav className="main-container h-[60px] mb-[10px]">
      <div className="w-full flex items-center justify-between h-full">
        {/* logo */}
        <div className="text-xl font-bold">
          Play <span className="text-bgred">Movie</span>
        </div>
        {/* nav links */}
        <ul className="items-center  h-full gap-[5px] hidden md:flex">
          {navData.map((nav, index) => (
            <li
              key={index}
              className={`h-full text-sm flex items-center px-[15px] rounded-[4px] text-textgray2 hover:bg-black2 hover:text-white transition-all duration-150 
                cursor-pointer ${index === 0 && "text-white bg-black2"}`}
            >
              {nav}
            </li>
          ))}
        </ul>
        {/* search */}
        <div
          className="min-w-[18px] cursor-pointer hidden md:block"
          onClick={() => {
            handleClickIcon();
          }}
        >
          <SearchIcon />
        </div>
        {/* lines */}
        <div
          className="flex flex-col gap-[5px] md:hidden z-[900]"
          onClick={() => setIsShowNav((prev) => !prev)}
        >
          <span className="w-[20px] h-[2px] bg-bgred rounded-sm"></span>
          <span className="w-[20px] h-[2px] bg-bgred rounded-sm"></span>
          <span className="w-[20px] h-[2px] bg-bgred rounded-sm"></span>
        </div>

        {isShowNav && (
          <div className="w-full min-h-[100%] bg-black2 fixed top-0 left-0 z-[800]">
            <div className="text-xl font-bold h-[60px] flex items-center px-[10px]">
              Play <span className="text-bgred">&nbsp;Movie</span>
            </div>
            <div className="w-full px-[10px]">
              <input
                type="text"
                className="w-full px-[10px] h-[40px]"
                placeholder="Search movie.."
              />
            </div>
            <ul className="flex flex-col">
              {navData.map((item, index) => (
                <li
                  key={index}
                  className="px-[10px] h-[40px] flex items-center"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {isShowSearch && (
        <div
          className="fixed top-0 hidden  left-0 w-full h-full md:flex items-center justify-center bg-black/70 z-[500]"
          onClick={() => setIsShowSearch(false)}
        >
          <div
            className="w-[50%] flex items-center justify-center z-[600] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              className="w-full h-[60px] px-[20px] rounded-sm outline-none text-black"
              type="text"
              placeholder="Search Movie"
            />
            <span className="block absolute right-[20px] top-1/2 translate-y-[-50%] w-[20px] cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="black"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                />
              </svg>
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
