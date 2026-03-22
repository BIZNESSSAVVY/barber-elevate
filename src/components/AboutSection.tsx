import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about.png";

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
            transition={{ duration: 1 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Our Shop
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight mb-6">
              Built on Precision,
              <br />
              <span className="italic">Powered by Philly</span>
            </h2>

            <div className="space-y-4 font-body text-muted-foreground text-sm leading-relaxed">
              <p>
                Broad Street Cuts was built for one thing—clean, consistent cuts done right.
                No shortcuts. No rushed work. Just real barbers focused on detail every time you sit down.
              </p>
              <p>
                From sharp lineups to flawless fades, our team brings years of experience
                and a deep understanding of modern and classic styles. You walk in, we lock you in.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { value: "10+", label: "Years" },
                { value: "5", label: "Barbers" },
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
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 order-1 lg:order-2 relative"
          >
            <div className="overflow-hidden">
              <img
                src={aboutImage}
                alt="Philadelphia barbershop interior"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;