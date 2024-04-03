import React from 'react';

const TextInput = ({ label }) => {
  return (
    <div className="flex flex-col text-left"> {/* Add text-left class */}
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"

        placeholder={label}
      />
    </div>
  );
};

export default TextInput;

