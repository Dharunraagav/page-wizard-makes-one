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
  Zap,
  Beaker
} from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';

const Index = () => {
  // Mock data for charts
  const tempData = [20, 22, 25, 24, 26, 25, 27, 28, 30, 29, 28, 27, 28, 27, 26, 25, 24];
  const humidityData = [50, 52, 55, 58, 60, 62, 65, 67, 68, 65, 63, 60, 62, 63, 65, 64, 63];
  const soilData = [40, 42, 43, 42, 44, 45, 44, 43, 45, 46, 45, 44, 43, 42, 45, 44, 45];
  const growthData = [30, 50, 20, 35, 65, 45, 30, 20, 45, 60, 80, 65, 55, 45, 60, 75, 70, 65, 55, 40, 50, 60, 70, 60];
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-e-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">{t('dashboard.title')}</h1>
            <div className="flex items-center text-gray-400">
              <span className="mr-2">{t('dashboard.date')}</span>
              <span>{t('dashboard.daysUntilHarvest')}</span>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <div className="bg-e-dark-accent border border-gray-700 rounded-md px-4 py-2 text-gray-300">
              {t('dashboard.crop')}: Cotton
            </div>
            <Button className="bg-e-green hover:bg-e-green/90 text-black">{t('dashboard.addNewCrop')}</Button>
          </div>
        </div>
        
        {/* Growth Progress */}
        <div className="bg-e-dark-accent rounded-lg p-5 mb-6">
          <h2 className="text-xl font-medium mb-1">{t('dashboard.growthProgress')}</h2>
          <p className="text-sm text-gray-400 mb-3">{t('dashboard.daysUntilHarvest')}</p>
          <ProgressBar progress={90} />
          
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="flex flex-col items-center">
              <div className="bg-e-dark-accent border border-e-green rounded-full p-2 mb-2">
                <Sprout className="h-5 w-5 text-e-green" />
              </div>
              <span className="text-sm text-e-green">{t('dashboard.stages.germination')}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-e-dark-accent border border-e-green rounded-full p-2 mb-2">
                <Leaf className="h-5 w-5 text-e-green" />
              </div>
              <span className="text-sm text-e-green">{t('dashboard.stages.vegetative')}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-e-dark-accent border border-e-green rounded-full p-2 mb-2">
                <Flower2 className="h-5 w-5 text-e-green" />
              </div>
              <span className="text-sm text-e-green">{t('dashboard.stages.flowering')}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-e-dark-accent border border-gray-700 rounded-full p-2 mb-2">
                <Apple className="h-5 w-5 text-gray-500" />
              </div>
              <span className="text-sm text-gray-500">{t('dashboard.stages.mature')}</span>
            </div>
          </div>
        </div>
        
        {/* NPK Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-e-dark-accent rounded-lg p-5">
            <div className="flex items-center mb-3">
              <Beaker className="h-6 w-6 mr-2 text-e-green" />
              <h2 className="text-xl font-medium">{t('dashboard.npk.nitrogen')}</h2>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>{t('dashboard.npk.level')}</span>
              <span className="text-e-green font-medium">65%</span>
            </div>
            <ProgressBar progress={65} barColor="bg-e-green" />
            <p className="text-sm text-gray-400 mt-3">
              {t('dashboard.npk.nitrogenDesc')}
            </p>
          </div>
          
          <div className="bg-e-dark-accent rounded-lg p-5">
            <div className="flex items-center mb-3">
              <Beaker className="h-6 w-6 mr-2 text-e-blue" />
              <h2 className="text-xl font-medium">{t('dashboard.npk.phosphorus')}</h2>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>{t('dashboard.npk.level')}</span>
              <span className="text-e-blue font-medium">45%</span>
            </div>
            <ProgressBar progress={45} barColor="bg-e-blue" />
            <p className="text-sm text-gray-400 mt-3">
              {t('dashboard.npk.phosphorusDesc')}
            </p>
          </div>
          
          <div className="bg-e-dark-accent rounded-lg p-5">
            <div className="flex items-center mb-3">
              <Beaker className="h-6 w-6 mr-2 text-e-yellow" />
              <h2 className="text-xl font-medium">{t('dashboard.npk.potassium')}</h2>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>{t('dashboard.npk.level')}</span>
              <span className="text-e-yellow font-medium">70%</span>
            </div>
            <ProgressBar progress={70} barColor="bg-e-yellow" />
            <p className="text-sm text-gray-400 mt-3">
              {t('dashboard.npk.potassiumDesc')}
            </p>
          </div>
        </div>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <MetricCard 
            title={t('dashboard.metrics.temperature')} 
            value={28}
            unit="°C"
            change={{ value: 2, type: 'increase' }}
            icon={<ThermometerSun className="h-4 w-4" />}
            color="#FF5C5C"
            lastUpdated={t('dashboard.metrics.lastUpdated')}
            chartData={tempData}
          />
          
          <MetricCard 
            title={t('dashboard.metrics.humidity')} 
            value={65}
            unit="%"
            change={{ value: 5, type: 'increase' }}
            icon={<Droplet className="h-4 w-4" />}
            color="#4EADFF"
            lastUpdated={t('dashboard.metrics.lastUpdated')}
            chartData={humidityData}
          />
          
          <MetricCard 
            title={t('dashboard.metrics.soilMoisture')} 
            value={45}
            unit="%"
            change={{ value: 3, type: 'increase' }}
            icon={<Sprout className="h-4 w-4" />}
            color="#0FCE66"
            lastUpdated={t('dashboard.metrics.lastUpdated')}
            chartData={soilData}
          />
        </div>
        
        {/* Weather and Crop Forecast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ForecastCard title={t('dashboard.weather.title')} subtitle={t('dashboard.weather.subtitle')}>
            <div className="grid grid-cols-5 gap-2">
              <WeatherDay day={t('dashboard.weather.today')} icon={<SunMedium className="h-8 w-8 text-e-yellow" />} temp="28°C" />
              <WeatherDay day={t('dashboard.weather.tue')} icon={<Cloud className="h-8 w-8 text-gray-400" />} temp="26°C" />
              <WeatherDay day={t('dashboard.weather.wed')} icon={<CloudRain className="h-8 w-8 text-e-blue" />} temp="24°C" />
              <WeatherDay day={t('dashboard.weather.thu')} icon={<CloudRain className="h-8 w-8 text-e-blue" />} temp="23°C" />
              <WeatherDay day={t('dashboard.weather.fri')} icon={<SunMedium className="h-8 w-8 text-e-yellow" />} temp="27°C" />
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Wind className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-sm">{t('dashboard.weather.wind')}</span>
                </div>
                <span className="text-sm">12 km/h</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <CloudRain className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-sm">{t('dashboard.weather.chanceOfRain')}</span>
                </div>
                <span className="text-sm">10%</span>
              </div>
            </div>
          </ForecastCard>
          
          <ForecastCard title={t('dashboard.forecast.title')} subtitle={t('dashboard.forecast.subtitle')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">{t('dashboard.forecast.estimatedYield')}</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">4.2</span>
                  <span className="ml-1">tons/acre</span>
                </div>
                <span className="text-xs text-e-green">{t('dashboard.forecast.yieldChange')}</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full border-4 border-e-green flex items-center justify-center relative">
                  <span className="text-2xl font-bold">90%</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-1">{t('dashboard.forecast.harvestTimeline')}</p>
              <ProgressBar progress={90} />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{t('dashboard.forecast.planting')}</span>
                <span>{t('dashboard.forecast.today')}</span>
                <span>{t('dashboard.forecast.harvest')}</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-1">{t('dashboard.forecast.marketPriceForecast')}</p>
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
            <h2 className="text-xl font-medium mb-2">{t('dashboard.cropMetrics')}</h2>
            <CropMetricsTab growthData={growthData} />
          </div>
          
          <div className="bg-e-dark-accent rounded-lg p-5">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-medium">{t('dashboard.recommendations.title')}</h2>
              <span className="text-xs text-gray-400">{t('dashboard.recommendations.subtitle')}</span>
            </div>
            
            <RecommendationCard 
              title={t('dashboard.recommendations.irrigationNeeded')}
              description={t('dashboard.recommendations.irrigationDescription')}
              icon={<Droplets className="h-5 w-5 text-e-blue" />}
              actionLabel={t('dashboard.recommendations.scheduleIrrigation')}
              variant="warning"
            />
            
            <RecommendationCard 
              title={t('dashboard.recommendations.optimalSunlight')}
              description={t('dashboard.recommendations.optimalSunlightDescription')}
              icon={<SunMedium className="h-5 w-5 text-e-yellow" />}
            />
            
            <RecommendationCard 
              title={t('dashboard.recommendations.fertilizerApplication')}
              description={t('dashboard.recommendations.fertilizerDescription')}
              icon={<Zap className="h-5 w-5 text-e-green" />}
              actionLabel={t('dashboard.recommendations.viewFertilizerGuide')}
            />
            
            <RecommendationCard 
              title={t('dashboard.recommendations.pestAlert')}
              description={t('dashboard.recommendations.pestDescription')}
              icon={<Bug className="h-5 w-5 text-white" />}
              actionLabel={t('dashboard.recommendations.viewTreatmentOptions')}
              variant="alert"
            />
          </div>
        </div>
        
        {/* Activity Feed */}
        <div className="bg-e-dark-accent rounded-lg p-5 mb-6">
          <h2 className="text-xl font-medium mb-4">{t('dashboard.activityFeed.title')}</h2>
          <p className="text-sm text-gray-400 mb-4">{t('dashboard.activityFeed.subtitle')}</p>
          
          <div>
            <ActivityItem 
              icon={<Droplets className="h-5 w-5 text-black" />}
              title={t('dashboard.activityFeed.irrigationSystemActivated')}
              time={t('dashboard.activityFeed.time')}
              description={t('dashboard.activityFeed.description')}
            />
            
            <ActivityItem 
              icon={<AlertTriangle className="h-5 w-5 text-black" />}
              title={t('dashboard.activityFeed.temperatureAlert')}
              time={t('dashboard.activityFeed.time')}
              description={t('dashboard.activityFeed.description')}
              iconBackground="bg-e-yellow"
            />
            
            <ActivityItem 
              icon={<CloudRain className="h-5 w-5 text-black" />}
              title={t('dashboard.activityFeed.rainDetected')}
              time={t('dashboard.activityFeed.time')}
              description={t('dashboard.activityFeed.description')}
              iconBackground="bg-e-blue"
            />
            
            <ActivityItem 
              icon={<Bug className="h-5 w-5 text-white" />}
              title={t('dashboard.activityFeed.pestDetectionAlert')}
              time={t('dashboard.activityFeed.time')}
              description={t('dashboard.activityFeed.description')}
              iconBackground="bg-e-red"
            />
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-4 pb-6 mt-8">
          <p>© 2025 E-Uzhavan. {t('footer.rights')}</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#privacy" className="hover:text-gray-400">{t('footer.privacy')}</a>
            <a href="#terms" className="hover:text-gray-400">{t('footer.terms')}</a>
            <a href="#contact" className="hover:text-gray-400">{t('footer.contact')}</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
