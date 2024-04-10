import React from "react";
const ButtonOutline = ({ label, onClick, width = "175px",height="50px"}) => {
    // Default width set to '400px'
    const buttonStyle = {
        width, // Use the width variable here
        height,
        border: "1px solid",
    };

    return (
        <button
            className="rounded bg-white px-4 py-2 text-blue-700 font-bold border-blue-700 hover:bg-gray-50"
            style={buttonStyle}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default ButtonOutline;
