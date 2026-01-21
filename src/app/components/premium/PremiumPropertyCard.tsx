import { Bed, Bath, Users, Heart } from "lucide-react";
import { useState } from "react";

interface PremiumPropertyCardProps {
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

export function PremiumPropertyCard({
  name,
  location,
  image,
  price,
  bedrooms,
  bathrooms,
  guests,
  bookingUrl,
}: PremiumPropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-[#C2A875]"
            }`}
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => window.open(bookingUrl, '_blank', 'noopener,noreferrer')}
            className="w-full bg-white text-[#C2A875] py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Book this property"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xl text-[#3A2F25] mb-1">{name}</h3>
          <p className="text-[#C2A875]">{location}</p>
        </div>

        <div className="flex items-center gap-5 text-[#7A6A5A]">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span className="text-sm">{guests}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-[#F5EFE5]">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl text-[#3A2F25]">${price}</span>
            <span className="text-[#7A6A5A]">/ night</span>
          </div>
        </div>
      </div>
    </div>
  );
}
