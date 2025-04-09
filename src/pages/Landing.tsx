
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sprout, Droplet, Sun } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set animation to complete after initial animations
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-e-dark text-white overflow-hidden">
      <div className="relative w-full max-w-3xl px-4 py-20 text-center">
        {/* Animated Logo */}
        <div className="mb-8 relative">
          {/* Animated wheat icon */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center mb-2"
          >
            <motion.div
              animate={{ 
                rotateZ: [0, 5, 0, -5, 0],
              }}
              transition={{ 
                duration: 6, 
                ease: "easeInOut", 
                repeat: Infinity,
              }}
            >
              <Sprout className="h-16 w-16 text-e-green" />
            </motion.div>
          </motion.div>

          {/* Animated floating elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          >
            {/* Water drops */}
            <motion.div
              className="absolute left-[30%] top-[20%]"
              animate={{ 
                y: [0, -15, 0], 
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: 1,
              }}
            >
              <Droplet className="h-8 w-8 text-e-blue opacity-60" />
            </motion.div>
            
            {/* Sun rays */}
            <motion.div
              className="absolute right-[30%] top-[20%]"
              animate={{ 
                rotate: [0, 360],
                scale: [0.8, 1, 0.8], 
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <Sun className="h-10 w-10 text-e-yellow opacity-70" />
            </motion.div>
          </motion.div>

          {/* Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-2">
              <span className="text-e-green">E-</span>Uzhavan
            </h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Smart Farming Solutions
            </motion.p>
          </motion.div>
        </div>
        
        {/* Animated Text */}
        <motion.div
          className="mb-10 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-lg text-gray-300">
            Transforming agriculture with intelligent monitoring and analytics
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-6 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="flex items-center">
              <Droplet className="h-5 w-5 mr-2 text-e-blue" />
              <span>Moisture Tracking</span>
            </div>
            <div className="flex items-center">
              <Sun className="h-5 w-5 mr-2 text-e-yellow" />
              <span>Weather Forecasts</span>
            </div>
            <div className="flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-e-green" />
              <span>Growth Analytics</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: animationComplete ? 1 : 0,
            scale: animationComplete ? 1 : 0.8,
            y: animationComplete ? [0, -5, 0] : 0,
          }}
          transition={{ 
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            y: { duration: 2, repeat: Infinity, repeatType: "reverse" }
          }}
          className="mt-8"
        >
          <Button 
            onClick={goToDashboard}
            className="bg-e-green hover:bg-e-green/80 text-black px-8 py-6 text-lg rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105"
          >
            <span>Let's Go</span>
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
