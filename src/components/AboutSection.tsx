import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-salon.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight mb-6">
              Crafted with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground text-sm leading-relaxed">
              <p>
                Founded on the belief that beauty is deeply personal, Maison Belle
                creates an environment where expertise meets empathy. Every detail—from
                our curated product lines to our architectural space—is designed to
                elevate your experience.
              </p>
              <p>
                Our team of award-winning stylists brings decades of combined experience
                from fashion weeks, editorial shoots, and the world's most prestigious
                salons.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { value: "15+", label: "Years" },
                { value: "8", label: "Artists" },
                { value: "200+", label: "5-Star Reviews" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-foreground">{stat.value}</div>
                  <div className="font-body text-[10px] tracking-widest uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 relative"
          >
            <div className="overflow-hidden">
              <img
                src={aboutImage}
                alt="Salon interior"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 bg-gold p-6 hidden lg:block">
              <div className="font-display text-4xl text-accent-foreground">15</div>
              <div className="font-body text-[10px] tracking-widest uppercase text-accent-foreground/80">
                Years of<br />Excellence
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
