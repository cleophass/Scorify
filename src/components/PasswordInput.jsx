import React, { useState } from 'react';
import {
    
    EyeIcon,
    EyeSlashIcon,
    
  } from '@heroicons/react/24/outline';

const PasswordInput = ({ label }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="flex flex-col text-left">
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={isHidden ? 'password' : 'text'}
          className="w-full rounded-md border border-stroke bg-transparent pr-10 px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
          placeholder={label}
        />
        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={toggleVisibility}>
          {isHidden ? (
            <EyeSlashIcon className="h-5 w-5 bg-white" />
          ) : (
            <EyeIcon className="h-5 w-5 bg-transparent" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
