import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1594824475317-ef78d8f8e1e4?auto=format&fit=crop&w=1200&q=80",
    alt: "Silk press on natural textured hair",
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury salon styling session",
  },
  {
    src: "https://images.unsplash.com/photo-1603570419985-9f6b6c1e4c9a?auto=format&fit=crop&w=1200&q=80",
    alt: "Sleek straight styling",
  },
  {
    src: "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?auto=format&fit=crop&w=1200&q=80",
    alt: "Custom wig install",
  },
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    alt: "Defined natural curls",
  },
  {
    src: "https://images.unsplash.com/photo-1598524374912-6b0b0e9d3c67?auto=format&fit=crop&w=1200&q=80",
    alt: "Soft waves with extensions",
  },
];

const featured =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80";

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Our Work
          </span>

          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
            Real Results.
            <br />
            <span className="italic">Real Confidence.</span>
          </h2>

          <p className="mt-6 text-muted-foreground text-sm">
            From silk presses to installs, every look is tailored, precise, and designed to last.
          </p>
        </motion.div>

        {/* Featured Image (HIGH CONVERSION) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-8 relative overflow-hidden rounded-2xl"
        >
          <img
            src={featured}
            alt="Luxury salon experience"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-8 left-8 text-white max-w-md">
            <h3 className="text-2xl font-display mb-2">
              Luxury Experience
            </h3>
            <p className="text-sm opacity-90">
              Precision styling in a space designed for comfort, beauty, and confidence.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-xl group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[240px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs tracking-wide opacity-90">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;