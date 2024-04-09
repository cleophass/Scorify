import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// Handler hook for when Outside click dropdown close
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
// Handler hook for when Outside click dropdown close End Code====>>

const DropDownButton = ({ label, options, onChange }) => {
    const [selected, setSelected] = useState(label);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    let domNode = useClickOutside(() => {
        setDropdownOpen(false);
    });

    return (
        <div className="inline-block relative text-left" ref={domNode}>
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-white border border-light-gray rounded-lg flex items-center justify-between transition-all hover:bg-gray-50"
                style={{ width: "250px", height: "50px" }} // Apply width and height directly to the button
            >
                <span className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed ml-4">
                    {selected}
                </span>
                <ChevronDownIcon className="w-4 h-4 mr-4" />
            </button>
            {dropdownOpen && (
                <div className="shadow-lg absolute left-0 z-10 mt-1 w-full rounded-md bg-white py-1">
                    {options?.map((option, index) => (
                        <p
                            key={option + String(index)}
                            className="block px-4
                              onChange(option) py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                                setSelected(option);
                                onChange(option);
                            }}
                        >
                            {option}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDownButton;

DropDownButton.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};
