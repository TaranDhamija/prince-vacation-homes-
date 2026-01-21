import { Award, Heart, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { GuestTrustSection } from "@/app/components/premium/GuestTrustSection";
import logo from "@/assets/logo.png";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#C2A875] to-[#B49A68] text-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl mb-6">About Prince Vacation Homes</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We believe that every journey deserves a perfect place to stay. We've been curating 
              exceptional vacation homes that combine luxury, comfort, and authentic local experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl text-[#3A2F25] mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-[#7A6A5A] leading-relaxed">
                <p>
                  Prince Vacation Homes was born from a simple idea: vacation homes should feel like a home away from home, 
                  not just another rental property. Our founders, avid travelers themselves, noticed a gap in 
                  the market for truly curated, boutique vacation experiences.
                </p>
                <p>
                 What started as a small, thoughtful collection has evolved into a growing portfolio of handpicked homes in key destinations. Every property is selected for its distinctive character, premium amenities, and the unforgettable stays it delivers.
                </p>
                <p>
                  What sets us apart is our commitment to quality over quantity. Every home on our platform 
                  undergoes a rigorous vetting process. Each home is directly managed and meticulously maintained by our team to ensure excellence at every touchpoint.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-center py-4">
              <img
                src={logo}
                alt="Prince Vacation Homes"
                className="w-full max-w-2xl h-auto animate-float-gentle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guest Trust Section */}
      <GuestTrustSection />

      {/* Our Values */}
      <section className="py-20 bg-[#FBF6EF]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#3A2F25] mb-4">Our Values</h2>
            <p className="text-xl text-[#7A6A5A]">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#C2A875]/10 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-[#C2A875]" />
              </div>
              <h3 className="text-xl text-[#3A2F25] mb-3">Excellence</h3>
              <p className="text-[#7A6A5A]">
                We set the highest standards for every property and service we offer
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#C2A875]/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#C2A875]" />
              </div>
              <h3 className="text-xl text-[#3A2F25] mb-3">Care</h3>
              <p className="text-[#7A6A5A]">
                Every guest experience matters to us, and we're here to help 24/7
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#C2A875]/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#C2A875]" />
              </div>
              <h3 className="text-xl text-[#3A2F25] mb-3">Community</h3>
              <p className="text-[#7A6A5A]">
                We build lasting relationships with guests and property owners alike
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#C2A875]/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-[#C2A875]" />
              </div>
              <h3 className="text-xl text-[#3A2F25] mb-3">Sustainability</h3>
              <p className="text-[#7A6A5A]">
                We promote responsible travel and eco-friendly accommodations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#C2A875] to-[#B49A68]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether you're looking for your next vacation or want to list your property, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://princevacationhomes.guestybookings.com/en/properties?minOccupancy=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-[#C2A875] rounded-full hover:bg-[#FBF6EF] transition-all text-lg shadow-xl inline-block text-center"
            >
              Browse Properties
            </a>
            <Link
              to="/partners"
              className="px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#C2A875] transition-all text-lg inline-block text-center"
            >
              Become a Host
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
