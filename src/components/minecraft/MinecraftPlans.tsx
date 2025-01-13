import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const minecraftPlans = [
  {
    name: "BASIC PLAN",
    icon: "🌟",
    specs: [
      "100% CPU",
      "4GB RAM",
      "10GB SSD",
      "Amd Epyc"
    ],
    price: "₹119/m"
  },
  {
    name: "STARTER PLAN",
    icon: "🚀",
    specs: [
      "120% CPU",
      "8GB RAM",
      "20GB SSD",
      "Amd Epyc"
    ],
    price: "₹209/m"
  },
  {
    name: "GOLD PLAN",
    icon: "👑",
    specs: [
      "180% CPU",
      "16GB RAM",
      "30GB SSD",
      "Amd Epyc"
    ],
    price: "₹349/m"
  },
  {
    name: "ADVANCED PLAN",
    icon: "⚡",
    specs: [
      "250% CPU",
      "32GB RAM",
      "50GB SSD",
      "Amd Epyc"
    ],
    price: "₹599/m"
  },
  {
    name: "RIVAL PLAN",
    icon: "🔥",
    specs: [
      "600% CPU",
      "64GB RAM",
      "200GB SSD",
      "Amd Epyc"
    ],
    price: "₹999/m"
  }
];

function MinecraftPlanCard({ plan, index }: { plan: any; index: number }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div 
        className="bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="bg-red-700 text-white p-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <span className="text-2xl">{plan.icon}</span>
        </div>
        <div className="p-6">
          <ul className="space-y-3 mb-6">
            {plan.specs.map((spec: string, i: number) => (
              <li key={i} className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                {spec}
              </li>
            ))}
          </ul>
          <p className="text-2xl font-bold text-red-700 mb-4">{plan.price}</p>
          <Button 
            className="w-full bg-red-700 hover:bg-red-800 text-white transition-colors"
            onClick={() => setShowModal(true)}
          >
            Choose Plan
          </Button>
        </div>
      </motion.div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-red-700">Payment Details</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <img 
              src="/src/assets/images/qr-code.png"
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
    </>
  );
}

export function MinecraftPlans() {
  return (
    <div className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-red-800 mb-4">Minecraft Hosting Plans</h1>
        <p className="text-red-900 text-lg">Choose the perfect Minecraft hosting plan for your server</p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {minecraftPlans.map((plan, index) => (
          <MinecraftPlanCard key={index} plan={plan} index={index} />
        ))}
      </div>
    </div>
  );
}
