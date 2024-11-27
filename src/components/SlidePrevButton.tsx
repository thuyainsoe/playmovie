import { useSwiper } from "swiper/react";
import { PrevIcon } from "./Icon";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className="w-[30px] h-[30px] bg-white rounded-[50%] relative z-[200]"
      onClick={() => swiper.slidePrev()}
    >
      <PrevIcon />
    </button>
  );
}
