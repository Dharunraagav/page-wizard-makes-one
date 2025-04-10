
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/hooks/useLanguage';
import { EyeIcon, Leaf, ArrowRight, Image, Zap, Shield, BarChart4, Cloud, BookOpen } from "lucide-react";

const Features = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-center">{t('sections.features')}</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          {t('landing.description')}
        </p>
        
        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* AgriVision */}
          <Card className="bg-e-dark-accent border-gray-800 overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center mb-2">
                <div className="bg-e-green/20 p-2 rounded-full mr-2">
                  <EyeIcon className="h-6 w-6 text-e-green" />
                </div>
                <CardTitle className="text-e-green">{t('features.agrivision.title')}</CardTitle>
              </div>
              <CardDescription className="text-gray-300">{t('features.agrivision.summary')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{t('features.agrivision.description')}</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-e-green/20 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight className="h-3 w-3 text-e-green" />
                  </div>
                  <span className="text-gray-200">{t('features.agrivision.point1')}</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-e-green/20 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight className="h-3 w-3 text-e-green" />
                  </div>
                  <span className="text-gray-200">{t('features.agrivision.point2')}</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-e-green/20 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight className="h-3 w-3 text-e-green" />
                  </div>
                  <span className="text-gray-200">{t('features.agrivision.point3')}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="bg-e-green hover:bg-e-green/80 text-black">
                {t('buttons.learnMore')}
              </Button>
            </CardFooter>
          </Card>
          
          {/* AgriCare */}
          <Card className="bg-e-dark-accent border-gray-800 overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center mb-2">
                <div className="bg-e-blue/20 p-2 rounded-full mr-2">
                  <Leaf className="h-6 w-6 text-e-blue" />
                </div>
                <CardTitle className="text-e-blue">{t('features.agricare.title')}</CardTitle>
              </div>
              <CardDescription className="text-gray-300">{t('features.agricare.summary')}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{t('features.agricare.description')}</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-e-blue/20 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight className="h-3 w-3 text-e-blue" />
                  </div>
                  <span className="text-gray-200">{t('features.agricare.point1')}</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-e-blue/20 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight className="h-3 w-3 text-e-blue" />
                  </div>
                  <span className="text-gray-200">{t('features.agricare.point2')}</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-e-blue/20 p-1 rounded-full mr-2 mt-1">
                    <ArrowRight className="h-3 w-3 text-e-blue" />
                  </div>
                  <span className="text-gray-200">{t('features.agricare.point3')}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="bg-e-blue hover:bg-e-blue/80 text-white">
                {t('buttons.learnMore')}
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Image Cards */}
        <h2 className="text-2xl font-bold mb-8">Our Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <Card className="bg-e-dark-accent border-gray-800 hover:border-e-green transition-colors group">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-e-green/20 p-2 rounded-full mr-2 group-hover:bg-e-green/30 transition-colors">
                  <Image className="h-5 w-5 text-e-green" />
                </div>
                {t('cards.title1')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{t('cards.desc1')}</p>
            </CardContent>
          </Card>
          
          {/* Card 2 */}
          <Card className="bg-e-dark-accent border-gray-800 hover:border-e-blue transition-colors group">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-e-blue/20 p-2 rounded-full mr-2 group-hover:bg-e-blue/30 transition-colors">
                  <Zap className="h-5 w-5 text-e-blue" />
                </div>
                {t('cards.title2')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{t('cards.desc2')}</p>
            </CardContent>
          </Card>
          
          {/* Card 3 */}
          <Card className="bg-e-dark-accent border-gray-800 hover:border-e-yellow transition-colors group">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-e-yellow/20 p-2 rounded-full mr-2 group-hover:bg-e-yellow/30 transition-colors">
                  <Shield className="h-5 w-5 text-e-yellow" />
                </div>
                {t('cards.title3')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{t('cards.desc3')}</p>
            </CardContent>
          </Card>
          
          {/* Card 4 */}
          <Card className="bg-e-dark-accent border-gray-800 hover:border-gray-600 transition-colors group">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-gray-700 p-2 rounded-full mr-2 group-hover:bg-gray-600 transition-colors">
                  <BarChart4 className="h-5 w-5 text-gray-300" />
                </div>
                {t('cards.title4')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{t('cards.desc4')}</p>
            </CardContent>
          </Card>
          
          {/* Card 5 */}
          <Card className="bg-e-dark-accent border-gray-800 hover:border-purple-500 transition-colors group">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-purple-900/20 p-2 rounded-full mr-2 group-hover:bg-purple-900/30 transition-colors">
                  <Cloud className="h-5 w-5 text-purple-400" />
                </div>
                {t('cards.title5')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{t('cards.desc5')}</p>
            </CardContent>
          </Card>
          
          {/* Card 6 */}
          <Card className="bg-e-dark-accent border-gray-800 hover:border-orange-500 transition-colors group">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="bg-orange-900/20 p-2 rounded-full mr-2 group-hover:bg-orange-900/30 transition-colors">
                  <BookOpen className="h-5 w-5 text-orange-400" />
                </div>
                {t('cards.title6')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{t('cards.desc6')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
