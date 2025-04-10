
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from "framer-motion";
import { Sprout, Cloud, Droplet, Thermometer, Shield, Send } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

// Message type definition
type Message = {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Sample responses for the farming assistant
const sampleResponses = [
  "Based on the soil analysis, I recommend reducing the nitrogen application by 15% in the southern field section.",
  "The current weather forecast shows a 70% chance of rain in the next 48 hours. Consider delaying your irrigation schedule.",
  "Your crop's growth pattern indicates potential zinc deficiency. Consider applying a foliar spray with zinc supplements.",
  "Analyzing historical data suggests that rotating to legumes next season would improve soil nitrogen content naturally.",
  "The latest satellite imagery shows uneven growth patterns in the northeast section. This might indicate drainage issues.",
  "Based on the current market trends, consider harvesting your crops within the next 7-10 days for optimal pricing.",
  "The pest detection system has identified early signs of fungal infection. Preventative treatment is recommended."
];

const AgriCare = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Add a welcome message when the component mounts
  useEffect(() => {
    const welcomeMessage = {
      id: 1,
      content: "Hello! I'm your AgriCare assistant. How can I help you with your farming today?",
      sender: 'bot' as const,
      timestamp: new Date()
    };
    
    setMessages([welcomeMessage]);
  }, []);
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      content: newMessage,
      sender: 'user' as const,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      // Get random response from sample list
      const randomIndex = Math.floor(Math.random() * sampleResponses.length);
      const botResponse = {
        id: Date.now(),
        content: sampleResponses[randomIndex],
        sender: 'bot' as const,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
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
            <span className="text-e-blue">Agri</span>Care
          </h1>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Smart monitoring and care solutions for your crops
          </p>
        </motion.div>

        {/* Farming Assistant Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 md:order-1"
          >
            <Card className="bg-e-dark-accent border-gray-800 text-white h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-e-blue" />
                  <span>{t('features.agricare.assistant')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ScrollArea className="flex-grow pr-4 mb-4">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div 
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`flex items-start max-w-[80%] gap-2 ${
                            msg.sender === 'user' 
                              ? 'flex-row-reverse' 
                              : 'flex-row'
                          }`}
                        >
                          <Avatar className={`h-8 w-8 ${msg.sender === 'user' ? 'bg-e-green' : 'bg-e-blue'}`}>
                            <div className="text-xs font-bold">
                              {msg.sender === 'user' ? 'You' : 'AI'}
                            </div>
                          </Avatar>
                          <div 
                            className={`p-3 rounded-lg ${
                              msg.sender === 'user' 
                                ? 'bg-e-green text-black' 
                                : 'bg-e-dark-accent border border-gray-700'
                            }`}
                          >
                            {msg.content}
                            <div className="text-xs mt-1 opacity-70">
                              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex items-start max-w-[80%] gap-2">
                          <Avatar className="h-8 w-8 bg-e-blue">
                            <div className="text-xs font-bold">AI</div>
                          </Avatar>
                          <div className="p-3 rounded-lg bg-e-dark-accent border border-gray-700">
                            <div className="flex gap-1">
                              <span className="animate-bounce">•</span>
                              <span className="animate-bounce delay-100">•</span>
                              <span className="animate-bounce delay-200">•</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                <div className="flex gap-2">
                  <Input 
                    placeholder={t('features.agricare.placeholder')}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="bg-e-dark border-gray-700"
                  />
                  <Button 
                    className="bg-e-blue hover:bg-e-blue/90" 
                    onClick={handleSendMessage}
                  >
                    <Send className="h-4 w-4 mr-1" /> {t('features.agricare.send')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold mb-6">Intelligent Crop Management</h2>
            <p className="text-gray-300 mb-6 text-lg">
              AgriCare provides a comprehensive suite of tools to monitor soil health, 
              irrigation needs, and environmental conditions for optimal crop growth.
              Ask our farming assistant any questions about your crops and get intelligent recommendations.
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
              <Shield className="text-e-blue h-6 w-6" />
              <span>Pest and disease prevention</span>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Example Questions</h3>
              <div className="space-y-2">
                <div className="p-2 bg-e-dark-accent rounded-md cursor-pointer hover:bg-e-dark-accent/80 transition-colors"
                  onClick={() => setNewMessage("What's the best time to water my tomato plants?")}
                >
                  What's the best time to water my tomato plants?
                </div>
                <div className="p-2 bg-e-dark-accent rounded-md cursor-pointer hover:bg-e-dark-accent/80 transition-colors"
                  onClick={() => setNewMessage("How can I prevent aphid infestations naturally?")}
                >
                  How can I prevent aphid infestations naturally?
                </div>
                <div className="p-2 bg-e-dark-accent rounded-md cursor-pointer hover:bg-e-dark-accent/80 transition-colors"
                  onClick={() => setNewMessage("What crop rotation would work best for my soil type?")}
                >
                  What crop rotation would work best for my soil type?
                </div>
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
                icon: <Sprout className="h-10 w-10 text-e-blue mb-4" />
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
