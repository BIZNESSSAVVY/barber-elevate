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

            <div className="flex flex-col gap-4">
              
              {/* Address / Get Directions */}
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=1520+Walnut+Street+Philadelphia+PA+19102" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between p-6 rounded-lg border border-primary-foreground/5 bg-primary-foreground/[0.02] hover:bg-primary-foreground/[0.05] transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold mb-1 font-medium">Get Directions</div>
                    <div className="text-sm font-light">1520 Walnut St, Philadelphia, PA 19102</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-primary-foreground/20 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>

              {/* Phone / Call Now */}
              <a 
                href="tel:2155550134" 
                className="group flex items-center justify-between p-6 rounded-lg border border-primary-foreground/5 bg-primary-foreground/[0.02] hover:bg-primary-foreground/[0.05] transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold mb-1 font-medium">Call Now</div>
                    <div className="text-sm font-light">(215) 555-0134</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-primary-foreground/20 group-hover:text-gold transition-all" />
              </a>

              {/* Email */}
              <a 
                href="mailto:book@broadstreetcuts.com" 
                className="group flex items-center justify-between p-6 rounded-lg border border-primary-foreground/5 bg-primary-foreground/[0.02] hover:bg-primary-foreground/[0.05] transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold mb-1 font-medium">Email Us</div>
                    <div className="text-sm font-light">book@broadstreetcuts.com</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-primary-foreground/20 group-hover:text-gold transition-all" />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/broadstreetcuts/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between p-6 rounded-lg border border-primary-foreground/5 bg-primary-foreground/[0.02] hover:bg-primary-foreground/[0.05] transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold mb-1 font-medium">Follow Us</div>
                    <div className="text-sm font-light">@broadstreetcuts</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-primary-foreground/20 group-hover:text-gold transition-all" />
              </a>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex justify-between items-center">
        <div className="text-xl font-display uppercase tracking-tighter">
          BROAD<span className="text-gold italic ml-1">Street Cuts</span>
        </div>
        <div className="text-xs text-primary-foreground/40 font-body">
          © 2026 Broad Street Cuts. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default ContactFooter;