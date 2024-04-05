import React from 'react';

const TextInput = ({ label, value, onChange, isInvalid }) => {
  return (
    <div className="flex flex-col text-left" style={{ width: '400px' }}>
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        autoComplete={label.toLowerCase().includes('email') ? 'email' : 'off'}
        className={`rounded-md border px-5 py-3 text-base text-body-color outline-none transition duration-300 ease-in-out ${isInvalid ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
        placeholder={label}
      />
      <p className={`mt-2 text-sm transition-opacity duration-300 ease-in-out ${isInvalid ? 'text-red-500 opacity-100' : 'opacity-0'}`}>
        Veuillez entrer une adresse mail valide
      </p>
    </div>
  );
};

export default TextInput;
