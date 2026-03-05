import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import CommunityBanner from "@/components/landing/CommunityBanner";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import Comparison from "@/components/landing/Comparison";
import WhyNow from "@/components/landing/WhyNow";
import Waitlist from "@/components/landing/Waitlist";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <Hero />
      <CommunityBanner />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Comparison />
      <WhyNow />
      <Waitlist />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
