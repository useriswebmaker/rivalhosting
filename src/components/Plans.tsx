import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useTabsContext } from "@/components/ui/tabs";

export function Plans() {
  const { setValue } = useTabsContext();

  useEffect(() => {
    setValue("plans");
  }, [setValue]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-red-800 mb-6">Our Plans</h1>
            <p className="text-red-900 text-xl md:text-2xl mb-8">Choose the best plan that suits your needs</p>
            <Button 
              onClick={() => setValue("home")}
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 text-xl rounded-full transition-all shadow-lg"
            >
              Back to Home
            </Button>
          </motion.div>
        </div>
      </div>
      <img 
        src="/src/assets/images/qr-code.png"
        alt="Payment QR Code"
        className="w-64 h-64 object-contain"
      />
    </section>
  );
}
