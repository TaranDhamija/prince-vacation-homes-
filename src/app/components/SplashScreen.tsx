import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  onComplete?: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<'intro' | 'hold' | 'exit'>('intro');

  useEffect(() => {
    // Lock body scroll while splash is visible
    document.body.style.overflow = 'hidden';

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Skip or shorten animation for reduced motion
    if (prefersReducedMotion) {
      const quickTimer = setTimeout(() => {
        document.body.style.overflow = '';
        setIsVisible(false);
        sessionStorage.setItem("hasSeenIntro", "true");
        onComplete?.();
      }, 800);
      return () => {
        clearTimeout(quickTimer);
        document.body.style.overflow = '';
      };
    }

    // PHASE 1: Intro animation (0s → 1.2s)
    // Logo and text fade in, scale up
    
    // PHASE 2: Hold (1.2s → 2.4s)
    const holdTimer = setTimeout(() => {
      setAnimationPhase('hold');
    }, 1200);

    // PHASE 3: Exit animation starts (2.4s → 4.0s)
    const exitTimer = setTimeout(() => {
      setAnimationPhase('exit');
    }, 2400);

    // Remove component after exit completes and unlock scroll
    const removeTimer = setTimeout(() => {
      document.body.style.overflow = '';
      setIsVisible(false);
      sessionStorage.setItem("hasSeenIntro", "true");
      onComplete?.();
    }, 4000); // 2400ms + 1600ms exit animation

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#FBF6EF] transition-opacity duration-[1200ms] ease-in-out ${
        animationPhase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div
        className={`flex flex-col items-center transition-all duration-[1200ms] ease-out ${
          animationPhase === 'exit'
            ? 'opacity-0 scale-95'
            : 'opacity-100 scale-100 animate-fade-in-scale'
        }`}
      >
        {/* Logo - Slightly larger */}
        <img
          src={logo}
          alt="Prince Vacation Homes"
          className="w-48 h-48 md:w-64 md:h-64 object-contain"
        />

        {/* Brand Text */}
        <h1 className="mt-6 text-2xl md:text-3xl font-semibold text-[#3A2F25] tracking-tight">
          Prince Vacation Homes
        </h1>
      </div>
    </div>
  );
}
