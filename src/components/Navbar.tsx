
import React from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSelector from './LanguageSelector';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Theme toggling logic would go here
  };
  
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-e-green">Kharif Knights</Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link to="/features" className="text-gray-300 hover:text-white">{t('nav.features')}</Link>
        <Link to="/about" className="text-gray-300 hover:text-white">{t('nav.about')}</Link>
        <Link to="/community" className="text-gray-300 hover:text-white">{t('nav.community')}</Link>
        <Link to="/support" className="text-gray-300 hover:text-white">{t('nav.support')}</Link>
        <div className="flex items-center ml-6 space-x-3">
          <LanguageSelector />
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-gray-400 cursor-pointer" onClick={toggleTheme} />
          ) : (
            <Moon className="h-5 w-5 text-gray-400 cursor-pointer" onClick={toggleTheme} />
          )}
          <Button className="bg-e-green hover:bg-e-green/90 text-black font-medium">
            {t('nav.signIn')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
