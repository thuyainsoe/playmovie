/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import SlideNextButton from "@/components/SlideNextButton";
import SlidePrevButton from "@/components/SlidePrevButton";
import { images } from "@/assets/assets";
import { PlayIcon, StarIcon } from "./Icon";

const ContentAtRandom = () => {
  return (
    <div className="w-full bg-black2 p-[10px] md:p-[20px] flex flex-col gap-[20px] rounded-[4px] relative">
      <h3 className="text-xl relative">Content at random</h3>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            540: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1284: {
              slidesPerView: 7,
              spaceBetween: 15,
            },
          }}
          modules={[Autoplay, Navigation]}
          navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
          className="mySwiper !pt-[55px] mt-[-55px]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className=" rounded-[4px] cursor-pointer">
              <div>
                <div className="w-full h-auto relative group">
                  <img
                    className="aspect-[109_/_152] w-full object-cover"
                    src={image}
                    alt="poster"
                  />
                  <div className="bg-black/70 absolute top-0 left-0 w-full h-full z-[100] opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center">
                    <div className="w-[30px]">
                      <PlayIcon />
                    </div>
                  </div>
                </div>
                <div className="w-full p-[5px]">
                  <p className="line-clamp-1 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, sequi!
                  </p>
                  <span className="text-xs text-textgray2 font-bold">2019</span>
                  <div className="flex items-center gap-[3px]">
                    <span className="block w-[15px] h-[15px]">
                      <StarIcon />
                    </span>
                    <span className="text-xs">5.8</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute top-[10px] flex items-center gap-[10px] right-0">
            <SlidePrevButton />
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ContentAtRandom;
