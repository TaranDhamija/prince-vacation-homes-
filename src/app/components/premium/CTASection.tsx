import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#C2A875] to-[#B49A68]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
        <h2 className="text-4xl lg:text-5xl text-white mb-4">
          Your Next Stay Awaits
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied travelers who've found their perfect
          vacation home with Prince Vacation Homes. Book today and experience hospitality
          reimagined.
        </p>
        <Button
          onClick={() =>
            window.open(
              "https://princevacationhomes.guestybookings.com/en/properties?minOccupancy=1",
              "_blank",
            )
          }
          className="bg-white text-[#C2A875] hover:bg-[#FBF6EF] rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
        >
          Explore Properties
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
