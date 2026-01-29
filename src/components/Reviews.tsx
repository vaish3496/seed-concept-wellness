import video1 from "../assets/seed concept videos/424ce236-180b-4b74-bfa4-a081083f6b8d.mp4";
import video2 from "../assets/seed concept videos/5ffbeead-8d30-47df-9836-cd3d3949bee5.mp4";
import video3 from "../assets/seed concept videos/WhatsApp Video 2026-01-28 at 8.24.42 PM.mp4";
import video4 from "../assets/seed concept videos/WhatsApp Video 2025-11-20 at 4.03.59 PM.mp4";

const Reviews = () => {
  const videos = [video1, video2, video3, video4];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="aspect-video rounded-3xl overflow-hidden bg-secondary/30 border border-border shadow-lg"
            >
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
