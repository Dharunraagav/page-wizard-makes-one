
import React from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Share2, Heart, BookOpen, Calendar } from 'lucide-react';

const Community = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('sections.community')}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our growing network of farmers, agricultural experts, and enthusiasts to share knowledge and experiences.
          </p>
        </div>
        
        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-e-dark-accent p-6 rounded-lg text-center">
            <Users className="h-8 w-8 text-e-green mx-auto mb-2" />
            <h3 className="text-3xl font-bold">10,000+</h3>
            <p className="text-gray-400">Community Members</p>
          </div>
          
          <div className="bg-e-dark-accent p-6 rounded-lg text-center">
            <MessageSquare className="h-8 w-8 text-e-blue mx-auto mb-2" />
            <h3 className="text-3xl font-bold">25,000+</h3>
            <p className="text-gray-400">Discussions Started</p>
          </div>
          
          <div className="bg-e-dark-accent p-6 rounded-lg text-center">
            <Share2 className="h-8 w-8 text-e-yellow mx-auto mb-2" />
            <h3 className="text-3xl font-bold">5,000+</h3>
            <p className="text-gray-400">Knowledge Resources Shared</p>
          </div>
        </div>
        
        {/* Agricultural News */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-6 w-6 text-e-green mr-2" />
            <h2 className="text-3xl font-bold">{t('sections.agriNews')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <Card className="bg-e-dark-accent border-gray-800">
              <CardHeader>
                <div className="h-48 bg-gray-700 -mx-6 -mt-6 mb-4 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-gray-500" />
                </div>
                <CardTitle>{t('news.title1')}</CardTitle>
                <CardDescription className="flex items-center mt-2 text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" /> April 5, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{t('news.summary1')}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="text-e-green border-e-green hover:bg-e-green/20">
                  {t('buttons.readMore')}
                </Button>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>24</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>8</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            
            {/* News Item 2 */}
            <Card className="bg-e-dark-accent border-gray-800">
              <CardHeader>
                <div className="h-48 bg-gray-700 -mx-6 -mt-6 mb-4 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-gray-500" />
                </div>
                <CardTitle>{t('news.title2')}</CardTitle>
                <CardDescription className="flex items-center mt-2 text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" /> March 28, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{t('news.summary2')}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="text-e-green border-e-green hover:bg-e-green/20">
                  {t('buttons.readMore')}
                </Button>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>36</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>12</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            
            {/* News Item 3 */}
            <Card className="bg-e-dark-accent border-gray-800">
              <CardHeader>
                <div className="h-48 bg-gray-700 -mx-6 -mt-6 mb-4 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-gray-500" />
                </div>
                <CardTitle>{t('news.title3')}</CardTitle>
                <CardDescription className="flex items-center mt-2 text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" /> March 15, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{t('news.summary3')}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="text-e-green border-e-green hover:bg-e-green/20">
                  {t('buttons.readMore')}
                </Button>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>42</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>18</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        {/* Join Community Section */}
        <div className="bg-e-dark-accent rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Connect with fellow farmers, share your experiences, ask questions, and learn from agricultural experts from around the world.
          </p>
          <Button className="bg-e-green hover:bg-e-green/80 text-black px-6 py-2">
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Community;
