import { Search, Menu, User } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <a href="/" className="inline-flex items-center" aria-label="Prince Vacation Homes home">
              <img
                src={logo}
                alt="Prince Vacation Homes logo"
                className="h-8 md:h-10 w-auto"
              />
              <span className="ml-3 text-xl font-semibold text-blue-600 whitespace-nowrap">
                Prince Vacation Homes
              </span>
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Destinations</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
