import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl mb-4">Find Your Perfect Vacation Home</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Discover unique stays and experiences around the world
          </p>
          
          <div className="bg-white rounded-lg shadow-xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="flex items-center gap-2 px-3 py-2 border rounded-md">
                <MapPin className="h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Where to?" 
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 border rounded-md">
                <Calendar className="h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Check-in" 
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 border rounded-md">
                <Users className="h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Guests" 
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
