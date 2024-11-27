import { images } from "@/assets/assets";
import { StarIcon } from "./Icon";

type FiveColsCardProps = {
  title: string;
};
const FiveColsCard = ({ title }: FiveColsCardProps) => {
  return (
    <div className="w-full p-[10px] md:p-[20px] rounded-[4px] bg-black2 h-fit">
      <div className="w-full flex items-center justify-between mb-[20px]">
        <h3 className="text-xl relative">{title}</h3>
        <button className="text-sm w-fit px-[15px] py-[10px] bg-bgred text-white">
          See All
        </button>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-[15px] w-full">
        {images.map((image, index) => (
          <div key={index} className="w-full relative cursor-pointer">
            <div className="relative h-auto group">
              <img
                className="aspect-[138_/_194]  object-cover w-full"
                src={image}
                alt="poster"
              />
              <div
                className="hidden md:block py-[10px] absolute opacity-0 group-hover:opacity-[100] top-1/2 left-0 p-[15px] shadow-sm shadow-white/50
                  translate-y-[-50%] w-[calc(200%+15px)] h-[100%] bg-bgcolor z-[-1] group-hover:z-[100] transition-all duration-300 border-l-[2px] border-bgred"
              >
                <h3 className="text-base font-bold mb-[15px]">Prison Break</h3>
                <div className="line-clamp-3 text-sm text-textgray2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  quas itaque corrupti inventore commodi magni nemo amet
                  voluptates? Nam eum officiis molestias ratione sed minima,
                  corrupti quibusdam qui quaerat atque saepe odio eveniet nisi
                  repellendus temporibus possimus voluptatum illum velit.
                </div>
                <div className="mt-[15px] flex items-center gap-[5px]">
                  <span className="text-xs w-fit px-[10px] py-[5px] bg-bgred rounded-full flex items-center">
                    Movie
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between items-center gap-[10px] mt-[5px] p-[5px]">
              <span className="text-gray2 line-clamp-2 text-xs  font-bold w-full">
                Lorem ipsum dolor sit.
              </span>
              <div className="flex items-center gap-[3px]">
                <span className="block w-[15px] h-[15px]">
                  <StarIcon />
                </span>
                <span className="text-xs">5.8</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveColsCard;
