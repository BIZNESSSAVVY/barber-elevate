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
                Book Your Cut
              </span>

              <h2 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6">
                Stay Sharp.
                <br />
                <span className="italic text-gold">Book Your Seat</span>
              </h2>

              <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-md">
                Spots fill fast. Lock in your appointment at Broad Street Cuts and walk out
                with a clean, confident look every time.
              </p>
            </div>

            <div className="space-y-6">
              
              <a href="https://maps.app.goo.gl/YourActualGoogleMapsLinkHere" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b border-primary-foreground/10 pb-6 group">
                <div className="flex items-center gap-4">
                  <MapPin size={16} className="text-gold" />
                  <div>
                    <div className="text-sm">1520 Walnut Street</div>
                    <div className="text-xs text-primary-foreground/50">
                      Philadelphia, PA 19102
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-primary-foreground/30 group-hover:text-gold transition-colors" />
              </a>

              <a href="tel:2155550134" className="flex items-center justify-between border-b border-primary-foreground/10 pb-6 group">
                <div className="flex items-center gap-4">
                  <Phone size={16} className="text-gold" />
                  <div className="text-sm">(215) 555-0134</div>
                </div>
                <ArrowUpRight size={16} className="text-primary-foreground/30 group-hover:text-gold transition-colors" />
              </a>

              <a href="mailto:book@broadstreetcuts.com" className="flex items-center justify-between border-b border-primary-foreground/10 pb-6 group">
                <div className="flex items-center gap-4">
                  <Mail size={16} className="text-gold" />
                  <div className="text-sm">book@broadstreetcuts.com</div>
                </div>
                <ArrowUpRight size={16} className="text-primary-foreground/30 group-hover:text-gold transition-colors" />
              </a>

              <a href="https://www.instagram.com/broadstreetcuts/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between pb-6 group">
                <div className="flex items-center gap-4">
                  <Instagram size={16} className="text-gold" />
                  <div className="text-sm">@broadstreetcuts</div>
                </div>
                <ArrowUpRight size={16} className="text-primary-foreground/30 group-hover:text-gold transition-colors" />
              </a>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex justify-between items-center">
        <div className="text-xl font-display">
          BROAD<span className="text-gold italic ml-1">Street Cuts</span>
        </div>
        <div className="text-xs text-primary-foreground/40">
          © 2026 Broad Street Cuts. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default ContactFooter;