import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP_LINK } from "@/app/constants";

export function PremiumHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FBF6EF]/95 backdrop-blur-sm border-b border-[#F5EFE5]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Prince Vacation Homes home"
              className="inline-flex items-center"
            >
              <img
                src={logo}
                alt="Prince Vacation Homes logo"
                className="h-10 md:h-16 w-auto"
              />
              <span className="ml-3 md:ml-4 text-xl md:text-2xl font-semibold text-[#3A2F25] whitespace-nowrap">
                Prince Vacation Homes
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-[#7A6A5A] hover:text-[#C2A875] transition-colors"
            >
              Home
            </Link>
            <a
              href="https://princevacationhomes.guestybookings.com/en/properties?minOccupancy=1"
              target="_blank"
              className="text-[#7A6A5A] hover:text-[#C2A875] transition-colors"
            >
              Properties
            </a>
            <Link
              to="/about"
              className="text-[#7A6A5A] hover:text-[#C2A875] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/partners"
              className="text-[#7A6A5A] hover:text-[#C2A875] transition-colors"
            >
              Partner With Us
            </Link>
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#3A2F25] hover:text-[#C2A875] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Social Icons - Desktop Only */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/princevacationhomes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.facebook.com/princevacationhomes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 space-y-4">
            <Link
              to="/"
              className="block text-lg text-[#3A2F25] hover:text-[#C2A875] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#"
              className="block text-lg text-[#3A2F25] hover:text-[#C2A875] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Properties
            </a>
            <Link
              to="/about"
              className="block text-lg text-[#3A2F25] hover:text-[#C2A875] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/partners"
              className="block text-lg text-[#3A2F25] hover:text-[#C2A875] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partner With Us
            </Link>

            {/* Social Icons in Mobile Menu */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#F5EFE5]">
              <a
                href="https://www.instagram.com/princevacationhomes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/princevacationhomes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
