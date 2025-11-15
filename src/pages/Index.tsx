import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ingredients from "@/components/Ingredients";
import ThreeW from "@/components/ThreeW";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Ingredients />
      <ThreeW />
      <Story />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
