import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, X, Calendar } from "lucide-react";

// ✅ Barber images (Ensure these paths are correct in your local /assets)
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
    bookingLink: "https://barberelevate.setmore.com/1e45bd60-7535-45df-9080-99ba62a21afd/service/dd815e37-c7c8-4bbc-928b-6c73845e0299",
  },
  {
    title: "Beard Grooming",
    subtitle: "Shape · Line · Condition",
    description:
      "Expert beard shaping and lineups with hot towel treatment and premium products for a sharp, polished finish.",
    image: beard,
    price: "From $25",
    bookingLink: "https://barberelevate.setmore.com/1e45bd60-7535-45df-9080-99ba62a21afd/service/d647fee0-4ef3-471d-bdcb-e5a13dd50ac8",
  },
  {
    title: "Full Service Experience",
    subtitle: "Cut · Beard · Hot Towel",
    description:
      "Complete barbershop experience including haircut, beard grooming, and hot towel treatment. The full reset.",
    image: premium,
    price: "From $65",
    bookingLink: "https://barberelevate.setmore.com/1e45bd60-7535-45df-9080-99ba62a21afd/service/e735f968-d8b5-4483-abee-0cb09bbff2e7",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeService, setActiveService] = useState(null);

  const handleBooking = (link) => {
    setActiveService(null); // Close modal immediately
    window.open(link, "_blank", "noopener,noreferrer"); // Open Setmore in new tab
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold mb-4 block font-medium">
            Services
          </span>
          <h2 className="text-4xl md:text-6xl font-light mb-4">
            Built For <span className="italic font-normal">Precision</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => setActiveService(service)}
              className="cursor-pointer group relative bg-black overflow-hidden rounded-sm shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-[450px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition duration-700"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

                {/* Info Overlay */}
                <div className="absolute bottom-0 p-8 text-white w-full">
                  <p className="text-gold text-xs uppercase tracking-widest mb-2 font-semibold">
                    {service.subtitle}
                  </p>
                  <h3 className="text-3xl mb-2 font-display">{service.title}</h3>
                  <p className="text-lg opacity-90 text-gold/90 font-medium">{service.price}</p>
                </div>

                {/* Explicit Booking Prompt (The "Click Me") */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Calendar size={18} />
                    View Details
                  </div>
                </div>

                <div className="absolute top-6 right-6 text-gold opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all">
                  <ArrowUpRight size={28} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL with AnimatePresence for smooth fade/pop */}
        <AnimatePresence>
          {activeService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
              onClick={() => setActiveService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#111] border border-white/10 max-w-2xl w-full p-0 relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-gold hover:text-black transition-all"
                >
                  <X size={20} />
                </button>

                <div className="grid md:grid-cols-2">
                  <div className="h-[250px] md:h-full overflow-hidden">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 md:p-12 flex flex-col justify-center text-white">
                    <span className="text-gold text-xs uppercase tracking-[0.2em] mb-4">
                      {activeService.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl mb-4 font-display">
                      {activeService.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-8">
                      {activeService.description}
                    </p>

                    <div className="flex items-center justify-between mb-8 border-t border-white/10 pt-6">
                      <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Service Value</span>
                      <span className="text-2xl font-semibold text-gold font-display">{activeService.price}</span>
                    </div>

                    <button
                      onClick={() => handleBooking(activeService.bookingLink)}
                      className="w-full bg-gold hover:bg-white text-black py-5 uppercase text-xs tracking-[0.3em] font-black transition-all duration-500 shadow-lg flex items-center justify-center gap-3"
                    >
                      Book Now <ArrowUpRight size={16} />
                    </button>
                    
                    <p className="text-[10px] text-center text-gray-600 mt-4 uppercase tracking-tighter">
                      Powered by Setmore Scheduling
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ServicesSection;