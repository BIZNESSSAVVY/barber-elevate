import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  ShoppingBag,
  UserCheck,
  Bell,
  Repeat,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Stylist Match Quiz",
    description:
      "Intelligent pairing system that connects clients with the perfect stylist based on preferences and style goals.",
  },
  {
    icon: ShoppingBag,
    title: "Shop the Look",
    description:
      "Retail integration lets clients purchase the exact products used during their service, boosting retail revenue.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Automated SMS and email reminders reduce no-shows by up to 40%, protecting your bottom line.",
  },
  {
    icon: Repeat,
    title: "Rebooking Engine",
    description:
      "AI-powered suggestions prompt clients to rebook at the ideal interval for their specific service.",
  },
  {
    icon: CreditCard,
    title: "Seamless Payments",
    description:
      "Integrated payment processing with tipping, split payments, and membership billing built in.",
  },
  {
    icon: Sparkles,
    title: "Loyalty Rewards",
    description:
      "Customizable loyalty program that turns first-time visitors into lifetime clients.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
            Built for Efficiency
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight mb-4">
            Run Smarter,
            <br />
            <span className="italic">Not Harder</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            Every feature is designed to reduce friction, increase revenue, and
            give you more time to do what you love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-500"
            >
              <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                <feature.icon
                  size={18}
                  className="text-gold group-hover:text-accent-foreground transition-colors"
                />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
