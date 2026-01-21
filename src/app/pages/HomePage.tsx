import { HeroCarousel } from "@/app/components/premium/HeroCarousel";
import { FeaturedPropertiesCarousel } from "@/app/components/premium/FeaturedPropertiesCarousel";
import { WhyChooseUs } from "@/app/components/premium/WhyChooseUs";
import { GuestReviewsCarousel } from "@/app/components/premium/GuestReviewsCarousel";
import { AmenitiesSection } from "@/app/components/premium/AmenitiesSection";
import { CTASection } from "@/app/components/premium/CTASection";

// Image imports
import firepitLounge from "@/assets/featuredpropertiesimages/firepit lounge.png";
import secondListing from "@/assets/featuredpropertiesimages/second listing.jpg";
import steamJacuzziArea from "@/assets/featuredpropertiesimages/steam jacuzzi area.png";
import fourthListing from "@/assets/featuredpropertiesimages/fourth listing.jpg";
import fifthListing from "@/assets/featuredpropertiesimages/fifth listing.jpg";

const featuredProperties= [
  {
    id: 1,
    name: "Family-Friendly home | Hot Tub Fire Pit & More",
    location: "Langley , Canada",
    image: firepitLounge,
    price: 1000,
    bedrooms: 7,
    bathrooms: 4,
    guests: 20,
    bookingUrl: "https://princevacationhomes.guestybookings.com/en/properties/68a91b79f16fe300108553e8"
  },
  {
    id: 2,
    name: "Entertainment Haven | Hot Tub, Fire-Pit & More",
    location: "Langley , Canada",
    image: secondListing,
    price: 400,
    bedrooms: 4,
    bathrooms: 2,
    guests: 12,
    bookingUrl: "https://princevacationhomes.guestybookings.com/en/properties/68b51707cb8c2f001418f004"
  },
  {
    id: 3,
    name: "A Beautiful Home for Lasting Memories",
    location: "Langley , Canada",
    image: steamJacuzziArea,
    price: 600,
    bedrooms: 5,
    bathrooms: 3,
    guests: 16,
    bookingUrl: "https://princevacationhomes.guestybookings.com/en/properties/691c40be0c5e0800127ecf6f"
  },
  {
    id: 4,
    name: "4BR Side Coach House with Fire Pit & Theatre",
    location:"Langley , Canada",
    image: fourthListing,
    price: 300,
    bedrooms: 4,
    bathrooms: 2,
    guests: 10,
    bookingUrl: "https://princevacationhomes.guestybookings.com/en/properties/693c0b0b993e7a0013f7a614"
  },
  {
    id: 5,
    name: "Play, Relax & Unwind | Hot Tub, Fire-Pit and More",
    location: "Langley , Canada",
    image: fifthListing,
    price: 300,
    bedrooms: 3,
    bathrooms: 2,
    guests: 8,
    bookingUrl: "https://princevacationhomes.guestybookings.com/en/properties/6962136dd4a8b5001639ed67"
  },
];

export function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Featured Properties Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#3A2F25] mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-[#7A6A5A]">
              Handpicked vacation homes that redefine luxury and comfort
            </p>
          </div>

          <FeaturedPropertiesCarousel properties={featuredProperties} />

          <div className="text-center mt-16">
            <a
              href="https://princevacationhomes.guestybookings.com/en/properties?minOccupancy=1"
              target="_blank"
              className="px-10 py-4 border-2 border-[#C2A875] text-[#C2A875] rounded-full hover:bg-[#C2A875] hover:text-white transition-all text-lg"
            >
              View All Properties
            </a>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <GuestReviewsCarousel />
      <AmenitiesSection />
      <CTASection />
    </>
  );
}
