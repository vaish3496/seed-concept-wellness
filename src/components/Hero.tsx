import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import productImage from "@/assets/product-2.jpg";
import { Ruler } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Healthy Mix
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-medium">
                Calcium & Iron Rich
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Homemade ingredients. No added sugar. No fortification.
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-2xl w-fit">
              <Ruler className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium text-foreground">
                For ages 6 to 90
              </span>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Buy Now
              </Button>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-foreground">₹299</span>
                <span className="text-lg text-muted-foreground">/ 500g</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Woman holding The Seed Concept health mix" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl overflow-hidden shadow-xl border-4 border-background hidden lg:block">
              <img 
                src={productImage} 
                alt="The Seed Concept product" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
