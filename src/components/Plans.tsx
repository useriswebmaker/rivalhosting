import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MinecraftPlans } from './minecraft/MinecraftPlans';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Custom Icons
const CashIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1298513030489051176.webp?size=96&quality=lossless"
    alt="Cash icon"
    width={24}
    height={24}
  />
);

const ModeratorIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1234565312502960241.webp?size=96&quality=lossless"
    alt="Moderator icon"
    width={24}
    height={24}
  />
);

const HammerIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1290393594007654503.gif?size=96&quality=lossless"
    alt="Hammer icon"
    width={24}
    height={24}
  />
);

const HazardIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1297386150113316864.webp?size=96&quality=lossless"
    alt="Hazard icon"
    width={24}
    height={24}
  />
);

const NotepadIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1298517202726551593.gif?size=96&quality=lossless"
    alt="Notepad icon"
    width={24}
    height={24}
  />
);

const MembersIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1234566037132017685.webp?size=96&quality=lossless"
    alt="Members icon"
    width={24}
    height={24}
  />
);

const StaffIcon = () => (
  <img
    src="https://cdn.discordapp.com/emojis/1234564896113557717.webp?size=96&quality=lossless"
    alt="Staff icon"
    width={24}
    height={24}
  />
);

const vpsPlans = [
  {
    name: "2GB RAM VPS",
    price: "300rs/month",
    description: "Perfect for small projects, lightweight apps, and testing.",
  },
  {
    name: "4GB RAM VPS",
    price: "600rs/month",
    description: "Ideal for hosting small websites or moderate game servers.",
  },
  {
    name: "8GB RAM VPS",
    price: "800rs/month",
    description: "Excellent for multiple apps, websites, or larger game servers.",
  },
  {
    name: "16GB RAM VPS",
    price: "1500rs/month",
    description: "Great for heavy apps, databases, and advanced gaming.",
  },
  {
    name: "32GB RAM VPS",
    price: "2500rs/month",
    description: "Optimal for high-traffic sites, virtualization, and intense workloads.",
  },
  {
    name: "64GB RAM VPS",
    price: "3000rs/month",
    description: "Ultimate power for enterprise apps and big data projects.",
  }
];

function PlanCard({ plan, index }: { plan: any; index: number }) {
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
        <div className="bg-red-700 text-white p-4">
          <h3 className="text-xl font-bold">{plan.name}</h3>
        </div>
        <div className="p-6">
          <p className="text-2xl font-bold text-red-700 mb-4">{plan.price}</p>
          <p className="text-gray-600 mb-6">{plan.description}</p>
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
            <DialogTitle className="text-red-700">Contact Us</DialogTitle>
            <DialogDescription>
              To proceed with your chosen plan, please contact us through one of the following methods:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>
              <strong>Discord:</strong>{' '}
              <a 
                href="https://discord.gg/rivalnodes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-700 hover:text-red-800 underline"
              >
                Join our Discord server
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:barrieryadav@gmail.com"
                className="text-red-700 hover:text-red-800 underline"
              >
                barrieryadav@gmail.com
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function Plans() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="vps" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-red-100 mb-8">
            <TabsTrigger 
              value="vps"
              className="data-[state=active]:bg-red-700 data-[state=active]:text-white"
            >
              VPS Plans
            </TabsTrigger>
            <TabsTrigger 
              value="minecraft"
              className="data-[state=active]:bg-red-700 data-[state=active]:text-white"
            >
              Minecraft Plans
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vps">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-red-800 mb-4">Dragoon Dedicated Hosting - VPS Plans</h1>
              <p className="text-red-900 text-lg">Choose the perfect VPS plan for your hosting needs</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vpsPlans.map((plan, index) => (
                <PlanCard key={index} plan={plan} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="minecraft">
            <MinecraftPlans />
          </TabsContent>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white shadow-lg rounded-lg p-8 mt-16"
          >
            <h2 className="text-3xl font-bold text-red-700 mb-8 text-center">Terms and Conditions</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <CashIcon />
                <div className="ml-2">
                  <h3 className="font-bold text-red-800">Refund Policy</h3>
                  <p>Full refund available if requested within <strong>12 hours</strong> of purchase.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ModeratorIcon />
                <div className="ml-2">
                  <h3 className="font-bold text-red-800">No DDoS or Illegal Activities</h3>
                  <p>DDoS attacks or illegal activities will result in immediate service termination without refund.</p>
                </div>
              </li>
              <li className="flex items-start">
                <HammerIcon />
                <div className="ml-2">
                  <h3 className="font-bold text-red-800">Fair Use</h3>
                  <p>Excessive resource usage may lead to warnings or temporary suspension.</p>
                </div>
              </li>
              <li className="flex items-start">
                <HazardIcon />
                <div className="ml-2">
                  <h3 className="font-bold text-red-800">Data Loss</h3>
                  <p>We are not responsible for data loss. Regular backups are the user's responsibility.</p>
                </div>
              </li>
              <li className="flex items-start">
                <NotepadIcon />
                <div className="ml-2">
                  <h3 className="font-bold text-red-800">Account Termination</h3>
                  <p>Accounts violating these terms may be terminated without notice or refund.</p>
                </div>
              </li>
              <li className="flex items-start">
                <MembersIcon />
                <div className="ml-2">
                  <h3 className="font-bold text-red-800">Service Modifications</h3>
                  <p>We reserve the right to modify services or pricing with notice.</p>
                </div>
              </li>
              <li className="flex items-start">
                <StaffIcon />
                <div className="ml-2">
                  <h3 className="font-bold text-red-800">Privacy</h3>
                  <p>Your information will remain private and only used for payment processing.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
}
