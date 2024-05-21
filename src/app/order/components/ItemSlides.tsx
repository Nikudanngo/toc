"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = (props: { images: string[] }) => {
  const { images } = props;
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      slidesPerView={1}
      loop
      speed={500}
      pagination={{
        clickable: true,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            width={1920 * 0.6}
            height={1038 * 0.6}
            priority
            alt={`Slider Image ${index + 1}`}
            className="w-full object-cover h-60 md:h-96"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
