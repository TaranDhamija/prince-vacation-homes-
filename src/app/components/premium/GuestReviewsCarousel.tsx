import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface Review {
  id: number;
  guestName: string;
  rating: number;
  reviewText: string;
  location?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    guestName: "Amanda.",
    rating: 5,
    reviewText: "We enjoyed our stay in Brookswood. Great location a minute away from groceries, gas, restaurants & stores. House was comfortable, great kitchen & living room area. Comfy couch with cozy fireplace & lounge area.",
    location: "Stayed in Langley",
  },
  {
    id: 2,
    guestName: "Natalie.",
    rating: 4.5,
    reviewText: "The house was spotless, enough accommodation and beautifully decorated. The host is very responsive. Thanks Prince",
    location: "Stayed in Langley",
  },
  {
    id: 3,
    guestName: "Puja.",
    rating: 5,
    reviewText: "we had a good time staying at Prince's place. it was very big spacious and kid friendly. he was very responsive and communicated clearly so it all went smoothly. will recommend his place to everyone considering it.",
    location: "Stayed in Langley",
  },
  {
    id: 4,
    guestName: "Arjun.",
    rating: 5,
    reviewText: "Exceeded all expectations! The property was even better than the photos. Highly recommend for anyone looking for luxury and comfort.",
    location: "Stayed in Langley",
  },
  {
    id: 5,
    guestName: "Janan.",
    rating: 5,
    reviewText: "Very nice place. The hot tub and fire pit were amazing. Great location in Langley. The hosts were very friendly and responsive too.",
    location: "Stayed in Langley",
  },
  {
    id: 6,
    guestName: "Ritika.",
    rating: 4.5,
    reviewText: "Wonderful stay! The home was spacious, clean, and beautifully decorated. Great location and very responsive hosts.",
    location: "Stayed in Langley",
  },
  {
    id: 7,
    guestName: "Chris.",
    rating: 5,
    reviewText: "This place felt like home. Every detail was thoughtfully planned.",
    location: "Stayed in Langley",
  },
  {
    id: 8,
    guestName: "Arjun.",
    rating: 5,
    reviewText: "A truly luxurious experience. The property is gorgeous. We'll definitely be back.",
    location: "Stayed in Langley",
  },
  {
    id: 9,
    guestName: "Divya M.",
    rating: 5,
    reviewText: "From booking to checkout, everything was seamless. The property exceeded our expectations in every way. Highly recommended!",
    location: "Stayed in Langley",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <Star
              key={index}
              className="w-4 h-4 fill-[#C2A875] text-[#C2A875]"
            />
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <div key={index} className="relative w-4 h-4">
              <Star className="w-4 h-4 text-[#F5EFE5] fill-[#F5EFE5] absolute" />
              <div className="overflow-hidden w-2 absolute left-0">
                <Star className="w-4 h-4 fill-[#C2A875] text-[#C2A875]" />
              </div>
            </div>
          );
        } else {
          return (
            <Star
              key={index}
              className="w-4 h-4 text-[#F5EFE5] fill-[#F5EFE5]"
            />
          );
        }
      })}
    </div>
  );
};

export function GuestReviewsCarousel() {
  return (
    <section className="py-20 bg-[#FBF6EF]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#3A2F25] mb-4">
            Every Stay Has a Story
          </h2>
          <p className="text-xl text-[#7A6A5A] max-w-2xl mx-auto">
            But don't just take our word for it — see what our guests have to say.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            loopAdditionalSlides={2}
            speed={600}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            navigation={{
              prevEl: ".review-button-prev-custom",
              nextEl: ".review-button-next-custom",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="!pb-4"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Star Rating */}
                  <div className="mb-4">
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Review Text */}
                  <p className="text-[#7A6A5A] leading-relaxed mb-6 flex-grow">
                    "{review.reviewText}"
                  </p>

                  {/* Guest Info */}
                  <div>
                    <p className="text-[#3A2F25] font-semibold mb-1">
                      {review.guestName}
                    </p>
                    {review.location && (
                      <p className="text-sm text-[#7A6A5A]">{review.location}</p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="review-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#C2A875] hover:bg-[#C2A875] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="review-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#C2A875] hover:bg-[#C2A875] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
