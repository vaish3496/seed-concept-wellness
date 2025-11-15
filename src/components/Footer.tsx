import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Seed Concept" className="h-12 w-12" />
              <span className="text-xl font-semibold text-foreground">
                Seed Concept
              </span>
            </div>
            <p className="text-muted-foreground">
              Natural wellness through homemade nutrition
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#ingredients"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Ingredients
              </a>
              <a
                href="#three-w"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                3W
              </a>
              <a
                href="#story"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Connect With Us
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@seedconcept</span>
              </a>
              <a
                href="mailto:hello@seedconcept.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@seedconcept.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 Seed Concept. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
