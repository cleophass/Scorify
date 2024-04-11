import React, { useEffect, useRef, useState } from "react";
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, []); // Exécutez ce useEffect uniquement lors du montage

  return domNode;
};

const DropdownIcon = ({ option1 = "Voir", option2 = "Modifier" }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let domNode = useClickOutside(() => setDropdownOpen(false));

  return (
    <div className="relative inline-block" ref={domNode}>
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="inline-flex justify-center items-center">
        <EllipsisVerticalIcon className="w-6 h-6"/> {/* Assurez-vous que l'icône est importée correctement */}
      </button>
      {dropdownOpen && (
        <div
          className="absolute z-10 mt-2 bg-white shadow-lg rounded-md overflow-hidden"
          style={{
            right: '50%',
            transform: 'translateX(50%)',
            minWidth: '140px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          <DropdownItem label={option1} />
          <DropdownItem label={option2} />
        </div>
      )}
    </div>
  );
};

export default DropdownIcon;

const DropdownItem = ({ label }) => {
  return (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      onClick={(e) => {
        e.preventDefault(); // Prévenir la navigation par défaut
        console.log(label + " clicked");
      }}
    >
      {label}
    </a>
  );
};
