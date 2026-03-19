import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Importing the assets directly so they load from src/assets
import silkPress from "../assets/silk-press.png";
import knotlessBraids from "../assets/knotless-braids.png";
import microlinks from "../assets/microlinks-install.png";
import taperedFade from "../assets/tapered-fade.png";
import butterflyLocs from "../assets/butterfly-locs.png";
import curlyWash from "../assets/curly-wash-n-go.png";
import sleekPony from "../assets/sleek-ponytail.png";
import tribalBraids from "../assets/tribal-braids.png";

const images = [
  {
    src: silkPress,
    alt: "Signature Silk Press",
  },
  {
    src: knotlessBraids,
    alt: "Luxury Knotless Braids",
  },
  {
    src: microlinks,
    alt: "Seamless Microlinks",
  },
  {
    src: taperedFade,
    alt: "Precision Tapered Cut",
  },
  {
    src: butterflyLocs,
    alt: "Distressed Butterfly Locs",
  },
  {
    src: curlyWash,
    alt: "Defined Coily Wash & Go",
  },
  {
    src: sleekPony,
    alt: "Sleek Extended Pony",
  },
  {
    src: tribalBraids,
    alt: "Boho Tribal Designs",
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            The Philly Standard
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
            Artistry in <span className="italic">Every Texture</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                loading="lazy"
                className="w-full h-[280px] md:h-[340px] object-contain bg-black transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs tracking-wide font-medium opacity-90">
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