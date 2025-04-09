
import React from 'react';
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-e-green">E-Uzhavan</h1>
      </div>
      <div className="flex space-x-4 items-center">
        <a href="#features" className="text-gray-300 hover:text-white">Features</a>
        <a href="#about" className="text-gray-300 hover:text-white">About Us</a>
        <a href="#community" className="text-gray-300 hover:text-white">Community</a>
        <a href="#support" className="text-gray-300 hover:text-white">Support</a>
        <div className="flex items-center ml-6 space-x-3">
          <div className="flex items-center space-x-2 border-r border-gray-600 pr-3">
            <span className="text-sm text-gray-300">English</span>
          </div>
          <Moon className="h-5 w-5 text-gray-400" />
          <Button className="bg-e-green hover:bg-e-green/90 text-black font-medium">Sign In</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
