import { Video } from "lucide-react";

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear what our customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="aspect-video rounded-3xl bg-gradient-to-br from-secondary/30 to-accent/20 flex flex-col items-center justify-center space-y-4 border-2 border-dashed border-border p-8"
            >
              <Video className="w-16 h-16 text-muted-foreground" />
              <p className="text-muted-foreground text-center">
                Video Review Coming Soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
