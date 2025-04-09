
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sprout, Droplet, Sun, Cloud, Flower, Eye, Heart, GlobeIcon, Languages, BookOpen, Newspaper } from "lucide-react";
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/hooks/useLanguage';

const Landing = () => {
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [activeFeature, setActiveFeature] = useState<'agrivision' | 'agricare' | null>(null);
  const { t } = useLanguage();

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 2.4 + (i * 0.1),
        duration: 0.5
      }
    })
  };

  // Letters for the animated title
  const letters = "Kharif Knights".split("");
  
  // Agricultural news items
  const agriNews = [
    {
      title: t('news.title1'),
      summary: t('news.summary1'),
      date: "2025-04-08"
    },
    {
      title: t('news.title2'),
      summary: t('news.summary2'),
      date: "2025-04-07"
    },
    {
      title: t('news.title3'),
      summary: t('news.summary3'),
      date: "2025-04-05"
    }
  ];

  // Agricultural image cards
  const imageCards = [
    { title: t('cards.title1'), description: t('cards.desc1'), icon: <Sprout className="h-10 w-10 text-e-green" /> },
    { title: t('cards.title2'), description: t('cards.desc2'), icon: <Droplet className="h-10 w-10 text-e-blue" /> },
    { title: t('cards.title3'), description: t('cards.desc3'), icon: <Sun className="h-10 w-10 text-e-yellow" /> },
    { title: t('cards.title4'), description: t('cards.desc4'), icon: <Cloud className="h-10 w-10 text-gray-400" /> },
    { title: t('cards.title5'), description: t('cards.desc5'), icon: <Flower className="h-10 w-10 text-pink-400" /> },
    { title: t('cards.title6'), description: t('cards.desc6'), icon: <BookOpen className="h-10 w-10 text-purple-400" /> }
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-e-dark text-white overflow-x-hidden">
      <nav className="w-full p-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-e-green">Kharif Knights</h1>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="#features" className="text-gray-300 hover:text-white">{t('nav.features')}</a>
          <a href="#about" className="text-gray-300 hover:text-white">{t('nav.about')}</a>
          <a href="#community" className="text-gray-300 hover:text-white">{t('nav.community')}</a>
          <a href="#support" className="text-gray-300 hover:text-white">{t('nav.support')}</a>
          <LanguageSelector />
          <Button className="bg-e-green hover:bg-e-green/90 text-black font-medium">{t('nav.signIn')}</Button>
        </div>
      </nav>

      <div className="relative w-full max-w-3xl px-4 py-10 text-center mt-8">
        {/* Animated Crop Field */}
        <motion.div 
          className="relative h-48 mb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background elements */}
          <motion.div
            className="absolute w-full bottom-0 h-12 bg-e-dark-accent rounded-lg opacity-70"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          {/* Crop plants animations */}
          <motion.div className="absolute bottom-8 w-full flex justify-center items-end">
            <motion.div 
              className="flex space-x-4 md:space-x-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Row of plants with different heights/delays */}
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="flex flex-col items-center"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.5 + (i * 0.1),
                      ease: "easeOut" 
                    }}
                    style={{ transformOrigin: 'bottom center' }}
                  >
                    <motion.div
                      animate={{ 
                        rotateZ: i % 2 === 0 ? [0, -2, 0, 2, 0] : [0, 2, 0, -2, 0],
                      }}
                      transition={{ 
                        duration: 4 + (i % 3),
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                      style={{ transformOrigin: 'bottom center' }}
                    >
                      {i % 3 === 0 ? (
                        <Sprout className={`h-14 w-14 text-e-green opacity-${90 - (i * 5)}`} />
                      ) : i % 3 === 1 ? (
                        <Flower className={`h-12 w-12 text-e-green opacity-${95 - (i * 5)}`} />
                      ) : (
                        <Sprout className={`h-16 w-16 text-e-green opacity-${85 - (i * 5)}`} />
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated environmental elements */}
          <motion.div
            className="absolute top-2 left-[15%]"
            animate={{ 
              y: [0, -8, 0],
              opacity: [0.5, 0.9, 0.5],
              rotate: [0, 10, 0, -10, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              delay: 1,
            }}
          >
            <Cloud className="h-10 w-10 text-gray-400 opacity-70" />
          </motion.div>
          
          <motion.div
            className="absolute top-6 right-[20%]"
            animate={{ 
              rotate: [0, 360],
              scale: [0.8, 1, 0.8], 
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Sun className="h-12 w-12 text-e-yellow opacity-80" />
          </motion.div>

          <motion.div
            className="absolute bottom-16 right-[30%]"
            animate={{ 
              y: [0, -5, 0], 
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: 2,
            }}
          >
            <Droplet className="h-7 w-7 text-e-blue opacity-70" />
          </motion.div>
        </motion.div>
        
        {/* Animated Title with Letter Animation */}
        <div className="mb-3">
          <motion.div 
            className="flex justify-center mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className={`text-5xl font-bold inline-block ${letter === " " ? "mx-2" : ""} ${index === 0 ? "text-e-green" : ""}`}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: 1 + (index * 0.1),
                    ease: "easeOut"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {t('landing.tagline')}
          </motion.p>
        </div>
        
        {/* Animated Text */}
        <motion.div
          className="mb-10 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <p className="text-lg text-gray-300">
            {t('landing.description')}
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-6 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <div className="flex items-center">
              <Droplet className="h-5 w-5 mr-2 text-e-blue" />
              <span>{t('features.moisture')}</span>
            </div>
            <div className="flex items-center">
              <Sun className="h-5 w-5 mr-2 text-e-yellow" />
              <span>{t('features.weather')}</span>
            </div>
            <div className="flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-e-green" />
              <span>{t('features.growth')}</span>
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
            <span>{t('buttons.letsGo')}</span>
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.section 
        id="features" 
        className="w-full py-16 bg-gray-900/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-10 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
          >
            {t('sections.features')}
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-6 mb-16">
            <motion.div 
              className={`flex-1 p-6 rounded-lg cursor-pointer transition-all ${activeFeature === 'agrivision' ? 'bg-e-dark-accent border-l-4 border-e-green' : 'bg-gray-800/50 hover:bg-gray-800'}`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveFeature(activeFeature === 'agrivision' ? null : 'agrivision')}
            >
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 mr-3 text-e-green" />
                <h3 className="text-2xl font-semibold">AgriVision</h3>
              </div>
              <p className="text-gray-300 mb-4">{t('features.agrivision.summary')}</p>
              <Button variant="outline" className="border-e-green text-e-green hover:bg-e-green/10">
                {activeFeature === 'agrivision' ? t('buttons.hide') : t('buttons.learnMore')}
              </Button>
            </motion.div>
            
            <motion.div 
              className={`flex-1 p-6 rounded-lg cursor-pointer transition-all ${activeFeature === 'agricare' ? 'bg-e-dark-accent border-l-4 border-e-green' : 'bg-gray-800/50 hover:bg-gray-800'}`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveFeature(activeFeature === 'agricare' ? null : 'agricare')}
            >
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 mr-3 text-e-green" />
                <h3 className="text-2xl font-semibold">AgriCare</h3>
              </div>
              <p className="text-gray-300 mb-4">{t('features.agricare.summary')}</p>
              <Button variant="outline" className="border-e-green text-e-green hover:bg-e-green/10">
                {activeFeature === 'agricare' ? t('buttons.hide') : t('buttons.learnMore')}
              </Button>
            </motion.div>
          </div>
          
          {activeFeature === 'agrivision' && (
            <motion.div 
              className="bg-e-dark-accent rounded-lg p-6 mb-10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-e-green">{t('features.agrivision.title')}</h4>
              <p className="mb-4">{t('features.agrivision.description')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>{t('features.agrivision.point1')}</li>
                <li>{t('features.agrivision.point2')}</li>
                <li>{t('features.agrivision.point3')}</li>
              </ul>
            </motion.div>
          )}
          
          {activeFeature === 'agricare' && (
            <motion.div 
              className="bg-e-dark-accent rounded-lg p-6 mb-10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-e-green">{t('features.agricare.title')}</h4>
              <p className="mb-4">{t('features.agricare.description')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>{t('features.agricare.point1')}</li>
                <li>{t('features.agricare.point2')}</li>
                <li>{t('features.agricare.point3')}</li>
              </ul>
            </motion.div>
          )}

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {imageCards.map((card, i) => (
              <motion.div
                key={i}
                className="bg-gray-800/60 rounded-lg p-5 flex flex-col items-center text-center hover:bg-gray-800 transition-all"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-4 p-3 bg-e-dark rounded-full">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Community Section with News */}
      <motion.section 
        id="community" 
        className="w-full py-16 bg-e-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('sections.community')}</h2>
          
          <div className="flex flex-col mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Newspaper className="h-6 w-6 mr-2 text-e-green" />
              {t('sections.agriNews')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agriNews.map((news, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-800/40 rounded-lg p-6 hover:bg-gray-800/60 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6 + (i * 0.1), duration: 0.5 }}
                >
                  <h4 className="text-lg font-semibold mb-2">{news.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{news.summary}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">{news.date}</span>
                    <Button variant="link" className="text-e-green p-0 h-auto">
                      {t('buttons.readMore')}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Landing;
