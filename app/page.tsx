import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Herosection";
import StatsSection from "@/components/StatsSection";
import PreventionSection from "@/components/PreventionSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PreventionSection />
      <AppointmentSection />
      <Footer />
    </div>
  );
}