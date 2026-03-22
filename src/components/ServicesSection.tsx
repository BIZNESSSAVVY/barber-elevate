import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

// ✅ Barber images (must exist in /assets)
import haircut from "../assets/haircut.png";
import beard from "../assets/beard-grooming.png";
import premium from "../assets/premium-service.png";

const services = [
  {
    title: "Precision Haircuts",
    subtitle: "Fades · Tapers · Lineups",
    description:
      "Clean fades, sharp lineups, and modern cuts tailored to your style. Consistent, detailed, and always on point.",
    image: haircut,
    price: "From $40",
  },
  {
    title: "Beard Grooming",
    subtitle: "Shape · Line · Condition",
    description:
      "Expert beard shaping and lineups with hot towel treatment and premium products for a sharp, polished finish.",
    image: beard,
    price: "From $25",
  },
  {
    title: "Full Service Experience",
    subtitle: "Cut · Beard · Hot Towel",
    description:
      "Complete barbershop experience including haircut, beard grooming, and hot towel treatment. The full reset.",
    image: premium,
    price: "From $65",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeService, setActiveService] = useState<any>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Services
          </span>
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            Built For Precision
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => setActiveService(service)}
              className="cursor-pointer group"
            >
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl mb-1">{service.title}</h3>
                  <p className="text-sm opacity-80">{service.price}</p>
                </div>

                <div className="absolute top-4 right-4 text-white">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {activeService && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
            onClick={() => setActiveService(null)}
          >
            <div
              className="bg-white max-w-lg w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-[200px] object-cover mb-6"
              />

              <h3 className="text-2xl mb-2">{activeService.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {activeService.description}
              </p>

              <div className="text-lg font-semibold mb-6">
                {activeService.price}
              </div>

              <a
                href="#booking"
                className="block text-center bg-black text-white py-3"
              >
                Book This Service
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;