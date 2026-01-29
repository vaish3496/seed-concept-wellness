import { Sparkles, MapPin, Clock } from "lucide-react";

const ThreeW = () => {
  return (
    <section id="three-w" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why, Where, When
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center space-y-6 p-8 rounded-3xl bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">WHY</h3>
            <p className="text-muted-foreground leading-relaxed">
              This product blends powerful superfoods to naturally boost energy,
              digestion, and overall wellness. A wholesome, everyday nourishment
              and a healthier replacement for coffee.
            </p>
          </div>

          <div className="text-center space-y-6 p-8 rounded-3xl bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 rounded-full bg-accent/30 flex items-center justify-center mx-auto">
              <MapPin className="w-10 h-10 text-earth-brown" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">WHERE</h3>
            <p className="text-muted-foreground leading-relaxed">
              Coarse, homemade style blend that leaves light residue. No
              over-processing. Pure, real, and authentic, just like homemade.
            </p>
          </div>

          <div className="text-center space-y-6 p-8 rounded-3xl bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto">
              <Clock className="w-10 h-10 text-sage-green" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">WHEN</h3>
            <p className="text-muted-foreground leading-relaxed">
              Enjoy morning or night with water or milk. Works as a morning
              coffee replacement. Visit our Instagram to explore ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeW;
