import IngredientCard from "./IngredientCard";

const ingredients = [
  {
    name: "Ragi (Sprouted)",
    icon: "🌾",
    benefits: [
      "Boosts hemoglobin",
      "Gives long-lasting energy",
      "Supports better mood & sleep",
      "Naturally gluten-free",
    ],
  },
  {
    name: "Almonds",
    icon: "🥜",
    benefits: [
      "Strengthens hair & nails",
      "Lowers bad cholesterol",
      "Protects against cell aging",
      "Supports brain function",
    ],
  },
  {
    name: "Pumpkin Seeds",
    icon: "🎃",
    benefits: [
      "Improves sleep quality",
      "Supports testosterone levels",
      "Aids bladder health",
      "Promotes cell growth",
    ],
  },
  {
    name: "Poppy Seeds",
    icon: "🌸",
    benefits: [
      "Cools the body",
      "Supports thyroid function",
      "Helps skin repair",
      "Reduces acidity",
    ],
  },
  {
    name: "Flax Seeds",
    icon: "🌻",
    benefits: [
      "Supports joint flexibility",
      "Feeds healthy gut bacteria",
      "Eases menopausal symptoms",
      "Helps liver detox",
    ],
  },
  {
    name: "Watermelon Seeds",
    icon: "🍉",
    benefits: [
      "Improves blood circulation",
      "Supports thyroid health",
      "Enhances skin elasticity",
      "Balances electrolytes",
    ],
  },
  {
    name: "Sesame Seeds",
    icon: "🌰",
    benefits: [
      "Supports liver health",
      "Reduces inflammation",
      "Maintains blood pressure",
      "Boosts nutrient absorption",
    ],
  },
];

const Ingredients = () => {
  return (
    <section id="ingredients" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ingredients & Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tap each ingredient to discover its powerful benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ingredients.map((ingredient) => (
            <IngredientCard key={ingredient.name} {...ingredient} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
