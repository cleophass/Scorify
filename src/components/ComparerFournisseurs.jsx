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
import Pagination from "../subcomponents/Pagination.jsx";

const ComparerFournisseurs = () => {
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
        XLSX.utils.book_append_sheet(wb, ws, "Fournisseur");
        XLSX.writeFile(wb, "Affaire.xlsx");
    };

    // Define onChangeService
    const onChangeService = (event) => {
        console.log("Selected service:", event.target.value);
    };

    return (
        <div className="px-16 py-10">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-bold text-black">Comparer les fournisseurs</h1>
                <div className="flex gap-3">
                    <ButtonFill label="Annuler" fill={false} />
                    <ButtonFill label="Exporter (.xls)" onClick={exportToExcel} toaster={true}/>
                </div>
            </div>
            <div className="flex justify-left items-left mb-6">
                <div className="flex gap-5">
                    <DropDownButton
                        label="Logitec"
                        options={["Safran", "Swile", "Paul", "Immo Dubois"]}
                        onChange={onChangeService}
                    />
                    <DropDownButton
                        label="Safran"
                        options={["Logitec", "SWile", "Paul", "Immo Dubois"]}
                        onChange={onChangeService}
                    />
                    <DropDownButton
                        label="Sélectionner un fournisseur"
                        options={["Logitec", "Safran", "SWile", "Paul", "Immo Dubois"]}
                        onChange={onChangeService}
                    />
                    <DropDownButton
                        label="Sélectionner un fournisseur"
                        options={["Logitec", "Safran", "SWile", "Paul", "Immo Dubois"]}
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

export default ComparerFournisseurs;
