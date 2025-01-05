import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import type { Engine } from 'tsparticles-engine';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Server, Shield, Zap, HeartPulse, Headphones, Clock, Cpu, HardDrive, Network, Lock, Banknote, Rocket, Menu, X, Mail, MessageCircle, MapPin } from 'lucide-react';

// Components imports
import { Navbar } from '../components/Navbar';
import { Home } from '../components/Home';
import { Plans } from '../components/Plans';
import { Features } from '../components/Features';
import { Contact } from '../components/Contact';

const Index = () => {
  return (
    <>
      <Home />
      <Plans />
      <Features />
      <Contact />
    </>
  );
};

export default Index;