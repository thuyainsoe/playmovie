import ads1 from "@/assets/ads/ads1.png";
import ContentAtRandom from "@/components/ContentAtRandom";
import FiveColsCard from "@/components/FiveColsCard";

const movieCategories = [
  "Action",
  "Comedy",
  "Drama",
  "Science",
  "Horror",
  "Romance",
  "Fantasy",
  "Thriller",
  "Animation",
  "Documentary",
];

const Home = () => {
  return (
    <div className="main-container">
      <ContentAtRandom />
      {/* Movies */}
      <div className="w-full grid grid-cols-4 gap-[20px] mt-[20px]">
        {/* left section */}
        <div className="col-[1/5] md:col-[1/4] w-full flex flex-col gap-[20px]">
          <FiveColsCard title="Movies" />
          <FiveColsCard title="Series" />
        </div>
        {/* right section */}
        <div className="col-[4/5] hidden md:block">
          {/* category */}
          <div className="mb-[20px] p-[20px] bg-black2 flex flex-col items-start gap-[20px]">
            <h3 className="text-xl relative">Categories</h3>
            <ul className="list-disc list-inside  flex flex-col gap-[10px] text-sm">
              {movieCategories.map((item, index) => (
                <li
                  className="hover:text-bgred cursor-pointer transition-all duration-200"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img className="w-full h-auto" src={ads1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
