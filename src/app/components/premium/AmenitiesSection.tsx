import { Wifi, UtensilsCrossed, Monitor, Car, Wind, Waves, Flame, Gamepad2, Film } from "lucide-react";

const amenities = [
  // Priority amenities first
  { icon: Film, label: "Outdoor Theatre" },
  { icon: Waves, label: "Hot Tub" },
  { icon: Flame, label: "Open Firepit" },
  { icon: Gamepad2, label: "Arcade Games" },
  // Remaining amenities
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: UtensilsCrossed, label: "Full Kitchen" },
  { icon: Monitor, label: "Dedicated Workspace" },
  { icon: Car, label: "Free Parking" },
  { icon: Wind, label: "Climate Control" },
];

export function AmenitiesSection() {
  // Duplicate amenities array for seamless infinite loop
  const duplicatedAmenities = [...amenities, ...amenities, ...amenities];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-[#3A2F25] mb-4">Premium Amenities</h2>
          <p className="text-lg text-[#7A6A5A]">
            Everything you need for a comfortable and productive stay
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll-amenities">
            {duplicatedAmenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center flex-shrink-0 w-40"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#C2A875]" />
                  </div>
                  <span className="text-sm text-[#3A2F25]">{amenity.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
