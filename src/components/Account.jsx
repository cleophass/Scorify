import React from 'react';
import ButtonFill from '../subcomponents/ButtonFill.jsx';
import profilepicture from '../assets/monkey.jpg';
import MyInfo from '../subcomponents/MyInfo.jsx';

const Account = () => {
    return (
        <div id='content-to-export' className="px-16 py-10">
            <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-custom-grey">Mon compte</h1>
        <div style={{ display: 'flex', gap: '18px' }}>
        <ButtonFill label="Exporter (.xls)" height='50px' fill={false} />
        <ButtonFill label="Inviter un collaborateur" width='221px' height='50px' />
        </div>
        </div>

        <div className='inline-flex items-start justify-start gap-6'>
        <img className="h-16 w-16 rounded-full border-2 border-custom-blue" src={profilepicture} alt="Profile" />
        <div className=''>
        <span className="text-blue-600 text-sm font-bold leading-relaxed font-inter">Modifier la photo<br/></span>
        <span className="text-gray-500 text-base font-normal leading-normal font-inter">Recommandé : 500 x 500 px (PNG, SVG, JPG)</span>
                
        </div>





      </div>
        <div className='mt-10 '>
         <MyInfo />
        
        </div>
      
        </div>
    );
};
export default Account;
