import React, { useState } from "react";
import ButtonGroup from "../subcomponents/ButtonGroup.jsx";
import DropDownButton from "../subcomponents/DropDownButton.jsx";
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import ButtonOutline from "../subcomponents/ButtonOutline.jsx";
import * as XLSX from "xlsx";

// Assurez-vous que le chemin d'importation de TableCritere est correct
import TableCritere from "../assets/TableCritere.json";
import TableComparer from "../subcomponents/TableComparer.jsx";
import TableComparerData from "../assets/TableComparerData.json";

const ComparerAffaires = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;

    const [activeTab, setActiveTab] = useState("contrats");
    // Assurez-vous que TableCritere est correctement formaté pour cette utilisation
    const tableData = TableCritere[activeTab] || [];

    const handleButtonClick = (tabName) => {
        setActiveTab(tabName);
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(tableData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Affaire");
        XLSX.writeFile(wb, "Affaire.xlsx");
    };

    // Define onChangeService
    const onChangeService = (event) => {
        console.log("Selected service:", event.target.value);
    };

    return (
        <div className="px-16 py-10">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-bold text-black">Comparer Affaires</h1>
                <div className="flex gap-3">
                    <ButtonFill label="Annuler" fill={false} />
                    <ButtonFill label="Exporter (.xls)" onClick={exportToExcel} />
                </div>
            </div>
            <div className="flex justify-around items-center mb-6">
                <div className="flex gap-5">
                    <DropDownButton
                        label="Titre de la"
                        options={["Affaire 1", "Affaire 2", "Affaire 3", "Affaire 4"]}
                        onChange={onChangeService}
                    />
                    <DropDownButton
                        label="Affaire 1"
                        options={["Affaire 1", "Affaire 2", "Affaire 3", "Affaire 4"]}
                        onChange={onChangeService}
                    />
                    <DropDownButton
                        label="Affaire 2"
                        options={["Affaire 1", "Affaire 2", "Affaire 3", "Affaire 4"]}
                        onChange={onChangeService}
                    />
                    <DropDownButton
                        label="Sélectionner une affaire"
                        options={["Affaire 1", "Affaire 2", "Affaire 3", "Affaire 4"]}
                        onChange={onChangeService}
                    />
                </div>
            </div>

            <div className="mb-10">
                <TableComparer data={TableComparerData} />
            </div>
        </div>
    );
};

export default ComparerAffaires;
