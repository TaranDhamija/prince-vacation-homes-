import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PremiumPropertyCard } from "./PremiumPropertyCard";

import "swiper/css";
import "swiper/css/navigation";

interface Property {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  bookingUrl: string;
}

interface FeaturedPropertiesCarouselProps {
  properties: Property[];
}

export function FeaturedPropertiesCarousel({ properties }: FeaturedPropertiesCarouselProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={32}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="!pb-4"
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <PremiumPropertyCard {...property} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#C2A875] hover:bg-[#C2A875] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous properties"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#C2A875] hover:bg-[#C2A875] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next properties"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
