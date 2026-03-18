import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, Users, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "12,000+", label: "Happy Clients" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Calendar, value: "50k+", label: "Appointments" },
  { icon: Clock, value: "15 min", label: "Avg. Wait Time" },
];

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="booking" className="py-24 md:py-32 bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Easy Booking
            </span>

            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight mb-6">
              Book Your
              <br />
              <span className="italic">Appointment</span>
            </h2>

            <p className="font-body text-muted-foreground text-base leading-relaxed max-w-md mb-12">
              Schedule your next visit in seconds. Choose your service, pick your stylist,
              and lock in your time instantly.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-border bg-background p-5">
                  <stat.icon size={18} className="text-gold mb-3" />
                  <div className="font-display text-2xl text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Booking Embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-background border border-border p-6 md:p-8">

              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                <div>
                  <h3 className="font-display text-xl text-foreground">
                    Online Booking
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    Instant scheduling
                  </p>
                </div>
                <Calendar size={18} className="text-gold" />
              </div>

              {/* ✅ WORKING SETMORE IFRAME */}
              <div className="w-full h-[500px] border border-border overflow-hidden">
                <iframe
                  src="https://maisonbelle.setmore.com"
                  className="w-full h-full border-0"
                  title="Booking"
                />
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-muted-foreground">
                    Real-time availability • Instant confirmation
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;