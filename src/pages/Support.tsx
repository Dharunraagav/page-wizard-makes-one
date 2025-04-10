
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, Mail, Phone, MessageSquare, FileQuestion, Zap, Leaf } from 'lucide-react';

const Support = () => {
  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support Center</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're here to help you get the most out of your Kharif Knights experience. Browse our resources or contact us directly.
          </p>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <HelpCircle className="h-6 w-6 text-e-green mr-2" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ Item 1 */}
            <Card className="bg-e-dark-accent border-gray-800">
              <CardHeader>
                <div className="flex items-center">
                  <div className="bg-e-green/20 p-2 rounded-full mr-3">
                    <FileQuestion className="h-5 w-5 text-e-green" />
                  </div>
                  <CardTitle>How do I install sensors in my field?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our sensors are designed for easy installation. Follow our step-by-step guide in the installation manual, or watch our tutorial videos. If you need assistance, our technical team can schedule a remote session to help you.
                </p>
              </CardContent>
            </Card>
            
            {/* FAQ Item 2 */}
            <Card className="bg-e-dark-accent border-gray-800">
              <CardHeader>
                <div className="flex items-center">
                  <div className="bg-e-green/20 p-2 rounded-full mr-3">
                    <FileQuestion className="h-5 w-5 text-e-green" />
                  </div>
                  <CardTitle>How often should I calibrate my sensors?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We recommend calibrating your sensors at the beginning of each growing season or every six months. The app will send you reminders when calibration is due. Our auto-calibration feature also adjusts settings based on environmental factors.
                </p>
              </CardContent>
            </Card>
            
            {/* FAQ Item 3 */}
            <Card className="bg-e-dark-accent border-gray-800">
              <CardHeader>
                <div className="flex items-center">
                  <div className="bg-e-green/20 p-2 rounded-full mr-3">
                    <FileQuestion className="h-5 w-5 text-e-green" />
                  </div>
                  <CardTitle>Can I use Kharif Knights in areas with poor internet?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Yes! Our system is designed to work in areas with limited connectivity. The sensors store data locally and sync when connection is available. You can also set up a local hub to gather data from multiple sensors for periodic uploads.
                </p>
              </CardContent>
            </Card>
            
            {/* FAQ Item 4 */}
            <Card className="bg-e-dark-accent border-gray-800">
              <CardHeader>
                <div className="flex items-center">
                  <div className="bg-e-green/20 p-2 rounded-full mr-3">
                    <FileQuestion className="h-5 w-5 text-e-green" />
                  </div>
                  <CardTitle>How accurate are the weather forecasts?</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our weather forecasts combine data from multiple meteorological sources and local sensors for high accuracy. We typically achieve 85-90% accuracy for 3-day forecasts and 70-80% for 5-day forecasts, depending on your region and local weather patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email Support */}
          <Card className="bg-e-dark-accent border-gray-800">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-e-blue/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-e-blue" />
              </div>
              <CardTitle>Email Support</CardTitle>
              <CardDescription className="text-gray-400">Get a response within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-e-blue font-medium">support@kharifknights.com</p>
            </CardContent>
          </Card>
          
          {/* Phone Support */}
          <Card className="bg-e-dark-accent border-gray-800">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-e-green/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-e-green" />
              </div>
              <CardTitle>Phone Support</CardTitle>
              <CardDescription className="text-gray-400">Available Mon-Fri, 9 AM - 6 PM</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-e-green font-medium">+1 (555) 123-4567</p>
            </CardContent>
          </Card>
          
          {/* Live Chat */}
          <Card className="bg-e-dark-accent border-gray-800">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-e-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-e-yellow" />
              </div>
              <CardTitle>Live Chat</CardTitle>
              <CardDescription className="text-gray-400">Get instant assistance</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="bg-e-yellow hover:bg-e-yellow/80 text-black">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Form */}
        <div className="bg-e-dark-accent rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Send us a Message</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <Input className="bg-e-dark border-gray-700 text-white" placeholder="John Doe" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <Input className="bg-e-dark border-gray-700 text-white" placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
            <Input className="bg-e-dark border-gray-700 text-white" placeholder="How can we help you?" />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <Textarea 
              className="bg-e-dark border-gray-700 text-white min-h-[120px]" 
              placeholder="Please describe your issue or question in detail"
            />
          </div>
          
          <Button className="w-full bg-e-green hover:bg-e-green/80 text-black">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Support;
