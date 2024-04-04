import React from 'react';

const ButtonFill = ({ label, width = '175px' }) => { // Default width set to '400px'
  const buttonStyle = {
    width, // Use the width variable here
  };

  return (
    <button 
      className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      style={buttonStyle}
    >
      {label}
    </button>
  )
}

export default ButtonFill;
