import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const ButtonFill = ({ label, height = "auto", width = "auto", fill = true, icon = false }) => {
    const iconColor = fill ? "text-white" : "text-blue-600"; // Texte blanc quand rempli, bleu sinon.

    const buttonStyle = fill
        ? "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-sm" // Style pour bouton rempli
        : "text-blue-600 border border-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded shadow-sm"; // Style pour bouton non rempli

    if (icon) {
        label = (
            <div className="flex items-center">
                <PlusCircleIcon className={`${iconColor} h-5 w-5`} />
                <span className="ml-2">{label}</span> {/* Espace entre icône et texte */}
            </div>
        );
    }

    return <button className={buttonStyle}>{label}</button>;
};

export default ButtonFill;
