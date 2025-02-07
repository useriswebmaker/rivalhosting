import { motion } from 'framer-motion';
import { MinecraftPlans } from './minecraft/MinecraftPlans';
import { DomainPlans } from './domains/DomainPlans';
import { VPSPlans } from './vps/VPSPlans';

export function Plans() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-red-800 mb-6">Our Plans</h1>
            <p className="text-red-900 text-xl md:text-2xl mb-8">Choose the best plan that suits your needs</p>
          </motion.div>
          
          <div className="space-y-20">
            <VPSPlans />
            <MinecraftPlans />
            <DomainPlans />
          </div>
        </div>
      </div>
    </section>
  );
}