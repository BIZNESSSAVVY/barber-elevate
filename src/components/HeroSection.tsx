import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-0 min-h-[calc(100vh-5rem)] items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative h-[50vh] lg:h-[85vh] overflow-hidden"
          >
            <img
              src={heroImage}
              alt="Luxury salon interior"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <div className="lg:col-span-7 lg:pl-16 py-12 lg:py-0 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block">
                Redefining Beauty Since 2024
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight text-foreground mb-8"
            >
              Where
              <br />
              <span className="italic text-gold">Artistry</span>
              <br />
              Meets You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-muted-foreground text-base leading-relaxed max-w-md mb-10"
            >
              Experience bespoke beauty services crafted for the modern individual.
              Every visit is a journey, every detail considered.
            </motion.p>

            {/* Quick Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-card border border-border p-6 max-w-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                  Now Accepting Appointments
                </span>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Calendar size={14} className="text-gold" />
                  <span className="font-body">Next Available</span>
                </div>
                <span className="font-display text-lg text-foreground">Today, 2:30 PM</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Clock size={14} className="text-gold" />
                  <span className="font-body">Wait Time</span>
                </div>
                <span className="font-display text-lg text-foreground">~15 min</span>
              </div>

              <a
                href="#booking"
                className="group flex items-center justify-center gap-2 w-full py-3 bg-gold text-accent-foreground font-body text-xs tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
              >
                Reserve Your Spot
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-card/50 backdrop-blur-sm py-3 overflow-hidden">
        <div className="animate-ticker whitespace-nowrap flex gap-12">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {["Hair Artistry", "Skincare Rituals", "Nail Couture", "Bridal Packages", "Color Correction", "Scalp Therapy", "Lash Extensions", "Makeup Design"].map((item) => (
                <span key={item + i} className="font-display text-sm italic tracking-wide text-muted-foreground">
                  {item} <span className="text-gold mx-4">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
