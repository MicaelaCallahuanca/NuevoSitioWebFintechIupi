import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import SocialProof from "@/components/landing/SocialProof";
import Waitlist from "@/components/landing/Waitlist";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Benefits />
      <SocialProof />
      <Waitlist />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
