
import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from "framer-motion";
import { Eye, LineChart, Camera, Brain, Leaf } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';

const AgriVision = () => {
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
            <span className="text-e-green">Agri</span>Vision
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Advanced image recognition and analytics for modern farming
          </p>
        </motion.div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">See Your Farm in a New Light</h2>
            <p className="text-gray-300 mb-6 text-lg">
              AgriVision uses cutting-edge computer vision technology to analyze crops, 
              detect diseases early, and optimize growing conditions through intelligent image processing.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <Camera className="text-e-green h-6 w-6" />
              <span>Advanced image capture capabilities</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Brain className="text-e-green h-6 w-6" />
              <span>AI-powered disease detection</span>
            </div>
            <div className="flex items-center gap-4">
              <Leaf className="text-e-green h-6 w-6" />
              <span>Growth pattern analysis and prediction</span>
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
                <Eye className="h-32 w-32 text-e-green opacity-30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full border-2 border-e-green/30 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full border border-e-green/20 animate-[pulse_3s_ease-in-out_infinite]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-16">AgriVision Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Crop Health Monitoring",
                description: "Detect diseases and pest infestations early by analyzing leaf patterns and discoloration.",
                icon: <Eye className="h-10 w-10 text-e-green mb-4" />
              },
              {
                title: "Growth Tracking",
                description: "Track plant growth patterns over time with precise measurements and visualization.",
                icon: <LineChart className="h-10 w-10 text-e-green mb-4" />
              },
              {
                title: "Yield Prediction",
                description: "Estimate harvest yields based on visual data analysis and historical patterns.",
                icon: <Brain className="h-10 w-10 text-e-green mb-4" />
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

export default AgriVision;
