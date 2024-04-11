import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
const ButtonFill = ({ label, height='auto',width = 'auto', fill = true, icon=false}) => { // Added fill prop with a default of true
  // Conditionally setting the className and additional styles based on the fill prop
  const buttonStyle = {
    width, // Use the given width
    height, // Use the given height
  };
  // if icon is true add the icon to the label
  if (icon) {
    label = (
      <div className="flex items-center justify-center">
        <PlusCircleIcon className="h-6 pr-2 text-white" />
        {label}
      </div>
    );
  }


  const className = fill
    ? 'bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    : 'border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-primary hover:bg-blue-light-5 hover:text-body-color dark:hover:text-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue-light-3';

  return (
    <button 
      className={className}
      style={buttonStyle}
    >
      {label}
    </button>
  )
}

export default ButtonFill;
