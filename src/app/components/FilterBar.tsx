import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";

export function FilterBar() {
  return (
    <div className="border-b bg-white sticky top-[73px] z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center gap-3">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="beach">Beach House</SelectItem>
              <SelectItem value="cabin">Cabin</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="cottage">Cottage</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="any">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="any-price">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any-price">Any Price</SelectItem>
              <SelectItem value="100">Under $100</SelectItem>
              <SelectItem value="200">$100 - $200</SelectItem>
              <SelectItem value="300">$200 - $300</SelectItem>
              <SelectItem value="300+">$300+</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            More Filters
          </Button>
          
          <div className="ml-auto text-sm text-gray-600">
            Showing 247 properties
          </div>
        </div>
      </div>
    </div>
  );
}
