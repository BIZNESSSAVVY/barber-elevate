import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, Users, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "12,000+", label: "Happy Clients" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Calendar, value: "50k+", label: "Appointments" },
  { icon: Clock, value: "15min", label: "Avg. Wait Time" },
];

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="booking" className="py-24 md:py-32 bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Effortless Scheduling
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight mb-6">
              Book Your
              <br />
              <span className="italic">Experience</span>
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed max-w-md mb-12">
              Our integrated booking system makes scheduling seamless. Choose your
              service, select your stylist, and secure your preferred time—all in
              under 60 seconds.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-border bg-background p-5">
                  <stat.icon size={18} className="text-gold mb-3" />
                  <div className="font-display text-2xl text-foreground mb-1">{stat.value}</div>
                  <div className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Setmore Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-background border border-border p-8 min-h-[500px] flex flex-col">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                <div>
                  <h3 className="font-display text-xl text-foreground">Online Booking</h3>
                  <p className="font-body text-xs text-muted-foreground mt-1">Powered by Setmore</p>
                </div>
                <div className="w-8 h-8 bg-gold/10 flex items-center justify-center">
                  <Calendar size={16} className="text-gold" />
                </div>
              </div>

              {/* Placeholder for Setmore Widget */}
              <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-sm p-8 min-h-[350px]">
                <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mb-6">
                  <Calendar size={28} className="text-gold" />
                </div>
                <h4 className="font-display text-lg text-foreground mb-2">Setmore Booking Widget</h4>
                <p className="font-body text-xs text-muted-foreground text-center max-w-xs leading-relaxed mb-6">
                  Third-party Setmore scheduling widget will be embedded here.
                  Clients can view availability, select services, and book appointments in real-time.
                </p>
                <div className="font-body text-[10px] tracking-widest uppercase text-gold border border-gold/30 px-4 py-2">
                  Integration Placeholder
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-body text-xs text-muted-foreground">
                    Real-time availability synced with salon calendar
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
