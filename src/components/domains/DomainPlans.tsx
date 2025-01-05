import { motion } from 'framer-motion';
import { Globe, Ticket } from 'lucide-react';
import { Button } from "@/components/ui/button";

const domains = [
  { name: ".online", price: "₹150" },
  { name: ".fun", price: "₹150" },
  { name: ".store", price: "₹150" },
  { name: ".site", price: "₹150" },
  { name: ".xyz", price: "₹250" },
  { name: ".in", price: "₹600" }
];

export function DomainPlans() {
  return (
    <section className="py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-red-800 mb-4 flex items-center justify-center gap-2">
          <Globe className="w-8 h-8" />
          Domains Available at Rival Host!
        </h2>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {domains.map((domain, index) => (
          <motion.div 
            key={domain.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-bold text-red-700 mb-2">{domain.name}</h3>
            <p className="text-xl text-red-600">{domain.price}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center justify-center gap-2">
          <Ticket className="w-6 h-6" />
          Want to get started?
        </h3>
        <p className="text-red-700 mb-6">
          Create a ticket in ticket section to set up your domain today!
        </p>
        <Button 
          className="bg-red-700 hover:bg-red-800 text-white"
          onClick={() => window.open('https://discord.com/channels/1289016492192694314/1290624666762870806', '_blank')}
        >
          Create Ticket
        </Button>
      </motion.div>
    </section>
  );
}