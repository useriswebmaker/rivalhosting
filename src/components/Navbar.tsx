import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="relative z-20 w-full px-6 py-4 bg-gradient-to-r from-red-800 via-red-700 to-red-800 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1325075159727734947/1325363813083775007/b5b2ecf6-9e30-40ab-8fb5-386a40d7654f.jpg"
            alt="Rival Node Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white font-bold text-xl md:text-2xl cursor-default">Rival Node</span>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {['Home', 'Features', 'Plans', 'Contact'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-red-200 px-3 py-2 rounded text-sm transition-colors"
              >
                {item}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            {['Home', 'Features', 'Plans', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="block text-white hover:bg-red-600 px-3 py-2 rounded text-sm transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};