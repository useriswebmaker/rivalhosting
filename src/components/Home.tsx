import { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import type { Engine } from 'tsparticles-engine';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const LOGO_URL = "https://cdn.discordapp.com/attachments/1325075159727734947/1325363813083775007/b5b2ecf6-9e30-40ab-8fb5-386a40d7654f.jpg?ex=677b84bd&is=677a333d&hm=45b7b56606e0f0c198ffb77ce4b5e2d7e42797f99bae61d5a596dc82aa22f2e8&";

export function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const handleExplore = () => {
    // Find the plans tab trigger and click it
    const plansTab = document.querySelector('[value="plans"]') as HTMLElement;
    if (plansTab) {
      plansTab.click();
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#DC2626", "#EF4444", "#FCA5A5"],
            },
            links: {
              color: "#DC2626",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
              limit: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["circle", "triangle", "square"],
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-red-800 mb-6">Welcome to Rival Node</h1>
              <p className="text-red-900 text-xl md:text-2xl mb-8">Elevate your hosting experience with high-performance VPS solutions</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleExplore}
                  className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 text-xl rounded-full transition-all shadow-lg"
                >
                  Explore Plans
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <img
                src={LOGO_URL}
                alt="Rival Node Logo"
                className="w-[300px] h-[300px] rounded-full shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}