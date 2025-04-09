
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center">
      <Languages className="h-4 w-4 mr-2 text-gray-300" />
      <Select
        value={currentLanguage}
        onValueChange={(value) => setLanguage(value as 'en' | 'ta')}
      >
        <SelectTrigger className="w-[100px] bg-transparent border-gray-700 text-gray-300 h-8">
          <SelectValue placeholder="English" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ta">தமிழ்</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
