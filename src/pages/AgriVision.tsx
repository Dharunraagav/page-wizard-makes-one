import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from "framer-motion";
import { Eye, LineChart, Camera, Brain, Leaf, Bug, BugOff, RefreshCw } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AgriVision = () => {
  const { t } = useLanguage();
  const [pestDetected, setPestDetected] = useState<boolean | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>(new Date().toLocaleTimeString());

  // Simulate random pest detection
  useEffect(() => {
    const timer = setInterval(() => {
      const detected = Math.random() > 0.5;
      setPestDetected(detected);
      setLastUpdated(new Date().toLocaleTimeString());
    }, 10000); // Update every 10 seconds
    
    return () => clearInterval(timer);
  }, []);
  
  const handleRefresh = () => {
    setPestDetected(Math.random() > 0.5);
    setLastUpdated(new Date().toLocaleTimeString());
  };
  
  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-e-green">Agri</span>Vision
          </h1>
          <p className="text-xl text-gray-300 text-center mb-10 max-w-3xl mx-auto">
            Advanced image recognition and analytics for modern farming
          </p>
        </motion.div>

        {/* Drone Live Feed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Camera className="mr-2 text-e-green" /> {t('features.agrivision.droneFeed')}
          </h2>
          
          <div className="bg-e-dark-accent rounded-xl overflow-hidden">
            <div className="relative">
              {/* Simulated drone feed - replace with actual video component if available */}
              <div className="aspect-video bg-black relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
                    alt="Farm Aerial View"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay with camera UI elements */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between">
                  <Badge variant="outline" className="bg-black/50 text-white">LIVE</Badge>
                  <Badge variant="outline" className="bg-black/50 text-white">Drone #1</Badge>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Badge variant="outline" className="bg-black/50 text-white">Field #3 - Northeast Corner</Badge>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Pest Detection Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Bug className="mr-2 text-e-green" /> {t('features.agrivision.pestDetection')}
            </h2>
            <button 
              onClick={handleRefresh} 
              className="flex items-center gap-2 bg-e-dark-accent hover:bg-e-dark-accent/90 text-white px-3 py-2 rounded-md"
            >
              <RefreshCw className="h-4 w-4" /> Refresh
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-e-dark-accent text-white border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{t('features.agrivision.status')}</span>
                  <Badge 
                    className={pestDetected ? "bg-red-500" : "bg-green-500"}
                  >
                    {pestDetected ? (
                      <span className="flex items-center gap-1">
                        <Bug className="h-3 w-3" /> {t('features.agrivision.detected')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <BugOff className="h-3 w-3" /> {t('features.agrivision.notDetected')}
                      </span>
                    )}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-300">
                  {t('features.agrivision.lastUpdated')}: {lastUpdated}
                </div>
                
                <div className="mt-4">
                  {pestDetected ? (
                    <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-md">
                      <p className="font-medium">Potential aphid infestation detected on crop leaves.</p>
                      <p className="text-sm mt-2">Recommended action: Inspect field section G3 and consider organic pesticide application.</p>
                    </div>
                  ) : (
                    <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-md">
                      <p className="font-medium">No pest activity detected in the current frame.</p>
                      <p className="text-sm mt-2">Continuing scheduled monitoring. Next comprehensive scan in 2 hours.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-e-dark-accent text-white border-gray-800">
              <CardHeader>
                <CardTitle>Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-black/40 rounded-md flex items-center justify-center">
                  {pestDetected ? (
                    <img 
                      src="https://images.unsplash.com/photo-1634138235766-abe63ac2bc0d?q=80&w=1965&auto=format&fit=crop"
                      alt="Pest Detection"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <img 
                      src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop"
                      alt="Healthy Plants"
                      className="w-full h-full object-cover rounded-md"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

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
