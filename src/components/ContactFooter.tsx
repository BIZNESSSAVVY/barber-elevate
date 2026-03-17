import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Instagram, ArrowUpRight } from "lucide-react";

const ContactFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* Contact CTA */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
                Get in Touch
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-light leading-tight mb-6">
                Let's Create
                <br />
                <span className="italic text-gold">Something Beautiful</span>
              </h2>
              <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-md">
                Whether you're looking to book an appointment or explore a partnership,
                we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="#"
                className="group flex items-center justify-between border-b border-primary-foreground/10 pb-6 hover:border-gold/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <MapPin size={16} className="text-gold" />
                  <div>
                    <div className="font-body text-sm">123 Beauty Avenue</div>
                    <div className="font-body text-xs text-primary-foreground/50">
                      New York, NY 10001
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-primary-foreground/30 group-hover:text-gold transition-colors"
                />
              </a>

              <a
                href="tel:+12125551234"
                className="group flex items-center justify-between border-b border-primary-foreground/10 pb-6 hover:border-gold/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Phone size={16} className="text-gold" />
                  <div className="font-body text-sm">(212) 555-1234</div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-primary-foreground/30 group-hover:text-gold transition-colors"
                />
              </a>

              <a
                href="mailto:hello@maisonbelle.com"
                className="group flex items-center justify-between border-b border-primary-foreground/10 pb-6 hover:border-gold/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Mail size={16} className="text-gold" />
                  <div className="font-body text-sm">hello@maisonbelle.com</div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-primary-foreground/30 group-hover:text-gold transition-colors"
                />
              </a>

              <a
                href="#"
                className="group flex items-center justify-between pb-6 hover:border-gold/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Instagram size={16} className="text-gold" />
                  <div className="font-body text-sm">@maisonbelle</div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-primary-foreground/30 group-hover:text-gold transition-colors"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="font-display text-xl tracking-wide">
            MAISON<span className="text-gold italic ml-1">Belle</span>
          </a>
          <div className="font-body text-xs text-primary-foreground/40">
            © 2026 Maison Belle. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-gold transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
