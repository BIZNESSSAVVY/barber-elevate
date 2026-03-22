import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">

          {/* Text Content */}
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

            <div className="space-y-4 font-body text-muted-foreground text-sm leading-relaxed max-w-lg">
              <p>
                Broad Street Cuts was built for one thing—clean, consistent cuts done right. 
                No shortcuts. No rushed work. Just real barbers focused on detail every time you sit down.
              </p>
              <p>
                From sharp lineups to flawless fades, our team brings years of experience 
                and a deep understanding of modern and classic styles. You walk in, we lock you in.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 max-w-sm">
              {[
                { value: "10+", label: "Years" },
                { value: "5", label: "Barbers" },
                { value: "200+", label: "5-Star Reviews" },
              ].map((stat) => (
                <div key={stat.label} className="min-w-fit">
                  <div className="font-display text-2xl sm:text-3xl text-foreground whitespace-nowrap">
                    {stat.value}
                  </div>
                  <div className="font-body text-[10px] tracking-widest uppercase text-muted-foreground mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center p-4 lg:p-8"
          >
            {/* Added a subtle gradient container to hold the full image and soften the contain effect */}
            <div className="relative w-full rounded-sm shadow-xl p-3 bg-gradient-to-br from-black/5 via-black/2 to-black/5">
              <img
                src={aboutImage}
                alt="Philadelphia barbershop interior"
                className="w-full h-auto object-contain object-center scale-95 origin-center"
              />
              {/* Subtle Overlay to match branding */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none rounded-sm" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;