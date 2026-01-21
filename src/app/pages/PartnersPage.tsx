import {
  Building2,
  Globe2,
  Star,
  Instagram,
  Facebook,
  MessageCircle,
  Calendar,
  Sparkles,
  Shield,
  DollarSign,
  Network,
  TrendingUp,
  UserCheck,
  ShieldCheck,
  Settings,
  Refrigerator,
  Sofa,
  Droplet,
  UtensilsCrossed,
  Shirt,
  AlertTriangle,
  Wind,
  Home,
  Mail,
  Phone,
  Bug,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/app/constants";

export function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#FBF6EF]">
      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#3A2F25] mb-4">
              Where Exceptional Homes Meet Exceptional Hosting
            </h2>
            <p className="text-2xl text-[#C2A875] mb-6">
              Turn your property into a professionally managed luxury
              experience.
            </p>
            <p className="text-lg text-[#7A6A5A] max-w-3xl mx-auto leading-relaxed">
              Partnering with us means more than just hosting. It means
              elevating your property, simplifying operations, and delivering
              consistently exceptional guest experiences.
            </p>
          </div>

          {/* Secondary Heading */}
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl text-[#3A2F25]">
              A Smarter Way to Host
            </h3>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-[#FBF6EF] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                <Network className="w-7 h-7 text-[#C2A875]" />
              </div>
              <h4 className="text-xl text-[#3A2F25] mb-3 font-semibold">
                Multi-Platform Booking Management
              </h4>
              <p className="text-[#7A6A5A] leading-relaxed">
                Seamless management across Airbnb, Booking.com, VRBO, Google
                Vacation Rentals, and direct bookings — optimized to maximize
                revenue and results.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#FBF6EF] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-[#C2A875]" />
              </div>
              <h4 className="text-xl text-[#3A2F25] mb-3 font-semibold">
                Unified Calendar Management
              </h4>
              <p className="text-[#7A6A5A] leading-relaxed">
                Centralized calendar management across all platforms, ensuring
                instant availability updates and preventing double bookings.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#FBF6EF] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-[#C2A875]" />
              </div>
              <h4 className="text-xl text-[#3A2F25] mb-3 font-semibold">
                Quality-Controlled Housekeeping
              </h4>
              <p className="text-[#7A6A5A] leading-relaxed">
                Our in-house cleaning team follows an automated,
                checklist-driven process with shared reports — ensuring
                consistent standards, minimal complaints, and the option to use
                your own team.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-[#FBF6EF] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#C2A875]" />
              </div>
              <h4 className="text-xl text-[#3A2F25] mb-3 font-semibold">
                Enhanced Liability Protection
              </h4>
              <p className="text-[#7A6A5A] leading-relaxed">
                Partnering with us includes additional third-party liability
                coverage of up to $50,000 — layered on top of platform-provided
                protections for enhanced security and peace of mind.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-[#FBF6EF] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-[#C2A875]" />
              </div>
              <h4 className="text-xl text-[#3A2F25] mb-3 font-semibold">
                Damage Protection & Security Deposits
              </h4>
              <p className="text-[#7A6A5A] leading-relaxed">
                Built-in damage protection with security deposits collected to
                cover unforeseen incidents — ensuring zero financial loss and
                complete peace of mind for you.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-[#FBF6EF] rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#C2A875]" />
              </div>
              <h4 className="text-xl text-[#3A2F25] mb-3 font-semibold">
                Transparent Reporting & Owner Support
              </h4>
              <p className="text-[#7A6A5A] leading-relaxed">
                Clear performance insights, regular updates, and dedicated support to ensure confidence and consistent results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Damage Protection Benefits Section */}
      <section className="py-20 bg-[#FBF6EF]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#3A2F25] mb-4">
              Damage Protection That Benefits Your Property
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Card 1: Boost Revenue */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#C2A875]" />
              </div>
              <h4 className="text-xl text-[#3A2F25] mb-3 font-semibold">
                Boost Revenue
              </h4>
              <p className="text-[#7A6A5A] leading-relaxed">
                Mark up plan costs as an additional fee for guests. Increase conversion of prospects by eliminating security deposits.
              </p>
            </div>

            {/* Card 2: Reduce Friction */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                <UserCheck className="w-7 h-7 text-[#C2A875]" />
              </div>
              <h4 className="text-xl text-[#3A2F25] mb-3 font-semibold">
                Reduce Friction
              </h4>
              <p className="text-[#7A6A5A] leading-relaxed">
                Reduce possible friction and poor reviews. Avoid chasing down guests to repay for damages.
              </p>
            </div>

            {/* Card 3: Lower Risks */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-[#C2A875]" />
              </div>
              <h4 className="text-xl text-[#3A2F25] mb-3 font-semibold">
                Lower Risks
              </h4>
              <p className="text-[#7A6A5A] leading-relaxed">
                Avoid dealing with repair or replacement costs, all while saving your profit margins.
              </p>
            </div>

            {/* Card 4: One-Stop Management */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C2A875]/10 flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-[#C2A875]" />
              </div>
              <h4 className="text-xl text-[#3A2F25] mb-3 font-semibold">
                One-Stop Management
              </h4>
              <p className="text-[#7A6A5A] leading-relaxed">
                Create and manage everything from policies to claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Damages Covered Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#3A2F25] mb-4">
              Most Common Damages Covered
            </h2>
            <p className="text-xl text-[#7A6A5A] max-w-3xl mx-auto leading-relaxed">
              With our protection systems in place, handling unexpected issues doesn't slow you down or impact your earnings.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Appliances */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FBF6EF] flex items-center justify-center mb-4">
                <Refrigerator className="w-8 h-8 text-[#7A6A5A]" />
              </div>
              <span className="text-[#3A2F25] font-medium">Appliances</span>
            </div>

            {/* Furnishings */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FBF6EF] flex items-center justify-center mb-4">
                <Sofa className="w-8 h-8 text-[#7A6A5A]" />
              </div>
              <span className="text-[#3A2F25] font-medium">Furnishings</span>
            </div>

            {/* Stains */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FBF6EF] flex items-center justify-center mb-4">
                <Droplet className="w-8 h-8 text-[#7A6A5A]" />
              </div>
              <span className="text-[#3A2F25] font-medium">Stains</span>
            </div>

            {/* Kitchenware */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FBF6EF] flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-8 h-8 text-[#7A6A5A]" />
              </div>
              <span className="text-[#3A2F25] font-medium">Kitchenware</span>
            </div>

            {/* Towels & Linens */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FBF6EF] flex items-center justify-center mb-4">
                <Shirt className="w-8 h-8 text-[#7A6A5A]" />
              </div>
              <span className="text-[#3A2F25] font-medium">Towels & Linens</span>
            </div>

            {/* Accidental Breakage */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FBF6EF] flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-[#7A6A5A]" />
              </div>
              <span className="text-[#3A2F25] font-medium">Accidental Breakage</span>
            </div>

            {/* Smoke Odor */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FBF6EF] flex items-center justify-center mb-4">
                <Wind className="w-8 h-8 text-[#7A6A5A]" />
              </div>
              <span className="text-[#3A2F25] font-medium">Smoking Odour</span>
            </div>

            {/* Bed Bugs */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FBF6EF] flex items-center justify-center mb-4">
                <Bug className="w-8 h-8 text-[#7A6A5A]" />
              </div>
              <span className="text-[#3A2F25] font-medium">Bed Bugs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Highlights */}
      <section className="py-20 bg-[#FBF6EF]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-[#3A2F25] mb-6">
              Built on Collaboration
            </h2>
            <div className="space-y-4 text-lg text-[#7A6A5A] leading-relaxed">
              <p>
                Our partner ecosystem is at the heart of what we do. From
                boutique property owners to global hospitality brands, we work
                closely with each partner to deliver consistent quality.
              </p>
              <p>
                Backed by data-driven insights and a dedicated partner success team, we work alongside you to drive sustainable, long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl text-[#3A2F25] mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-xl text-[#7A6A5A] mb-12 max-w-2xl mx-auto">
            We'd love to connect with you. Reach out to us directly through our
            social channels.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/princevacationhomes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <span className="mt-3 text-sm text-[#7A6A5A]">Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/princevacationhomes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                <Facebook className="w-10 h-10 text-white" />
              </div>
              <span className="mt-3 text-sm text-[#7A6A5A]">Facebook</span>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <span className="mt-3 text-sm text-[#7A6A5A]">WhatsApp</span>
            </a>
          </div>

          <p className="text-[#7A6A5A] text-lg mb-16">
            Follow us or message us directly
          </p>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-8 border-t border-[#F5EFE5] max-w-4xl mx-auto">
            {/* Email */}
            <a
              href="mailto:Princevacationhomes@gmail.com"
              className="group flex items-center gap-3 transition-all duration-300 hover:opacity-70"
            >
              <div className="w-12 h-12 rounded-full bg-[#FBF6EF] flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#C2A875]" />
              </div>
              <span className="text-[#3A2F25] text-lg">Princevacationhomes@gmail.com</span>
            </a>

            {/* Phone 1 */}
            <a
              href="tel:+16045610073"
              className="group flex items-center gap-3 transition-all duration-300 hover:opacity-70"
            >
              <div className="w-12 h-12 rounded-full bg-[#FBF6EF] flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#C2A875]" />
              </div>
              <span className="text-[#3A2F25] text-lg">+1 (604) 561-0073</span>
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+17782451919"
              className="group flex items-center gap-3 transition-all duration-300 hover:opacity-70"
            >
              <div className="w-12 h-12 rounded-full bg-[#FBF6EF] flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#C2A875]" />
              </div>
              <span className="text-[#3A2F25] text-lg">+1 (778) 245-1919</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
