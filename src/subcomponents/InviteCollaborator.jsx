import React, { useEffect, useRef, useState } from "react";
import TextInput from '../subcomponents/TextInput.jsx';
import DropdownComponent from '../subcomponents/DropdownComponent.jsx';

const Buttontemp = ({ label, height = '50px', width = '221px', onClick }) => {
    const buttonStyle = {
      width,
      height,
    };
    const className = 'bg-custom-blue text-white font-bold py-2 px-4 rounded';

    return (
        <button
          className={className}
          style={buttonStyle}
          onClick={onClick}
        >
          {label}
          style
        </button>
      );
    };
  
    const InviteCollaborator = () => {
        const [modalOpen, setModalOpen] = useState(false);
        const modal = useRef(null);
        const trigger = useRef(null);
      
        // close on click outside
        useEffect(() => {
          const clickHandler = ({ target }) => {
            if (modalOpen && modal.current && !modal.current.contains(target) && !trigger.current.contains(target)) {
              setModalOpen(false);
            }
          };
      
          document.addEventListener('mousedown', clickHandler);
          return () => document.removeEventListener('mousedown', clickHandler);
        }, [modalOpen]);
      
        // close if the esc key is pressed
        useEffect(() => {
          const keyHandler = ({ keyCode }) => {
            if (keyCode === 27) {
              setModalOpen(false);
            }
          };
      
          document.addEventListener('keydown', keyHandler);
          return () => document.removeEventListener('keydown', keyHandler);
        }, []);
      
        
  return (
    <>
      <div className="">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`bg-custom-blue text-white font-bold py-2 px-4 rounded `}
          style={{ height: '50px', width: '221px' }}
        >
            Inviter un collaborateur        </button>
        <div
          className={` bg-black bg-opacity-50 z-10 fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}

            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
              Inviter un collaborateur
            </h3>
            <span
              className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-custom-blue"
            ></span>
            
            <TextInput width="430px"label="Adresse email" />
            <TextInput width="430px"label="Téléphone (optionnel)" placeholder={"Téléphone"} />
            <div className="mb-10">
            <h1 className={`text-left mb-2 text-sm font-medium text-gray-700'}`}>Rôle</h1>

            <DropdownComponent label="Rôle" width="430px" options={[{ label: "Admin" }, { label: "Collaborateur" }]} />
            </div>
     
            
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition dark:text-white"
                >
                  Annuler
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button onClick={() => setModalOpen(false)} className="text-inter block w-full rounded-md border border-primary bg-custom-blue p-3 text-center text-base font-medium text-white ">
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteCollaborator;
