"use client"

import { Navigation } from "@/components/organisms/Navigation"
import { NoiseBackground } from "@/components/organisms/NoiseBackground"
import { HeroSection } from "@/components/organisms/HeroSection"
import { ProfileSection } from "@/components/organisms/ProfileSection"
import { ApproachSection } from "@/components/organisms/ApproachSection"
import { VideoSection } from "@/components/organisms/VideoSection"
import { WorksSection } from "@/components/organisms/WorksSection"
import { ContactSection } from "@/components/organisms/ContactSection"
import { FooterWorks } from "@/components/organisms/FooterWorks"
import { CustomCursor } from "@/components/molecules/CustomCursor"
import { NumberCounter } from "@/components/molecules/NumberCounter"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <NoiseBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Number Counter */}
      <NumberCounter />
      
      {/* Close Button */}
      <div className="fixed top-5 right-10 text-white text-sm z-[1001]">
        {"{CLOSE}"}
      </div>

      {/* Sections */}
      <HeroSection />
      <ProfileSection />
      <ApproachSection />
      <VideoSection />
      <WorksSection />
      <ContactSection />
      <FooterWorks />

      {/* Bottom Gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none z-50" />
    </div>
  )
}
