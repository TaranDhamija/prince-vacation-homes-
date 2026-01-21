import { Home, Sparkles, Shield, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Handpicked Homes",
    description: "Every property is personally vetted and curated to meet our high standards for quality and comfort.",
  },
  {
    icon: Sparkles,
    title: "Hotel-Grade Cleanliness",
    description: "Professional cleaning and sanitization before every guest arrival for your peace of mind.",
  },
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description: "We match or beat any competitor's price. Book with confidence knowing you're getting the best deal.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Guest Support",
    description: "Our dedicated support team is always available to ensure your stay is perfect from start to finish.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#FBF6EF]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#3A2F25] mb-4">Why Choose Us</h2>
          <p className="text-xl text-[#7A6A5A] max-w-2xl mx-auto">
            Experience the difference of a platform built around your comfort and satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#C2A875]" />
                </div>
                <h3 className="text-xl text-[#3A2F25] mb-3">{feature.title}</h3>
                <p className="text-[#7A6A5A] leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
