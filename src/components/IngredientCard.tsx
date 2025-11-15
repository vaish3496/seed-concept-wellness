import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface IngredientCardProps {
  name: string;
  benefits: string[];
  icon: string;
}

const IngredientCard = ({ name, benefits, icon }: IngredientCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "bg-card rounded-3xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer border border-border",
        isOpen && "shadow-xl"
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-2xl">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        </div>
        <ChevronDown
          className={cn(
            "w-6 h-6 text-primary transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </div>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 pt-2">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <span className="text-primary mt-1">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IngredientCard;
