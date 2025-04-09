
import React from 'react';
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSelector from './LanguageSelector';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const goToFeatures = () => {
    navigate('/#features');
  };
  
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-e-green">Kharif Knights</h1>
      </div>
      <div className="flex space-x-4 items-center">
        <a href="/#features" className="text-gray-300 hover:text-white">{t('nav.features')}</a>
        <a href="/#about" className="text-gray-300 hover:text-white">{t('nav.about')}</a>
        <a href="/#community" className="text-gray-300 hover:text-white">{t('nav.community')}</a>
        <a href="/#support" className="text-gray-300 hover:text-white">{t('nav.support')}</a>
        <div className="flex items-center ml-6 space-x-3">
          <LanguageSelector />
          <Moon className="h-5 w-5 text-gray-400" />
          <Button className="bg-e-green hover:bg-e-green/90 text-black font-medium">
            {t('nav.signIn')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
