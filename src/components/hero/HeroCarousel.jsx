import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import hero1 from "@/assets/hero/hero1.jpg";
import hero2 from "@/assets/hero/hero2.jpg";
import hero3 from "@/assets/hero/hero3.jpg";
import hero4 from "@/assets/hero/hero4.jpg";
import hero5 from "@/assets/hero/hero5.jpg";
import hero6 from "@/assets/hero/hero6.jpg";

const heroSlides = [
  {
    src: hero1,
    alt: "Luxury vacation home interior",
  },
  {
    src: hero2,
    alt: "Premium vacation rental experience",
  },
  {
    src: hero3,
    alt: "Elegant vacation property",
  },
  {
    src: hero4,
    alt: "Luxury vacation home exterior",
  },
  {
    src: hero5,
    alt: "Premium vacation rental amenities",
  },
  {
    src: hero6,
    alt: "Exclusive vacation property",
  },
];

export function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop
      speed={2000}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      allowTouchMove
      className="w-full h-full hero-swiper"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={slide.src}>
          <div className="w-full h-full">
            <img
              src={slide.src}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
