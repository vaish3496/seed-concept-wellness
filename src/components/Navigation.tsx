import { Home, Leaf, Lightbulb, BookOpen, Star } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Seed Concept" className="h-12 w-12" />
            <span className="text-xl font-semibold text-foreground hidden sm:inline">
              Seed Concept
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
            <button
              onClick={() => scrollToSection("ingredients")}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Leaf className="w-4 h-4" />
              <span className="hidden sm:inline">Ingredients</span>
            </button>
            <button
              onClick={() => scrollToSection("three-w")}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Lightbulb className="w-4 h-4" />
              <span className="hidden sm:inline">3W</span>
            </button>
            <button
              onClick={() => scrollToSection("story")}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Nammastory</span>
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Reviews</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
