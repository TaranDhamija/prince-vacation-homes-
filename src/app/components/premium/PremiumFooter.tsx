import { Facebook, Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/app/constants";

export function PremiumFooter() {
  return (
    <footer className="bg-[#3A2F25] text-white">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl mb-4 tracking-tight">Prince Vacation Homes</div>
            <p className="text-white/70 leading-relaxed mb-6">
              Creating memorable vacation experiences through curated properties
              and exceptional service.
            </p>
            
            {/* Contact Details */}
            <div className="mb-6 space-y-2">
              <a
                href="mailto:Princevacationhomes@gmail.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" />
                <span>Princevacationhomes@gmail.com</span>
              </a>
              <a
                href="tel:+16045610073"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" />
                <span>+1 (604) 561-0073</span>
              </a>
              <a
                href="tel:+17782451919"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-white/50 group-hover:text-white/70 transition-colors" />
                <span>+1 (778) 245-1919</span>
              </a>
            </div>

            <div>
              <p className="text-sm text-white/60 mb-3">Follow us on social</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/princevacationhomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/princevacationhomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] hover:opacity-90 flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-sm transition-all hover:shadow-lg hover:scale-[1.03]"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">Chat with us on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg mb-4">Company</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://princevacationhomes.guestybookings.com/en/properties?minOccupancy=1"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Properties
                </a>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="hover:text-white transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; Prince Vacation Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
