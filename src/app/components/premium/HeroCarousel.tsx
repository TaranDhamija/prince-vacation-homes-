import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { HeroCarousel as HeroImageCarousel } from "@/components/hero/HeroCarousel";

const BASE_URL = `https://princevacationhomes.guestybookings.com/en/properties?minOccupancy`;

export function HeroCarousel() {
  const [checkInDisplay, setCheckInDisplay] = useState("");
  const [checkOutDisplay, setCheckOutDisplay] = useState("");
  const [guestCount, setGuestCount] = useState<number | null>(null);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  const checkInHiddenRef = useRef<HTMLInputElement | null>(null);
  const checkOutHiddenRef = useRef<HTMLInputElement | null>(null);
  const guestsFieldRef = useRef<HTMLDivElement | null>(null);

  const formatDate = (value: string) => {
    if (!value) return "";
    const date = new Date(value + "T00:00:00");
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const openNativeDatePicker = (input: HTMLInputElement | null) => {
    if (!input) return;
    (input as any).showPicker?.();
    input.focus();
    input.click();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        guestsFieldRef.current &&
        !guestsFieldRef.current.contains(event.target as Node)
      ) {
        setIsGuestsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (!checkInDisplay && !checkOutDisplay) {
      window.open(`${BASE_URL}=1`, "_blank");
    }

    const url = `${BASE_URL}=${guestCount ?? 1}&checkIn=${checkInDisplay}&checkOut=${checkOutDisplay}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* Slideshow Container */}
      <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          <HeroImageCarousel />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        {/* Hero Content - Overlay on desktop only */}
        <div className="hidden md:block absolute inset-0 z-10">
          <div className="h-full flex items-center">
            <div className="max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
              <div className="max-w-3xl">
                <h1 className="text-5xl lg:text-6xl text-white mb-4 tracking-tight">
                  Discover Your Perfect Stay
                </h1>
                <p className="text-xl text-white/90 mb-12">
                  Curated vacation homes designed for comfort and style
                </p>

                {/* Search Bar */}
                <div className="rounded-3xl bg-white/90 backdrop-blur-md p-6 md:p-7 lg:p-8 shadow-[0_24px_60px_rgba(15,23,42,0.28)] border border-white/40">
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:h-14">
                <div className="flex items-center md:h-full">
                  <label className="sr-only">Check in</label>
                  <div className="booking-field">
                    <div className="booking-field-inner">
                      <input
                        type="text"
                        readOnly
                        placeholder="Check in"
                        value={checkInDisplay}
                        onFocus={() =>
                          openNativeDatePicker(checkInHiddenRef.current)
                        }
                        onClick={() =>
                          openNativeDatePicker(checkInHiddenRef.current)
                        }
                        className="booking-field-input"
                      />
                      <span className="booking-field-icon" />
                    </div>
                  </div>
                  <input
                    ref={checkInHiddenRef}
                    type="date"
                    className="sr-only"
                    onChange={(event) => setCheckInDisplay(event.target.value)}
                  />
                </div>

                <div className="flex items-center md:h-full">
                  <label className="sr-only">Check out</label>
                  <div className="booking-field">
                    <div className="booking-field-inner">
                      <input
                        type="text"
                        readOnly
                        placeholder="Check out"
                        value={checkOutDisplay}
                        onFocus={() =>
                          openNativeDatePicker(checkOutHiddenRef.current)
                        }
                        onClick={() =>
                          openNativeDatePicker(checkOutHiddenRef.current)
                        }
                        className="booking-field-input"
                      />
                      <span className="booking-field-icon" />
                    </div>
                  </div>
                  <input
                    ref={checkOutHiddenRef}
                    type="date"
                    className="sr-only"
                    onChange={(event) => setCheckOutDisplay(event.target.value)}
                  />
                </div>

                <div
                  className="relative flex items-center md:h-full"
                  ref={guestsFieldRef}
                >
                  <label className="sr-only">Guests</label>
                  <div className="booking-field">
                    <button
                      type="button"
                      className={`booking-field-inner booking-field-button ${
                        guestCount ? "text-[#222222]" : "text-[#8B8B8B]"
                      }`}
                      onClick={() => setIsGuestsOpen((open) => !open)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setIsGuestsOpen((open) => !open);
                        }
                      }}
                    >
                      <span>
                        {guestCount
                          ? `${guestCount} Guest${guestCount === 1 ? "" : "s"}`
                          : "Guests"}
                      </span>
                      <span className="booking-field-icon">▾</span>
                    </button>
                  </div>

                  {isGuestsOpen && (
                    <div className="absolute left-0 right-0 mt-2 rounded-2xl bg-white shadow-xl border border-[#F5EFE5] max-h-64 overflow-auto z-20">
                      {Array.from({ length: 20 }, (_, i) => i + 1).map(
                        (value) => (
                          <button
                            key={value}
                            type="button"
                            className="w-full text-left px-4 py-2 text-sm text-[#3A2F25] hover:bg-[#FBF6EF]"
                            onClick={() => {
                              setGuestCount(value);
                              setIsGuestsOpen(false);
                            }}
                          >
                            {value} {value === 1 ? "Guest" : "Guests"}
                          </button>
                        ),
                      )}
                    </div>
                  )}
                </div>

                <Button
                  onClick={handleSearch}
                  className="md:h-full px-6 md:px-8 rounded-2xl bg-[#C2A875] hover:bg-[#B49A68] text-white shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 ease-out transform hover:-translate-y-0.5 active:translate-y-[1px] active:shadow-md active:shadow-black/20 flex items-center justify-center"
                >
                  <Search className="w-5 h-5" />
                  Search
                </Button>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Search Widget Below Slideshow */}
      <div className="md:hidden bg-white px-8 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Search Bar */}
          <div className="rounded-3xl bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] border border-gray-200 p-6">
            <div className="flex flex-col gap-4 items-stretch">
              <div className="flex items-center">
                <label className="sr-only">Check in</label>
                <div className="booking-field">
                  <div className="booking-field-inner">
                    <input
                      type="text"
                      readOnly
                      placeholder="Check in"
                      value={checkInDisplay}
                      onFocus={() =>
                        openNativeDatePicker(checkInHiddenRef.current)
                      }
                      onClick={() =>
                        openNativeDatePicker(checkInHiddenRef.current)
                      }
                      className="booking-field-input"
                    />
                    <span className="booking-field-icon" />
                  </div>
                </div>
                <input
                  ref={checkInHiddenRef}
                  type="date"
                  className="sr-only"
                  onChange={(event) => setCheckInDisplay(event.target.value)}
                />
              </div>

              <div className="flex items-center">
                <label className="sr-only">Check out</label>
                <div className="booking-field">
                  <div className="booking-field-inner">
                    <input
                      type="text"
                      readOnly
                      placeholder="Check out"
                      value={checkOutDisplay}
                      onFocus={() =>
                        openNativeDatePicker(checkOutHiddenRef.current)
                      }
                      onClick={() =>
                        openNativeDatePicker(checkOutHiddenRef.current)
                      }
                      className="booking-field-input"
                    />
                    <span className="booking-field-icon" />
                  </div>
                </div>
                <input
                  ref={checkOutHiddenRef}
                  type="date"
                  className="sr-only"
                  onChange={(event) => setCheckOutDisplay(event.target.value)}
                />
              </div>

              <div
                className="relative flex items-center"
                ref={guestsFieldRef}
              >
                <label className="sr-only">Guests</label>
                <div className="booking-field">
                  <button
                    type="button"
                    className={`booking-field-inner booking-field-button ${
                      guestCount ? "text-[#222222]" : "text-[#8B8B8B]"
                    }`}
                    onClick={() => setIsGuestsOpen((open) => !open)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setIsGuestsOpen((open) => !open);
                      }
                    }}
                  >
                    <span>
                      {guestCount
                        ? `${guestCount} Guest${guestCount === 1 ? "" : "s"}`
                        : "Guests"}
                    </span>
                    <span className="booking-field-icon">▾</span>
                  </button>
                </div>

                {isGuestsOpen && (
                  <div className="absolute left-0 right-0 mt-2 rounded-2xl bg-white shadow-xl border border-[#F5EFE5] max-h-64 overflow-auto z-20">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map(
                      (value) => (
                        <button
                          key={value}
                          type="button"
                          className="w-full text-left px-4 py-2 text-sm text-[#3A2F25] hover:bg-[#FBF6EF]"
                          onClick={() => {
                            setGuestCount(value);
                            setIsGuestsOpen(false);
                          }}
                        >
                          {value} {value === 1 ? "Guest" : "Guests"}
                        </button>
                      ),
                    )}
                  </div>
                )}
              </div>

              <Button
                onClick={handleSearch}
                className="px-6 rounded-2xl bg-[#C2A875] hover:bg-[#B49A68] text-white shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 ease-out transform hover:-translate-y-0.5 active:translate-y-[1px] active:shadow-md active:shadow-black/20 flex items-center justify-center"
              >
                <Search className="w-5 h-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
