import React from "react";
import { PlusCircleIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const ButtonFill = ({
    label,
    height = "auto",
    width = "auto",
    fill = true,
    icon = false, // boolean to show/hide icon
    iconType = "plus", // "plus" or "arrow", default is "plus"
    onClick,
}) => {
    const iconColor = fill ? "text-white" : "text-blue-600"; // Text color based on fill
    const buttonStyle = fill
        ? "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-sm"
        : "text-blue-600 border border-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded shadow-sm";

    let IconComponent = null;
    if (icon) {
        if (iconType === "plus") {
            IconComponent = PlusCircleIcon;
        } else if (iconType === "arrow") {
            IconComponent = ArrowDownTrayIcon;
        }
    }

    return (
        <button className={buttonStyle} onClick={onClick} style={{ width, height }}>
            {IconComponent ? (
                <div className="flex items-center">
                    <IconComponent className={`${iconColor} h-5 w-5`} />
                    <span className="ml-2">{label}</span>
                </div>
            ) : (
                label
            )}
        </button>
    );
};

export default ButtonFill;
