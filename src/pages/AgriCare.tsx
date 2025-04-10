
import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from "framer-motion";
import { Sprout, Cloud, Droplet, Thermometer, Shield } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';

const AgriCare = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-e-green">Agri</span>Care
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Smart monitoring and care solutions for your crops
          </p>
        </motion.div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Intelligent Crop Management</h2>
            <p className="text-gray-300 mb-6 text-lg">
              AgriCare provides a comprehensive suite of tools to monitor soil health, 
              irrigation needs, and environmental conditions for optimal crop growth.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <Droplet className="text-e-blue h-6 w-6" />
              <span>Smart irrigation management</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Thermometer className="text-e-yellow h-6 w-6" />
              <span>Environmental condition monitoring</span>
            </div>
            <div className="flex items-center gap-4">
              <Shield className="text-e-green h-6 w-6" />
              <span>Pest and disease prevention</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-e-dark-accent p-8 rounded-xl flex justify-center"
          >
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <Sprout className="h-32 w-32 text-e-green opacity-30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full border-2 border-e-blue/30 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full border border-e-yellow/20 animate-[pulse_3s_ease-in-out_infinite]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-16">AgriCare Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Soil Health Analysis",
                description: "Monitor nutrient levels, pH balance, and soil composition for optimal growing conditions.",
                icon: <Sprout className="h-10 w-10 text-e-green mb-4" />
              },
              {
                title: "Weather Integration",
                description: "Stay ahead of weather changes with forecasts integrated directly into your farming schedule.",
                icon: <Cloud className="h-10 w-10 text-e-blue mb-4" />
              },
              {
                title: "Water Management",
                description: "Optimize water usage with intelligent irrigation scheduling based on soil moisture and crop needs.",
                icon: <Droplet className="h-10 w-10 text-e-blue mb-4" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="bg-e-dark-accent p-8 rounded-lg text-center hover:bg-e-dark-accent/70 transition-colors"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriCare;
