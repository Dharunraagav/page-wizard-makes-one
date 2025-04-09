
import React, { ReactNode } from 'react';

interface ActivityItemProps {
  icon: ReactNode;
  title: string;
  time: string;
  description: string;
  iconBackground?: string;
}

const ActivityItem = ({ 
  icon, 
  title, 
  time, 
  description, 
  iconBackground = 'bg-e-green' 
}: ActivityItemProps) => {
  return (
    <div className="flex items-start mb-5">
      <div className={`${iconBackground} p-2 rounded-full mr-3 flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <div className="flex items-center">
          <h4 className="font-medium text-sm">{title}</h4>
        </div>
        <p className="text-xs text-gray-500">{time}</p>
        <p className="text-sm text-gray-300 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
