import React, { useEffect, useRef, useState } from "react";
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const DropdownIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <div className="relative inline-block" ref={domNode}>
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="inline-flex justify-center items-center">
        {/* <EllipsisVerticalIcon className="w-6 h-6"/> */}
        <div className="text-inter text-l text-custom-blue">Voir</div>
      </button>
      {dropdownOpen && (
        <div
          className="absolute z-10 mt-2 bg-white shadow-lg rounded-md overflow-hidden"
          style={{
            right: '50%',
            transform: 'translateX(50%)',
            minWidth: '140px', // Minimum width can be adjusted as needed
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          <DropdownItem label="Voir" />
          <DropdownItem label="Modifier" />
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
        e.preventDefault(); // Prevent the page navigation
        console.log(label + " clicked");
      }}
    >
      {label}
    </a>
  );
};
