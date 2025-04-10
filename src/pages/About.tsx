
import React from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/hooks/useLanguage';
import { Users, Award, Target, Globe } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Kharif Knights</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are a team of agricultural technology experts dedicated to empowering farmers 
            with smart farming solutions that increase productivity while promoting sustainability.
          </p>
        </div>
        
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-e-dark-accent p-8 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <div className="bg-e-green/20 p-3 rounded-full mr-3">
                <Target className="h-6 w-6 text-e-green" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-300">
              To revolutionize agriculture through accessible technology that helps farmers make 
              data-driven decisions, optimize resource usage, and increase crop yields sustainably.
            </p>
          </div>
          
          <div className="bg-e-dark-accent p-8 rounded-lg border border-gray-800">
            <div className="flex items-center mb-4">
              <div className="bg-e-blue/20 p-3 rounded-full mr-3">
                <Globe className="h-6 w-6 text-e-blue" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-300">
              A world where every farmer has access to cutting-edge agricultural technology, 
              enabling sustainable practices that feed communities while preserving natural resources.
            </p>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gray-800 p-2 rounded-full mr-2">
              <Users className="h-5 w-5 text-e-green" />
            </div>
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="bg-e-dark-accent rounded-lg overflow-hidden border border-gray-800 hover:border-e-green transition-all">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <Users className="h-20 w-20 text-gray-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Dr. Aisha Patel</h3>
                <p className="text-e-green mb-2">Agricultural Scientist</p>
                <p className="text-gray-400 text-sm">
                  PhD in Agricultural Sciences with 15+ years of research in sustainable farming practices.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-e-dark-accent rounded-lg overflow-hidden border border-gray-800 hover:border-e-green transition-all">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <Users className="h-20 w-20 text-gray-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Michael Chen</h3>
                <p className="text-e-green mb-2">Software Engineer</p>
                <p className="text-gray-400 text-sm">
                  Expert in IoT systems and agricultural sensor technology with a background in precision farming.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-e-dark-accent rounded-lg overflow-hidden border border-gray-800 hover:border-e-green transition-all">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <Users className="h-20 w-20 text-gray-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Priya Sharma</h3>
                <p className="text-e-green mb-2">Data Scientist</p>
                <p className="text-gray-400 text-sm">
                  Specializes in agricultural data modeling and predictive analytics for crop yield optimization.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-e-dark-accent rounded-lg overflow-hidden border border-gray-800 hover:border-e-green transition-all">
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <Users className="h-20 w-20 text-gray-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">David Okafor</h3>
                <p className="text-e-green mb-2">Community Manager</p>
                <p className="text-gray-400 text-sm">
                  Building and nurturing the Kharif Knights farming community with a focus on knowledge sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="bg-e-dark-accent p-8 rounded-lg border border-gray-800 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-e-yellow/20 p-3 rounded-full mr-3">
              <Award className="h-6 w-6 text-e-yellow" />
            </div>
            <h2 className="text-2xl font-bold">Our Achievements</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-e-yellow/10 p-2 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 rounded-full bg-e-yellow"></div>
              </div>
              <div>
                <h3 className="font-bold">AgTech Innovation Award 2024</h3>
                <p className="text-gray-400">Recognized for our revolutionary AgriVision crop monitoring system</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-e-yellow/10 p-2 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 rounded-full bg-e-yellow"></div>
              </div>
              <div>
                <h3 className="font-bold">Sustainable Technology Excellence</h3>
                <p className="text-gray-400">For reducing water consumption by 30% in partner farms</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-e-yellow/10 p-2 rounded-full mr-3 mt-1">
                <div className="w-2 h-2 rounded-full bg-e-yellow"></div>
              </div>
              <div>
                <h3 className="font-bold">100,000+ Farmers Served</h3>
                <p className="text-gray-400">Milestone reached in Q1 2025, with presence in 12 countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
