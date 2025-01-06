import { motion } from 'framer-motion';
import { HardDrive, Cpu, Database, Globe, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from 'react';

interface MinecraftPlanProps {
  name: string;
  ram: string;
  cpu: string;
  disk: string;
  backups: string;
  databases: string;
  ports: string;
  subdomains: string;
  ddosProtection: string;
  price: string;
  index: number;
}

export function MinecraftPlan({ 
  name, ram, cpu, disk, backups, databases, 
  ports, subdomains, ddosProtection, price, index 
}: MinecraftPlanProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

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
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HardDrive className="w-5 h-5" />
              <span>{ram} RAM</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              <span>{cpu} CPU</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive className="w-5 h-5" />
              <span>{disk} Disk</span>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              <span>{backups} Backups</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              <span>{databases} SQL Databases</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>{ports} Additional Ports</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>{subdomains} Extra Subdomain/Custom IP</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>{ddosProtection} DDoS Protection</span>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-2xl font-bold text-red-700 mb-4">{price}</p>
            <Button 
              className="w-full bg-red-700 hover:bg-red-800 text-white transition-colors"
              onClick={() => setShowPaymentModal(true)}
            >
              Purchase Plan
            </Button>
          </div>
        </div>
      </motion.div>

      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4">
            <img 
              src="https://cdn.discordapp.com/attachments/1325075159727734947/1325739962913652766/barrier_ka_QR.png?ex=677ce30e&is=677b918e&hm=f8d2cbb2cece5c85eef0c86fb82db0bcb944eea20f2171eaac87a623c2e9e631&"
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
