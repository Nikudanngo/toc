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
        className="w-80 h-96"
      >
        {texts.map((text, index) => (
          <SwiperSlide key={index} className="relative text-white font-bold">
            <p className="absolute bg-black">{text}</p>
            <Image
              width={300}
              height={500}
              src={image[index]}
              alt={`slide${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
