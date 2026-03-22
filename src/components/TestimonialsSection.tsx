import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Regular Client · 2 Years",
    quote:
      "Every time I come here, the fade is flawless. No pushback, no rushed work. These guys really take their time and it shows.",
    rating: 5,
  },
  {
    name: "Darnell Carter",
    role: "Weekly Client",
    quote:
      "I don’t wait anymore. I book my slot, walk in, sit down, and I’m out clean every time. Best system I’ve seen in a barbershop.",
    rating: 5,
  },
  {
    name: "Jamal Thompson",
    role: "New Client",
    quote:
      "First visit and they got me right. Lineup was sharp, beard was perfect. Definitely found my new shop on Broad Street.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Client Reviews
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
            Real Cuts.
            <br />
            <span className="italic">Real Feedback</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="border border-border p-8 flex flex-col justify-between group hover:border-gold/30 transition-colors duration-500"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-display text-lg italic text-foreground leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div>
                <div className="font-body text-sm font-medium text-foreground">
                  {testimonial.name}
                </div>
                <div className="font-body text-xs text-muted-foreground mt-1">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;