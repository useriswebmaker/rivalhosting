import { motion } from 'framer-motion';
import { Globe, Ticket } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from 'react';

const domains = [
  { name: ".online", price: "₹150" },
  { name: ".fun", price: "₹150" },
  { name: ".store", price: "₹150" },
  { name: ".site", price: "₹150" },
  { name: ".xyz", price: "₹250" },
  { name: ".in", price: "₹600" }
];

export function DomainPlans() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

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
            <p className="text-xl text-red-600 mb-4">{domain.price}</p>
            <Button 
              className="w-full bg-red-700 hover:bg-red-800 text-white"
              onClick={() => setSelectedDomain(domain.name)}
            >
              Purchase Domain
            </Button>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedDomain} onOpenChange={() => setSelectedDomain(null)}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-red-700">Payment Details</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <img 
              src="/src/barrier_ka_QR.png"
              alt="Payment QR Code"
              className="w-64 h-64 object-contain"
            />
            <p className="text-sm text-gray-600">Scan QR code to make payment</p>
            <Button 
              className="mt-4"
              onClick={() => window.open('https://discord.com/channels/1307274930852724757/1307274931590926352', '_blank')}
            >
              Create Ticket After Payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}