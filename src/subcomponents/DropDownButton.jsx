import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

// Hook pour fermer le dropdown lors d'un clic à l'extérieur
let useClickOutside = (handler) => {
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

const DropDownButton = ({ label, options }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <div className="inline-block relative text-left" ref={domNode}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="bg-white border border-light-gray rounded-lg flex items-center justify-between transition-all hover:bg-gray-50"
        style={{ width: '250px', height: '50px' }}
      >
        <span className="text-gray-500 text-base font-normal leading-relaxed ml-4">
          {label}
        </span>
        <ChevronDownIcon className="w-4 h-4 mr-4"/>
      </button>
      {dropdownOpen && (
        <div className="shadow-lg absolute left-0 z-10 mt-1 w-full rounded-md bg-white py-1">
          {options.map(option => (
            <DropdownItem key={option.label} label={option.label} href={option.href} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownButton;

const DropdownItem = ({ label, href }) => {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      {label}
    </a>
  );
};
