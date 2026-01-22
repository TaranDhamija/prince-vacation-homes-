import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import hero1 from "@/assets/hero/hero1.jpg";
import hero2 from "@/assets/hero/hero2.jpg";
import hero3 from "@/assets/hero/hero3.jpg";
import hero4 from "@/assets/hero/hero4.jpg";
import hero5 from "@/assets/hero/hero5.jpg";
import hero6 from "@/assets/hero/hero6.jpg";

const testimonialImages = [hero1, hero2, hero3, hero4, hero5, hero6];

const reviews = [
  {
    text: "The attention to detail in every property we've stayed at has been exceptional. Truly a home away from home.",
    author: "Sarah .",
  },
  {
    text: "Exceeded all expectations! The property was even better than the photos. Highly recommend for anyone looking for luxury and comfort.",
    author: "Arjun.",
  },
];

export function GuestTrustSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % testimonialImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#FBF6EF]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-4xl lg:text-5xl text-[#3A2F25] mb-8">
              Trusted by Our Guests
            </h2>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl lg:text-5xl text-[#C2A875] mb-2">100+</div>
                <div className="text-lg text-[#7A6A5A]">Guests Hosted</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-4xl lg:text-5xl text-[#C2A875]">4.9</span>
                  <Star className="w-8 h-8 text-[#C2A875] fill-[#C2A875]" />
                </div>
                <div className="text-lg text-[#7A6A5A]">Average Rating</div>
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#C2A875] fill-[#C2A875]"
                      />
                    ))}
                  </div>
                  <p className="text-[#3A2F25] mb-3 leading-relaxed">
                    "{review.text}"
                  </p>
                  <p className="text-sm text-[#7A6A5A]">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Transition Area */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
              {testimonialImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Prince Vacation Homes - Image ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
