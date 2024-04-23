"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slidesImageText = [
  {
    text: "竹から生まれた\n自然の歯ブラシ",
    image: "/slides/slide1.jpg",
  },
  {
    text: "使い捨てプラスチック\nを減らすために",
    image: "/slides/slide2.jpg",
  },
  {
    text: "竹歯ブラシ\nKAGUYA",
    image: "/slides/slide3.jpg",
  },
  {
    text: "そして願いを海へ\nThought of Oceans",
    image: "/slides/slide4.jpeg",
  },
];

const Slide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      slidesPerView={1}
      loop
      speed={1000}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    >
      {slidesImageText.map(({ text, image }, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-auto w-full max-w-7xl flex mx-auto">
            <Image
              src={image}
              width={1920 * 0.6}
              height={1038 * 0.6}
              priority
              alt="Slider Image ${index + 1}"
              className="w-full"
            />
            <span>
              <Image
                width={100}
                height={100}
                src="/logo.png"
                className="absolute top-4 sm:top-24 left-12 bg-white/25 rounded-full size-32 sm:size-52 md:size-64 lg:size-80"
                alt="logo"
              />
            </span>
            <span className="absolute bottom-4 sm:bottom-24 right-12 text-center">
              <h1 className="font-zen-maru-gothic text-base sm:text-xl md:text-4xl lg:text-6xl drop-shadow-2xl font-bold text-white whitespace-pre-line">
                {text}
              </h1>
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
