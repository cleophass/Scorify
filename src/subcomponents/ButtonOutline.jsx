const ButtonOutline = ({ label, onClick, width = "175px" }) => {
    // Default width set to '400px'
    const buttonStyle = {
        width, // Use the width variable here
    };

    return (
        <button
            className="rounded bg-white px-4 py-2 text-blue-700 font-bold border-2 border-blue-700 hover:bg-gray-50"
            style={buttonStyle}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default ButtonOutline;
