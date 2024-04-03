import React from 'react';

const ButtonFill = ({label}) => {
  return (
    // Modifier les classes Tailwind pour correspondre à l'apparence souhaitée.
    <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' style={{ width: '400px' }}>
      {label}
    </button>
  )
}

export default ButtonFill;
