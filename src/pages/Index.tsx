import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home } from '@/components/Home';
import { Plans } from '@/components/Plans';
import { Features } from '@/components/Features';
import { Contact } from '@/components/Contact';
import { Navbar } from '@/components/Navbar';
import { useState, useEffect } from 'react';

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Add console logs to debug tab switching
  useEffect(() => {
    console.log("Active tab changed to:", activeTab);
  }, [activeTab]);

  const handleTabChange = (value: string) => {
    console.log("Tab change requested to:", value);
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-4 bg-red-100">
            <TabsTrigger 
              value="home"
              className="data-[state=active]:bg-red-700 data-[state=active]:text-white"
            >
              Home
            </TabsTrigger>
            <TabsTrigger 
              value="plans"
              className="data-[state=active]:bg-red-700 data-[state=active]:text-white"
            >
              Plans
            </TabsTrigger>
            <TabsTrigger 
              value="features"
              className="data-[state=active]:bg-red-700 data-[state=active]:text-white"
            >
              Features
            </TabsTrigger>
            <TabsTrigger 
              value="contact"
              className="data-[state=active]:bg-red-700 data-[state=active]:text-white"
            >
              Contact
            </TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <Home />
          </TabsContent>
          <TabsContent value="plans">
            <Plans />
          </TabsContent>
          <TabsContent value="features">
            <Features />
          </TabsContent>
          <TabsContent value="contact">
            <Contact />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;