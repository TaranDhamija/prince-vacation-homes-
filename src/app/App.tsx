import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PremiumHeader } from "@/app/components/premium/PremiumHeader";
import { PremiumFooter } from "@/app/components/premium/PremiumFooter";
import { SplashScreen } from "@/app/components/SplashScreen";
import { HomePage } from "@/app/pages/HomePage";
import { AboutPage } from "@/app/pages/AboutPage";
import { PartnersPage } from "@/app/pages/PartnersPage";

export default function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    
    if (!hasSeenIntro) {
      setShowSplash(true);
    } else {
      // If splash already seen, show content immediately
      setShowContent(true);
    }
  }, []);

  const handleSplashComplete = () => {
    // Simple delay after splash completes, then show content
    setTimeout(() => {
      setShowContent(true);
    }, 150);
  };

  return (
    <BrowserRouter>
      {/* Splash Screen - renders above everything */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      {/* Main App Content - fades in after splash */}
      <div
        className="min-h-screen bg-[#FBF6EF]"
        style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(12px)',
          transition: showContent 
            ? 'opacity 800ms cubic-bezier(0.4, 0.0, 0.2, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)'
            : 'none',
        }}
      >
        <PremiumHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
        <PremiumFooter />
      </div>
    </BrowserRouter>
  );
}
