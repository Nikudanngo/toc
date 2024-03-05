"use client";

import Image from "next/image";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

type CardSwipeProps = {
  texts: string[];
  image: string[];
};

export const CardSwipe = ({ texts, image }: CardSwipeProps) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-44 h-auto sm:w-52 md:w-64"
      >
        {texts.map((text, index) => (
          <SwiperSlide key={index} className="relative text-white font-bold">
            <p className="absolute bg-black text-xs sm:text-base md:text-base">
              {text}
            </p>
            <Image
              className="w-full"
              width={300 * 0.3}
              height={500 * 0.3}
              src={image[index]}
              alt={`slide${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
