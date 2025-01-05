import { motion } from 'framer-motion';
import { MinecraftPlan } from './MinecraftPlan';

const minecraftPlans = [
  {
    name: "Dirt Plan",
    ram: "4 GB",
    cpu: "100%",
    disk: "25GB",
    backups: "2",
    databases: "2",
    ports: "2",
    subdomains: "1",
    ddosProtection: "4gbps",
    price: "₹180/m"
  },
  {
    name: "Stone Plan",
    ram: "6 GB",
    cpu: "150%",
    disk: "50GB",
    backups: "4",
    databases: "4",
    ports: "4",
    subdomains: "2",
    ddosProtection: "6gbps",
    price: "₹270/m"
  },
  {
    name: "Coal Plan",
    ram: "8 GB",
    cpu: "200%",
    disk: "75GB",
    backups: "6",
    databases: "6",
    ports: "6",
    subdomains: "3",
    ddosProtection: "8gbps",
    price: "₹360/m"
  },
  {
    name: "Iron Plan",
    ram: "12 GB",
    cpu: "300%",
    disk: "100GB",
    backups: "8",
    databases: "8",
    ports: "8",
    subdomains: "4",
    ddosProtection: "12gbps",
    price: "₹540/m"
  },
  {
    name: "Gold Plan",
    ram: "16 GB",
    cpu: "400%",
    disk: "150GB",
    backups: "10",
    databases: "10",
    ports: "10",
    subdomains: "5",
    ddosProtection: "16gbps",
    price: "₹720/m"
  },
  {
    name: "Diamond Plan",
    ram: "UNLIMITED GB",
    cpu: "UNLIMITED%",
    disk: "UNLIMITED GB",
    backups: "UNLIMITED",
    databases: "UNLIMITED",
    ports: "UNLIMITED",
    subdomains: "UNLIMITED",
    ddosProtection: "1tbps",
    price: "₹2,300/m"
  }
];

export function MinecraftPlans() {
  return (
    <section className="py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-red-800 mb-4">
          BEST MINECRAFT CHEAP PLANS
        </h2>
        <p className="text-red-900 text-lg">
          Choose your perfect Minecraft hosting plan
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {minecraftPlans.map((plan, index) => (
          <MinecraftPlan key={index} {...plan} index={index} />
        ))}
      </div>

      <div className="mt-8 text-center space-y-4">
        <p className="text-lg font-semibold">Available Locations:</p>
        <div className="flex justify-center gap-4">
          <span>🇮🇳 India</span>
          <span>🇸🇬 Singapore</span>
          <span>🇩🇪 Germany</span>
        </div>
        <p className="text-sm text-gray-600">RAM Type: DDR4</p>
      </div>
    </section>
  );
}