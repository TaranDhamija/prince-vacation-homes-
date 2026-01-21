import { Star, MapPin, Heart } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  featured?: boolean;
}

export function PropertyCard({ 
  title, 
  location, 
  image, 
  price, 
  rating, 
  reviews, 
  bedrooms, 
  bathrooms, 
  guests,
  featured 
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-3 right-3 bg-white/80 hover:bg-white"
        >
          <Heart className="h-5 w-5" />
        </Button>
        {featured && (
          <Badge className="absolute top-3 left-3 bg-blue-600">Featured</Badge>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{rating}</span>
            <span className="text-gray-500 text-sm">({reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>{bedrooms} beds</span>
          <span>•</span>
          <span>{bathrooms} baths</span>
          <span>•</span>
          <span>{guests} guests</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-semibold">${price}</span>
            <span className="text-gray-600"> / night</span>
          </div>
          <Button variant="outline">Book Now</Button>
        </div>
      </div>
    </Card>
  );
}
