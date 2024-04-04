import React from 'react';

const ButtonGroup = () => {
  return (
    <div className="flex items-center justify-center rounded-md shadow-sm border border-gray-300" role="group" style={{ height: '50px' }}>
      <a
        href="#"
        className="bg-blue-600 text-white font-medium rounded-l-md hover:bg-blue-700 py-3 px-4 transition-all"
      >
        Contrats
      </a>
      <a
        href="#"
        className="bg-white text-gray-700 font-medium hover:bg-gray-100 py-3 px-4 transition-all rounded-r-md"
      >
        Affaires
      </a>
    </div>
  );
}

export default ButtonGroup;
