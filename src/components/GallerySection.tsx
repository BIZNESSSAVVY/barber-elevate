import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  {
    src: "https://source.unsplash.com/600x800/?black,woman,hairstyle,salon",
    alt: "Silk press on natural hair",
  },
  {
    src: "https://source.unsplash.com/600x800/?african,american,woman,hair,beauty",
    alt: "Defined curls and hydration treatment",
  },
  {
    src: "https://source.unsplash.com/600x800/?latina,woman,hair,beauty,salon",
    alt: "Soft waves and volume styling",
  },
  {
    src: "https://source.unsplash.com/600x800/?hispanic,woman,hairstyle,salon",
    alt: "Color and gloss finish",
  },
  {
    src: "https://source.unsplash.com/600x800/?white,woman,blonde,hair,salon",
    alt: "Blonde balayage styling",
  },
  {
    src: "https://source.unsplash.com/600x800/?brunette,woman,hair,beauty",
    alt: "Luxury blowout styling",
  },
  {
    src: "https://source.unsplash.com/600x800/?black,woman,silk,press,hair",
    alt: "Sleek silk press finish",
  },
  {
    src: "https://source.unsplash.com/600x800/?diverse,women,beauty,hair",
    alt: "Modern salon styling",
  },
];
const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Our Work
          </span>

          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
            Hair That
            <br />
            <span className="italic">Turns Heads</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />

              {/* Hover Text */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-sm font-body tracking-wide">
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