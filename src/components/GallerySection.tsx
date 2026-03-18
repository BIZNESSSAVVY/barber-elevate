import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    alt: "Natural curls on Black woman",
  },
  {
    src: "https://images.unsplash.com/photo-1605497787865-5f2fbe3a9c4e?auto=format&fit=crop&w=800&q=80",
    alt: "Blonde balayage on White woman",
  },
  {
    src: "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?auto=format&fit=crop&w=800&q=80",
    alt: "Sleek lace front install",
  },
  {
    src: "https://images.unsplash.com/photo-1594824475317-ef78d8f8e1e4?auto=format&fit=crop&w=800&q=80",
    alt: "Precision cut and volume styling",
  },
  {
    src: "https://images.unsplash.com/photo-1603570419985-9f6b6c1e4c9a?auto=format&fit=crop&w=800&q=80",
    alt: "Elegant straight styling",
  },
  {
    src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
    alt: "Bridal updo look",
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80",
    alt: "Hair color transformation",
  },
  {
    src: "https://images.unsplash.com/photo-1598524374912-6b0b0e9d3c67?auto=format&fit=crop&w=800&q=80",
    alt: "Soft waves and extensions",
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