import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import serviceHair from "@/assets/service-hair.jpg";
import serviceSkin from "@/assets/service-skin.jpg";
import serviceNails from "@/assets/service-nails.jpg";

const services = [
  {
    title: "Hair Artistry",
    subtitle: "Cut · Color · Style",
    description: "Precision cuts and bespoke color from master stylists who understand your vision.",
    image: serviceHair,
    price: "From $85",
    featured: true,
  },
  {
    title: "Skin Rituals",
    subtitle: "Facials · Peels · Therapy",
    description: "Clinical-grade treatments meets holistic wellness for radiant, healthy skin.",
    image: serviceSkin,
    price: "From $120",
    featured: false,
  },
  {
    title: "Nail Couture",
    subtitle: "Manicure · Pedicure · Art",
    description: "Meticulous nail artistry using premium, non-toxic formulations.",
    image: serviceNails,
    price: "From $55",
    featured: false,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${
        service.featured ? "md:row-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${service.featured ? "h-full min-h-[500px]" : "h-[320px]"}`}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold-light mb-2 block">
            {service.subtitle}
          </span>
          <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">
            {service.title}
          </h3>
          <p className="font-body text-sm text-primary-foreground/70 max-w-xs mb-4 leading-relaxed">
            {service.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-display text-lg text-gold">{service.price}</span>
            <div className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
              <ArrowUpRight size={16} className="text-primary-foreground group-hover:text-accent-foreground transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Our Craft
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
              Services Designed
              <br />
              <span className="italic">for You</span>
            </h2>
          </div>
          <p className="font-body text-sm text-muted-foreground max-w-sm leading-relaxed">
            Each service is tailored to your unique needs, using only
            the finest products and techniques in the industry.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
