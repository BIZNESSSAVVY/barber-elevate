import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Instagram, ArrowUpRight } from "lucide-react";

const ContactFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">

      {/* CTA */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                Book Your Appointment
              </span>

              <h2 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6">
                Let's Create
                <br />
                <span className="italic text-gold">Your Next Look</span>
              </h2>

              <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-md">
                Appointments are limited. Secure your spot and experience one of Philadelphia’s
                most refined beauty studios.
              </p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-primary-foreground/10 pb-6">
                <div className="flex items-center gap-4">
                  <MapPin size={16} className="text-gold" />
                  <div>
                    <div className="text-sm">1520 Walnut Street</div>
                    <div className="text-xs text-primary-foreground/50">
                      Philadelphia, PA 19102
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} />
              </div>

              <div className="flex items-center justify-between border-b border-primary-foreground/10 pb-6">
                <div className="flex items-center gap-4">
                  <Phone size={16} className="text-gold" />
                  <div className="text-sm">(215) 555-0198</div>
                </div>
                <ArrowUpRight size={16} />
              </div>

              <div className="flex items-center justify-between border-b border-primary-foreground/10 pb-6">
                <div className="flex items-center gap-4">
                  <Mail size={16} className="text-gold" />
                  <div className="text-sm">book@maisonbellephilly.com</div>
                </div>
                <ArrowUpRight size={16} />
              </div>

              <div className="flex items-center justify-between pb-6">
                <div className="flex items-center gap-4">
                  <Instagram size={16} className="text-gold" />
                  <div className="text-sm">@maisonbellephilly</div>
                </div>
                <ArrowUpRight size={16} />
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex justify-between items-center">
        <div className="text-xl font-display">
          MAISON<span className="text-gold italic ml-1">Belle</span>
        </div>
        <div className="text-xs text-primary-foreground/40">
          © 2026 Maison Belle. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default ContactFooter;