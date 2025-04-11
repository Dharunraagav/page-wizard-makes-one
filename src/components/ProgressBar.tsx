
import React from 'react';
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  className?: string;
  barColor?: string;
}

const ProgressBar = ({ progress, className, barColor = "bg-e-green" }: ProgressBarProps) => {
  return (
    <div className={cn("w-full h-2 bg-gray-800 rounded-full overflow-hidden", className)}>
      <div 
        className={`h-full ${barColor} rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
