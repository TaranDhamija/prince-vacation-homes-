import { useMemo, useState } from "react";
import { CalendarDays, ChevronDown, Search, Users } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Calendar } from "@/app/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { cn } from "@/app/components/ui/utils";
import { HeroCarousel as HeroImageCarousel } from "@/components/hero/HeroCarousel";

const BASE_URL =
  "https://princevacationhomes.guestybookings.com/en/properties";

type BookingSearchBarProps = {
  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;
  guestCount: number | null;
  isMobile?: boolean;
  onCheckInDateChange: (date: Date | undefined) => void;
  onCheckOutDateChange: (date: Date | undefined) => void;
  onGuestCountChange: (count: number | null) => void;
  onSearch: () => void;
  today: Date;
};

function BookingSearchBar({
  checkInDate,
  checkOutDate,
  guestCount,
  isMobile = false,
  onCheckInDateChange,
  onCheckOutDateChange,
  onGuestCountChange,
  onSearch,
  today,
}: BookingSearchBarProps) {
  const [openPanel, setOpenPanel] = useState<"checkIn" | "checkOut" | "guests" | null>(null);

  const formatDate = (value?: Date) => {
    if (!value) return "";
    return value.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const fieldClassName =
    "flex min-h-[68px] w-full items-center justify-between gap-3 rounded-2xl border border-[#E8E0D3] bg-white px-4 py-3 text-left shadow-sm transition-colors hover:border-[#D6C3A0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A875]/40";
  const fieldLabelClassName =
    "mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A8770]";
  const fieldValueClassName = "block text-sm font-medium text-[#3A2F25]";

  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/40 bg-white/92 backdrop-blur-md shadow-[0_24px_60px_rgba(15,23,42,0.22)]",
        isMobile ? "p-4" : "p-4 md:p-5",
      )}
    >
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.05fr)_minmax(0,0.9fr)_auto] lg:items-center">
        <Popover
          open={openPanel === "checkIn"}
          onOpenChange={(open) => setOpenPanel(open ? "checkIn" : null)}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              className={cn(
                fieldClassName,
                openPanel === "checkIn" && "border-[#C2A875]",
              )}
            >
              <div className="flex min-w-0 items-center">
                <CalendarDays className="mr-3 h-5 w-5 shrink-0 text-[#C2A875]" />
                <div className="min-w-0">
                  <span className={fieldLabelClassName}>Check in</span>
                  <span
                    className={cn(
                      fieldValueClassName,
                      !checkInDate && "text-[#8B8B8B]",
                    )}
                  >
                    {formatDate(checkInDate) || "Add date"}
                  </span>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-[#8B8B8B] transition-transform",
                  openPanel === "checkIn" && "rotate-180",
                )}
              />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            side="bottom"
            sideOffset={10}
            className="z-[70] w-auto rounded-2xl border border-[#E8E0D3] p-0 shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
          >
            <Calendar
              mode="single"
              selected={checkInDate}
              onSelect={(date) => {
                onCheckInDateChange(date);
                if (checkOutDate && date && checkOutDate < date) {
                  onCheckOutDateChange(undefined);
                }
                setOpenPanel(null);
              }}
              disabled={{ before: today }}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Popover
          open={openPanel === "checkOut"}
          onOpenChange={(open) => setOpenPanel(open ? "checkOut" : null)}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              className={cn(
                fieldClassName,
                openPanel === "checkOut" && "border-[#C2A875]",
              )}
            >
              <div className="flex min-w-0 items-center">
                <CalendarDays className="mr-3 h-5 w-5 shrink-0 text-[#C2A875]" />
                <div className="min-w-0">
                  <span className={fieldLabelClassName}>Check out</span>
                  <span
                    className={cn(
                      fieldValueClassName,
                      !checkOutDate && "text-[#8B8B8B]",
                    )}
                  >
                    {formatDate(checkOutDate) || "Add date"}
                  </span>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-[#8B8B8B] transition-transform",
                  openPanel === "checkOut" && "rotate-180",
                )}
              />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            side="bottom"
            sideOffset={10}
            className="z-[70] w-auto rounded-2xl border border-[#E8E0D3] p-0 shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
          >
            <Calendar
              mode="single"
              selected={checkOutDate}
              onSelect={(date) => {
                onCheckOutDateChange(date);
                setOpenPanel(null);
              }}
              disabled={{ before: checkInDate ?? today }}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Popover
          open={openPanel === "guests"}
          onOpenChange={(open) => setOpenPanel(open ? "guests" : null)}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              className={cn(
                fieldClassName,
                openPanel === "guests" && "border-[#C2A875]",
              )}
            >
              <div className="flex min-w-0 items-center">
                <Users className="mr-3 h-5 w-5 shrink-0 text-[#C2A875]" />
                <div className="min-w-0">
                  <span className={fieldLabelClassName}>Guests</span>
                  <span
                    className={cn(
                      fieldValueClassName,
                      !guestCount && "text-[#8B8B8B]",
                    )}
                  >
                    {guestCount
                      ? `${guestCount} ${guestCount === 1 ? "Guest" : "Guests"}`
                      : "Add guests"}
                  </span>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-[#8B8B8B] transition-transform",
                  openPanel === "guests" && "rotate-180",
                )}
              />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            side="bottom"
            sideOffset={10}
            className="z-[70] w-[var(--radix-popover-trigger-width)] rounded-2xl border border-[#E8E0D3] p-2 shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
          >
            <div className="max-h-72 overflow-y-auto">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((value) => (
                <button
                  key={value}
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm text-[#3A2F25] transition-colors hover:bg-[#FBF6EF]",
                    guestCount === value && "bg-[#FBF6EF] text-[#8E7443]",
                  )}
                  onClick={() => {
                    onGuestCountChange(value);
                    setOpenPanel(null);
                  }}
                >
                  <span>{value === 1 ? "1 Guest" : `${value} Guests`}</span>
                  {guestCount === value ? (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                      Selected
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Button
          onClick={onSearch}
          className={cn(
            "h-[68px] rounded-2xl bg-[#C2A875] px-7 py-4 text-base text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#B49A68] hover:shadow-xl hover:shadow-black/25",
            isMobile ? "w-full" : "lg:min-w-[156px]",
          )}
        >
          <Search className="h-5 w-5" />
          Search
        </Button>
      </div>
    </div>
  );
}

export function HeroCarousel() {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [guestCount, setGuestCount] = useState<number | null>(null);

  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const serializeDate = (value?: Date) => {
    if (!value) return "";
    const year = value.getFullYear();
    const month = `${value.getMonth() + 1}`.padStart(2, "0");
    const day = `${value.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSearch = () => {
    const checkIn = serializeDate(checkInDate);
    const checkOut = serializeDate(checkOutDate);
    const url = new URL(BASE_URL);

    url.searchParams.set("minOccupancy", String(guestCount ?? 1));

    if (checkIn) {
      url.searchParams.set("checkIn", checkIn);
    }

    if (checkOut) {
      url.searchParams.set("checkOut", checkOut);
    }

    window.open(url.toString(), "_blank");
  };

  return (
    <div>
      <div className="relative h-[600px] overflow-hidden lg:h-[700px]">
        <div className="absolute inset-0">
          <HeroImageCarousel />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <div className="absolute inset-0 z-10 hidden md:block">
          <div className="flex h-full items-center">
            <div className="mx-auto w-full max-w-[1440px] px-8 lg:px-16">
              <div className="max-w-4xl">
                <h1 className="mb-4 text-5xl tracking-tight text-white lg:text-6xl">
                  Discover Your Perfect Stay
                </h1>
                <p className="mb-12 text-xl text-white/90">
                  Curated vacation homes designed for comfort and style
                </p>

                <BookingSearchBar
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  guestCount={guestCount}
                  onCheckInDateChange={setCheckInDate}
                  onCheckOutDateChange={setCheckOutDate}
                  onGuestCountChange={setGuestCount}
                  onSearch={handleSearch}
                  today={today}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-6 py-6 md:hidden sm:px-8">
        <div className="mx-auto max-w-3xl">
          <BookingSearchBar
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            guestCount={guestCount}
            isMobile
            onCheckInDateChange={setCheckInDate}
            onCheckOutDateChange={setCheckOutDate}
            onGuestCountChange={setGuestCount}
            onSearch={handleSearch}
            today={today}
          />
        </div>
      </div>
    </div>
  );
}
