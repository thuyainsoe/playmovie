/* eslint-disable @typescript-eslint/ban-ts-comment */
import poster1 from "@/assets/movie/poster1.png";
import { StarIcon } from "@/components/Icon";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import SlideNextButton from "@/components/SlideNextButton";
import SlidePrevButton from "@/components/SlidePrevButton";

const Home = () => {
  const swiper = useSwiper();

  console.log(swiper, "swiper");

  return (
    <div className="main-container ">
      <div className="w-full bg-black2 py-[10px] px-[10px] flex flex-col gap-[20px] rounded-[4px] relative">
        <h3 className="text-xl relative">Content at random</h3>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
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
                spaceBetween: 20,
              },
              540: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              1284: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Navigation]}
            navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
            className="mySwiper !pt-[55px] mt-[-55px]"
          >
            {[...Array(15)].map((_, index) => (
              <SwiperSlide
                key={index}
                className="shadow-sm shadow-white rounded-[4px] cursor-pointer"
              >
                <div>
                  <img
                    className="aspect-[109_/_152] object-cover"
                    src={poster1}
                    alt=""
                  />
                  <div className="w-full p-[5px]">
                    <p className="line-clamp-1 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius, sequi!
                    </p>
                    <span className="text-xs text-textgray2 font-bold">
                      2019
                    </span>
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
            <div className="absolute top-0 right-0">
              <SlidePrevButton />
              <SlideNextButton />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
