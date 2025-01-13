import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logo = "/src/b5b2ecf6-9e30-40ab-8fb5-386a40d7654f.jpg";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="relative z-20 w-full px-6 py-4 bg-gradient-to-r from-red-800 via-red-700 to-red-800 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={logo}
            alt="Rival Node Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white font-bold text-xl md:text-2xl">Rival Node</span>
        </motion.div>
      </div>
    </motion.nav>
  );
}
