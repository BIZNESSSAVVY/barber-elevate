import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Instagram, ArrowUpRight, ExternalLink } from "lucide-react";

const ContactFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const item =
    "group flex items-center justify-between px-6 py-5 border border-primary-foreground/[0.07] hover:border-gold/35 bg-primary-foreground/[0.02] hover:bg-gold/[0.04] transition-all duration-300";

  const icon =
    "w-10 h-10 rounded-full border border-gold/20 bg-gold/[0.06] flex items-center justify-center text-gold group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300 shrink-0";

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground overflow-hidden">

      {/* Top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="border-b border-primary-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20"
          >

            {/* LEFT CTA */}
            <div>

              <div className="flex items-center gap-3 mb-6">
                <span className="block w-7 h-px bg-gold/60" />
                <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold">
                  Book Your Cut
                </span>
              </div>

              <h2 className="font-display text-5xl md:text-6xl font-light leading-[1.05] tracking-tight mb-6">
                Stay Sharp.
                <br />
                <span className="italic text-gold">Book Your Seat</span>
              </h2>

              <p className="font-body text-sm text-primary-foreground/55 leading-relaxed max-w-sm mb-10">
                Spots fill fast. Lock in your appointment at Broad Street Cuts
                and walk out with a clean, confident look every time.
              </p>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gold/20" />
                <div className="w-1.5 h-1.5 bg-gold/70 rotate-45" />
                <div className="flex-1 h-px bg-gold/20" />
              </div>

            </div>

            {/* RIGHT CONTACT BLOCKS */}
            <div className="flex flex-col gap-1 self-center">

              {/* Address */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1520+Walnut+Street+Philadelphia+PA+19102"
                target="_blank"
                rel="noopener noreferrer"
                className={item}
              >
                <div className="flex items-center gap-5">
                  <div className={icon}>
                    <MapPin size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-body text-[9.5px] uppercase tracking-[0.3em] text-gold mb-1">
                      Get Directions
                    </div>
                    <div className="font-body text-sm font-light">
                      1520 Walnut St, Philadelphia, PA
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={14} strokeWidth={1.5} className="text-primary-foreground/20 group-hover:text-gold transition" />
              </a>

              {/* Phone */}
              <a href="tel:2155550134" className={item}>
                <div className="flex items-center gap-5">
                  <div className={icon}>
                    <Phone size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-body text-[9.5px] uppercase tracking-[0.3em] text-gold mb-1">
                      Call Now
                    </div>
                    <div className="font-body text-sm font-light">
                      (215) 555-0134
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={14} strokeWidth={1.5} className="text-primary-foreground/20 group-hover:text-gold transition" />
              </a>

              {/* Email */}
              <a href="mailto:book@broadstreetcuts.com" className={item}>
                <div className="flex items-center gap-5">
                  <div className={icon}>
                    <Mail size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-body text-[9.5px] uppercase tracking-[0.3em] text-gold mb-1">
                      Email Us
                    </div>
                    <div className="font-body text-sm font-light">
                      book@broadstreetcuts.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={14} strokeWidth={1.5} className="text-primary-foreground/20 group-hover:text-gold transition" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/broadstreetcuts/"
                target="_blank"
                rel="noopener noreferrer"
                className={item}
              >
                <div className="flex items-center gap-5">
                  <div className={icon}>
                    <Instagram size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-body text-[9.5px] uppercase tracking-[0.3em] text-gold mb-1">
                      Follow Us
                    </div>
                    <div className="font-body text-sm font-light">
                      @broadstreetcuts
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={14} strokeWidth={1.5} className="text-primary-foreground/20 group-hover:text-gold transition" />
              </a>

              {/* PORTFOLIO SECTION */}
              <a
                href="https://robert-bolling-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-5 px-6 py-6 mt-2 border border-gold/30 hover:border-gold/60 bg-gold/[0.04] hover:bg-gold/[0.08] transition-all duration-300"
              >

                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

                <div className="w-11 h-11 rounded-full border border-gold/40 bg-gold/[0.1] flex items-center justify-center">
                  <span className="font-display text-base italic text-gold">RB</span>
                </div>

                <div className="flex-1">
                  <div className="font-body text-[9px] uppercase tracking-[0.35em] text-gold/70 mb-1">
                    Website Designed & Built By
                  </div>

                  <div className="font-display text-base font-light">
                    Robert Bolling
                  </div>

                  <div className="font-body text-xs text-primary-foreground/45">
                    View Portfolio
                  </div>
                </div>

                <ExternalLink
                  size={15}
                  strokeWidth={1.5}
                  className="text-primary-foreground/25 group-hover:text-gold transition"
                />

              </a>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex justify-between items-center">
        <div className="font-display text-xl uppercase tracking-tighter">
          BROAD<span className="text-gold italic ml-1">Street Cuts</span>
        </div>
        <div className="font-body text-xs text-primary-foreground/40">
          © 2026 Broad Street Cuts. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default ContactFooter;