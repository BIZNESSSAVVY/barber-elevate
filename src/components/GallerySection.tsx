import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ✅ Real barber assets (must exist in /assets)
import shortLocks from "../assets/short-locks.png";
import midFade from "../assets/mid-fade.png";
import burstFade from "../assets/burst-fade.png";
import dropFade from "../assets/drop-fade.png";

const images = [
  {
    src: shortLocks,
    alt: "Short Locks + Temple Fade",
  },
  {
    src: midFade,
    alt: "Mid Fade",
  },
  {
    src: burstFade,
    alt: "Burst Fade Mohawk",
  },
  {
    src: dropFade,
    alt: "Drop Fade",
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
            Broad Street Work
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
            Precision in <span className="italic">Every Cut</span>
          </h2>
        </motion.div>

        {/* ✅ 2x2 grid for 4 images */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-[300px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
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