import React from 'react';

const TextInput = ({ label }) => {
  return (
    <div className="flex flex-col text-left"style={{ width: '400px' }}>
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        style={{ width: '400px' }}
        className="rounded-md border bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-custom-blue border-stroke dark:border-dark-3 dark:text-white"
        placeholder={label}
      />
    </div>
  );
};

export default TextInput;
