import { motion } from 'framer-motion';
import { Server, Shield, Zap, HeartPulse, Headphones, Clock, Cpu, HardDrive, Network, Lock, Banknote, Rocket } from 'lucide-react';

const features = [
  {
    icon: Server,
    title: "High-Performance Servers",
    description: "Experience lightning-fast speeds with our state-of-the-art infrastructure."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Rest easy knowing your data is protected by cutting-edge security measures."
  },
  {
    icon: HeartPulse,
    title: "99.9% Uptime",
    description: "Enjoy uninterrupted service with our highly reliable infrastructure."
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Get your VPS up and running in minutes with our automated provisioning system."
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Our knowledgeable team is always available to assist you with any issues or questions."
  },
  {
    icon: Clock,
    title: "Flexible Billing",
    description: "Choose from various billing cycles to suit your budget and project needs."
  },
  {
    icon: Cpu,
    title: "Powerful CPUs",
    description: "Leverage high-performance processors to handle demanding workloads with ease."
  },
  {
    icon: HardDrive,
    title: "SSD Storage",
    description: "Benefit from lightning-fast read/write speeds with our SSD storage solutions."
  },
  {
    icon: Network,
    title: "High Bandwidth",
    description: "Transfer large amounts of data quickly with our high-bandwidth network."
  },
  {
    icon: Lock,
    title: "DDoS Protection",
    description: "Stay protected against DDoS attacks with our robust mitigation systems."
  },
  {
    icon: Banknote,
    title: "Cost-Effective",
    description: "Get enterprise-level performance at budget-friendly prices."
  },
  {
    icon: Rocket,
    title: "Scalability",
    description: "Easily upgrade your resources as your needs grow, without any downtime."
  }
];

export function Features() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-red-800 mb-4">Our Features</h1>
          <p className="text-red-900 text-lg">Discover why Rival Node is the perfect choice for your VPS hosting needs</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="w-12 h-12 text-red-700 mb-4" />
              <h2 className="text-xl font-bold text-red-800 mb-2">{feature.title}</h2>
              <p className="text-red-900">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}