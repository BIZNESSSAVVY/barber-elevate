import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.png";

const HeroSection = () => {

  const handleScrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("booking");

    if (el) {
      const yOffset = -100;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen pt-20 pb-28 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-0 min-h-[calc(100vh-5rem)] items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative h-[50vh] lg:h-[85vh] overflow-hidden"
          >
            <img
              src={heroImage}
              alt="Barbershop in Philadelphia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-7 lg:pl-16 py-12 lg:py-0 flex flex-col justify-center">

            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6 block"
            >
              Philadelphia • Modern Barbershop Experience
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight text-foreground mb-8"
            >
              Sharp Cuts.
              <br />
              <span className="italic text-gold">Clean Fades.</span>
              <br />
              Real Confidence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-muted-foreground text-base leading-relaxed max-w-md mb-10"
            >
              At Broad Street Cuts, every detail matters. Precision fades, sharp lineups,
              and expert grooming—done right, every time.
            </motion.p>

            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-card border border-border p-6 max-w-sm relative z-10"
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
                <span className="font-display text-lg text-foreground">
                  Today, 1:45 PM
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Clock size={14} className="text-gold" />
                  <span className="font-body">Wait Time</span>
                </div>
                <span className="font-display text-lg text-foreground">
                  ~10 min
                </span>
              </div>

              <button
                onClick={handleScrollToBooking}
                className="group flex items-center justify-center gap-2 w-full py-3 bg-gold text-accent-foreground font-body text-xs tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
              >
                Book Your Cut
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-card/50 backdrop-blur-sm py-3 overflow-hidden">
        <div className="animate-ticker whitespace-nowrap flex gap-12">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {[
                "Skin Fades",
                "Taper Fades",
                "Beard Grooming",
                "Hot Towel Shaves",
                "Lineups",
                "Kids Cuts",
                "Shape Ups",
                "Classic Cuts",
              ].map((item) => (
                <span
                  key={item + i}
                  className="font-display text-sm italic tracking-wide text-muted-foreground"
                >
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