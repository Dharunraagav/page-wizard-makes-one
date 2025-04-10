
import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from "framer-motion";
import { Eye, Sprout, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const Features = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-e-green">Smart Farming</span> Features
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our innovative tools designed to revolutionize your farming experience
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-e-dark-accent rounded-xl overflow-hidden"
          >
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="bg-e-green/10 p-4 rounded-full">
                  <Eye className="h-12 w-12 text-e-green" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">AgriVision</h2>
              <p className="text-gray-300 mb-6 flex-grow">
                Use advanced image recognition to detect crop diseases, track growth patterns, 
                and monitor plant health with our cutting-edge computer vision technology.
              </p>
              <div className="flex justify-center mt-4">
                <Button 
                  onClick={() => navigate('/agrivision')}
                  className="bg-e-green hover:bg-e-green/90 text-black flex items-center gap-2"
                >
                  Explore AgriVision <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-e-dark-accent rounded-xl overflow-hidden"
          >
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="bg-e-blue/10 p-4 rounded-full">
                  <Sprout className="h-12 w-12 text-e-green" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">AgriCare</h2>
              <p className="text-gray-300 mb-6 flex-grow">
                Monitor and manage your crop's environmental conditions, soil health, 
                and irrigation needs with smart sensors and intelligent recommendations.
              </p>
              <div className="flex justify-center mt-4">
                <Button 
                  onClick={() => navigate('/agricare')}
                  className="bg-e-blue hover:bg-e-blue/90 text-white flex items-center gap-2"
                >
                  Explore AgriCare <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
