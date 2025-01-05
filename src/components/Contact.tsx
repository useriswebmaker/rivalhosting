import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-red-800 mb-4">Contact Us</h1>
          <p className="text-red-900 text-lg">Get in touch with our team for any questions or support</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-red-800">Name</label>
                <Input id="name" placeholder="Your Name" className="mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-red-800">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-red-800">Message</label>
                <Textarea id="message" placeholder="Your message here..." className="mt-1" />
              </div>
              <Button type="submit" className="w-full bg-red-700 hover:bg-red-800 text-white">Send Message</Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-red-700 mr-2" />
                  <span className="text-red-900">barrieryadav@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-red-700 mr-2" />
                  <a href="https://discord.gg/rivalnodes" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 underline">
                    Join our Discord
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-red-700 mr-2" />
                  <span className="text-red-900">123 Server Street, Cloud City, 12345</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">Our Support Hours</h2>
              <p className="text-red-900">We offer 24/7 support for all our customers. Our team is always ready to assist you with any questions or issues you may have.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">Emergency Support</h2>
              <p className="text-red-900">For urgent matters, please use our emergency support ticket system on our client portal or Discord server.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}