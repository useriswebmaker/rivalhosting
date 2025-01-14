import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const vpsPlans = [
  {
    name: "BASIC VPS",
    icon: "💻",
    specs: [
      "2 vCPU Cores",
      "2GB RAM",
      "20GB NVMe SSD",
      "1TB Bandwidth"
    ],
    price: "₹499/m"
  },
  {
    name: "STANDARD VPS",
    icon: "🚀",
    specs: [
      "4 vCPU Cores",
      "4GB RAM",
      "40GB NVMe SSD",
      "2TB Bandwidth"
    ],
    price: "₹999/m"
  },
  {
    name: "PREMIUM VPS",
    icon: "⚡",
    specs: [
      "8 vCPU Cores",
      "8GB RAM",
      "80GB NVMe SSD",
      "4TB Bandwidth"
    ],
    price: "₹1999/m"
  }
];

function VPSPlanCard({ plan, index }: { plan: any; index: number }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div 
        className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm mx-auto"
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
    </>
  );
}

export function VPSPlans() {
  return (
    <div className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-red-800 mb-4">VPS Hosting Plans</h1>
        <p className="text-red-900 text-lg">Choose your perfect VPS hosting solution</p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto px-4">
        <Carousel className="w-full">
          <CarouselContent>
            {vpsPlans.map((plan, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <VPSPlanCard plan={plan} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}