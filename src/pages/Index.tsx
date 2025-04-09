
import React from 'react';
import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/ProgressBar';
import MetricCard from '@/components/MetricCard';
import RecommendationCard from '@/components/RecommendationCard';
import ForecastCard from '@/components/ForecastCard';
import WeatherDay from '@/components/WeatherDay';
import ActivityItem from '@/components/ActivityItem';
import CropMetricsTab from '@/components/CropMetricsTab';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ThermometerSun, 
  Droplet, 
  Sprout, 
  Leaf, 
  Flower2, 
  Apple, 
  SunMedium, 
  Cloud, 
  CloudRain, 
  Wind, 
  AlertTriangle, 
  Bug,
  Droplets,
  Zap
} from "lucide-react";

const Index = () => {
  // Mock data for charts
  const tempData = [20, 22, 25, 24, 26, 25, 27, 28, 30, 29, 28, 27, 28, 27, 26, 25, 24];
  const humidityData = [50, 52, 55, 58, 60, 62, 65, 67, 68, 65, 63, 60, 62, 63, 65, 64, 63];
  const soilData = [40, 42, 43, 42, 44, 45, 44, 43, 45, 46, 45, 44, 43, 42, 45, 44, 45];
  const growthData = [30, 50, 20, 35, 65, 45, 30, 20, 45, 60, 80, 65, 55, 45, 60, 75, 70, 65, 55, 40, 50, 60, 70, 60];
  
  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
            <div className="flex items-center text-gray-400">
              <span className="mr-2">April 9th, 2025</span>
              <span>Day 45 of 50 until harvest</span>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <Select>
              <SelectTrigger className="w-36 bg-e-dark-accent border-gray-700">
                <SelectValue placeholder="Select Crop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="corn">Corn</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="w-36 bg-e-dark-accent border-gray-700">
                <SelectValue placeholder="Select Field" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="field1">Field 1</SelectItem>
                <SelectItem value="field2">Field 2</SelectItem>
                <SelectItem value="field3">Field 3</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-e-green hover:bg-e-green/90 text-black">Add New Crop</Button>
          </div>
        </div>
        
        {/* Growth Progress */}
        <div className="bg-e-dark-accent rounded-lg p-5 mb-6">
          <h2 className="text-xl font-medium mb-1">Growth Progress</h2>
          <p className="text-sm text-gray-400 mb-3">Day 45 of 50 until harvest</p>
          <ProgressBar progress={90} />
          
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="flex flex-col items-center">
              <div className="bg-e-dark-accent border border-e-green rounded-full p-2 mb-2">
                <Sprout className="h-5 w-5 text-e-green" />
              </div>
              <span className="text-sm text-e-green">Germination</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-e-dark-accent border border-e-green rounded-full p-2 mb-2">
                <Leaf className="h-5 w-5 text-e-green" />
              </div>
              <span className="text-sm text-e-green">Vegetative</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-e-dark-accent border border-e-green rounded-full p-2 mb-2">
                <Flower2 className="h-5 w-5 text-e-green" />
              </div>
              <span className="text-sm text-e-green">Flowering</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-e-dark-accent border border-gray-700 rounded-full p-2 mb-2">
                <Apple className="h-5 w-5 text-gray-500" />
              </div>
              <span className="text-sm text-gray-500">Mature</span>
            </div>
          </div>
        </div>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <MetricCard 
            title="Temperature" 
            value={28}
            unit="°C"
            change={{ value: 2, type: 'increase' }}
            icon={<ThermometerSun className="h-4 w-4" />}
            color="#FF5C5C"
            lastUpdated="5 minutes ago"
            chartData={tempData}
          />
          
          <MetricCard 
            title="Humidity" 
            value={65}
            unit="%"
            change={{ value: 5, type: 'increase' }}
            icon={<Droplet className="h-4 w-4" />}
            color="#4EADFF"
            lastUpdated="5 minutes ago"
            chartData={humidityData}
          />
          
          <MetricCard 
            title="Soil Moisture" 
            value={45}
            unit="%"
            change={{ value: 3, type: 'increase' }}
            icon={<Sprout className="h-4 w-4" />}
            color="#0FCE66"
            lastUpdated="5 minutes ago"
            chartData={soilData}
          />
        </div>
        
        {/* Weather and Crop Forecast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ForecastCard title="Weather Forecast" subtitle="5-day forecast for your location">
            <div className="grid grid-cols-5 gap-2">
              <WeatherDay day="Today" icon={<SunMedium className="h-8 w-8 text-e-yellow" />} temp="28°C" />
              <WeatherDay day="Tue" icon={<Cloud className="h-8 w-8 text-gray-400" />} temp="26°C" />
              <WeatherDay day="Wed" icon={<CloudRain className="h-8 w-8 text-e-blue" />} temp="24°C" />
              <WeatherDay day="Thu" icon={<CloudRain className="h-8 w-8 text-e-blue" />} temp="23°C" />
              <WeatherDay day="Fri" icon={<SunMedium className="h-8 w-8 text-e-yellow" />} temp="27°C" />
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Wind className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-sm">Wind</span>
                </div>
                <span className="text-sm">12 km/h</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <CloudRain className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-sm">Chance of Rain</span>
                </div>
                <span className="text-sm">10%</span>
              </div>
            </div>
          </ForecastCard>
          
          <ForecastCard title="Crop Forecast" subtitle="Predicted yield and harvest timeline">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Estimated Yield</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">4.2</span>
                  <span className="ml-1">tons/acre</span>
                </div>
                <span className="text-xs text-e-green">+8% from last season</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full border-4 border-e-green flex items-center justify-center relative">
                  <span className="text-2xl font-bold">90%</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-1">Harvest Timeline</p>
              <ProgressBar progress={90} />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Planting (Jan 22)</span>
                <span>Today</span>
                <span>Harvest (Apr 12)</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-1">Market Price Forecast</p>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm">Current: <span className="text-white">₹2,450/quintal</span></p>
                </div>
                <div>
                  <p className="text-sm">Harvest: <span className="text-e-green">₹2,850/quintal</span></p>
                </div>
              </div>
            </div>
          </ForecastCard>
        </div>
        
        {/* Crop Metrics and Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-e-dark-accent rounded-lg p-5">
            <h2 className="text-xl font-medium mb-2">Crop Metrics</h2>
            <CropMetricsTab growthData={growthData} />
          </div>
          
          <div className="bg-e-dark-accent rounded-lg p-5">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-medium">Recommendations</h2>
              <span className="text-xs text-gray-400">Smart suggestions based on current conditions</span>
            </div>
            
            <RecommendationCard 
              title="Irrigation Needed"
              description="Soil moisture is below optimal levels. Consider irrigating within the next 24 hours."
              icon={<Droplets className="h-5 w-5 text-e-blue" />}
              actionLabel="Schedule Irrigation"
              variant="warning"
            />
            
            <RecommendationCard 
              title="Optimal Sunlight"
              description="Current sunlight levels are optimal for crop growth. No action needed."
              icon={<SunMedium className="h-5 w-5 text-e-yellow" />}
            />
            
            <RecommendationCard 
              title="Fertilizer Application"
              description="Based on growth stage, apply nitrogen-rich fertilizer within the next 3 days."
              icon={<Zap className="h-5 w-5 text-e-green" />}
              actionLabel="View Fertilizer Guide"
            />
            
            <RecommendationCard 
              title="Pest Alert"
              description="Early signs of aphid infestation detected. Immediate action recommended."
              icon={<Bug className="h-5 w-5 text-white" />}
              actionLabel="View Treatment Options"
              variant="alert"
            />
          </div>
        </div>
        
        {/* Activity Feed */}
        <div className="bg-e-dark-accent rounded-lg p-5 mb-6">
          <h2 className="text-xl font-medium mb-4">Activity Feed</h2>
          <p className="text-sm text-gray-400 mb-4">Recent events and notifications</p>
          
          <div>
            <ActivityItem 
              icon={<Droplets className="h-5 w-5 text-black" />}
              title="Irrigation System Activated"
              time="Today, 10:30 AM"
              description="Automatic irrigation delivered 2.5L/m² of water."
            />
            
            <ActivityItem 
              icon={<AlertTriangle className="h-5 w-5 text-black" />}
              title="Temperature Alert"
              time="Today, 8:15 AM"
              description="Temperature exceeded 30°C for more than 2 hours."
              iconBackground="bg-e-yellow"
            />
            
            <ActivityItem 
              icon={<CloudRain className="h-5 w-5 text-black" />}
              title="Rain Detected"
              time="Yesterday, 4:45 PM"
              description="Light rainfall (2mm) detected. Irrigation schedule adjusted."
              iconBackground="bg-e-blue"
            />
            
            <ActivityItem 
              icon={<Bug className="h-5 w-5 text-white" />}
              title="Pest Detection Alert"
              time="Yesterday, 2:30 PM"
              description="AI image analysis detected potential aphid infestation in sector B3."
              iconBackground="bg-e-red"
            />
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-4 pb-6 mt-8">
          <p>© 2025 E-Uzhavan. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
