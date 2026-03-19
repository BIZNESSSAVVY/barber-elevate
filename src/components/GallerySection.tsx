import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Importing from assets folder as requested
import img1 from "../assets/silk-press.png";
import img2 from "../assets/knotless-braids.png";
import img3 from "../assets/microlinks-install.jpg";
import img4 from "../assets/tapered-fade.jpg";
import img5 from "../assets/butterfly-locs.jpg";
import img6 from "../assets/curly-wash-n-go.jpg";
import img7 from "../assets/sleek-ponytail.jpg";
import img8 from "../assets/tribal-braids.jpg";

const images = [
  { src: img1, alt: "Signature Silk Press" },
  { src: img2, alt: "Luxury Knotless Braids" },
  { src: img3, alt: "Seamless Microlinks" },
  { src: img4, alt: "Precision Tapered Cut" },
  { src: img5, alt: "Distressed Butterfly Locs" },
  { src: img6, alt: "Defined Coily Wash & Go" },
  { src: img7, alt: "Sleek Extended Pony" },
  { src: img8, alt: "Boho Tribal Designs" },
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
            Philly Style, <span className="italic">Unfiltered</span>
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
                className="w-full h-[280px] md:h-[340px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-[10px] md:text-xs tracking-widest font-bold uppercase">
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