import React from 'react';

const TextInput = ({ label, value, onChange, isInvalid }) => {
  return (
    <div className="flex flex-col text-left" style={{ width: '400px' }}>
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        /// if label contain email then autocomplete will be email
        autoComplete={label.toLowerCase().includes('email') ? 'email' : 'off'}
        
        className={`rounded-md border px-5 py-3 text-base text-body-color outline-none ${isInvalid ? 'border-red-500' : 'bg-transparent border-stroke focus:border-custom-blue'} dark:border-dark-3 dark:text-white`}
        placeholder={label}
      />
    </div>
  );
};

export default TextInput;
