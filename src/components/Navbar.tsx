const navData = ["Home", "Movies", "Series", "How To Download", "Contact Us"];

const Navbar = () => {
  return (
    <nav className="main-container h-[60px] mb-[10px]">
      <div className="w-full flex items-center justify-between h-full">
        {/* logo */}
        <div className="text-lg font-bold">
          Play <span className="text-bgred">Movie</span>
        </div>
        {/* nav links */}
        <ul className="flex items-center  h-full gap-[5px]">
          {navData.map((nav, index) => (
            <li
              key={index}
              className={`h-full flex items-center px-[15px] rounded-[4px] text-textgray2 hover:bg-black2 hover:text-white transition-all duration-150 
                cursor-pointer ${index === 0 && "text-white bg-black2"}`}
            >
              {nav}
            </li>
          ))}
        </ul>
        {/* search */}
        <div>
          <button className="bg-bgred w-fit px-[15px] py-[5px] rounded-[4px] text-base">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
