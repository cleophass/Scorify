import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Assurez-vous d'importer useNavigate
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

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

const DropdownIcon = ({ label1, path1, label2, path2 }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    let domNode = useClickOutside(() => {
        setDropdownOpen(false);
    });

    return (
        <div className="relative inline-block" ref={domNode}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="inline-flex justify-center items-center">
                <EllipsisVerticalIcon className="w-6 h-6" />
            </button>
            {dropdownOpen && (
                <div
                    className="absolute z-10 mt-2 bg-white shadow-lg rounded-md overflow-hidden"
                    style={{
                        right: "50%",
                        transform: "translateX(50%)",
                        minWidth: "140px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <DropdownItem label="Voir" path={path1} />
                    <DropdownItem label={label2} path={path2} />
                </div>
            )}
        </div>
    );
};

export default DropdownIcon;

const DropdownItem = ({ label, path }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(path)}
            className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700"
        >
            {label}
        </div>
    );
};
