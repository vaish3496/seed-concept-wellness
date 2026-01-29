import productImage from "@/assets/product-1.jpg";

const Story = () => {
  return (
    <section id="story" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={productImage}
              alt="The Seed Concept product collection"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Namma Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At The Seed Concept, we believe in the power of nature and tradition.
                Our journey began with a simple idea: to bring the goodness of
                homemade nutrition to every household.
              </p>
              <p>
                Every ingredient is carefully selected and processed minimally to
                preserve its natural benefits. We don't believe in artificial
                fortification or added sugars, just pure, wholesome nutrition the
                way nature intended.
              </p>
              <p>
                Our Health Mix is a testament to generations of wellness wisdom,
                combined with modern understanding of nutrition. It's not just a
                product; it's a daily ritual of self care.
              </p>
              <p className="text-foreground font-medium">
                From our kitchen to yours, with love and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
