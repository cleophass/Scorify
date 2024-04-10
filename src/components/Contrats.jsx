import { useState } from "react";
import Table from "../subcomponents/Table";
import TableContrat from "../assets/TableContrat.json";
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import ButtonOutline from "../subcomponents/ButtonOutline.jsx";
import SearchBar from "../subcomponents/SearchBar.jsx";
import DropDownButton from "../subcomponents/DropDownButton.jsx";
import Pagination from "../subcomponents/Pagination.jsx";
import * as XLSX from "xlsx";
import React from "react";

const Contrats = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    const filterContracts = (contract) => {
        return searchQuery ? (
            contract.title.toLowerCase().includes(searchQuery) ||
            contract.id.toString().includes(searchQuery)
        ) : true;
    };

    const [service, setService] = useState("");
    const [scoreRange, setScoreRange] = useState(""); // État pour stocker la plage de score

    const filterByScore = (contract) => {
        if (scoreRange === "") { // Si "Rien" est sélectionné
            return contract.score === undefined; // Affiche seulement les contrats sans score
        }
        switch (scoreRange) {
            case "0-25":
                return contract.score >= 0 && contract.score <= 25;
            case "26-50":
                return contract.score >= 26 && contract.score <= 50;
            case "51-100":
                return contract.score >= 51 && contract.score <= 100;
            default:
                return true; // Si aucune plage de score n'est sélectionnée, retourner tous les contrats
        }
    };
    

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(TableContrat);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Contracts");
        XLSX.writeFile(wb, "Contracts.xlsx");
    };

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <div className="px-16 py-10">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl font-bold">Contrats</h1>
                    <div className="flex gap-3">
                        <ButtonOutline label="Exporter (.xls)" onClick={exportToExcel} />
                        <ButtonFill label="Nouveau contrat" />
                    </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <SearchBar
                        placeholder="Recherchez par affaire, contrat, ID ..."
                        onSearch={handleSearch}
                    />
                    <div className="flex gap-2">
                        <DropDownButton
                            label="Filtrer par service"
                            options={["Tous", "Développeur", "Gestionnaire de Projet", "Chercheur en informatique"]}
                            onChange={(value) => setService(value === "Tous" ? "" : value)}
                        />
                        <DropDownButton
    label="Filtrer par Score"
    options={["Rien", "0-25", "26-50", "51-100"]}
    onChange={(value) => setScoreRange(value === "Rien" ? "" : value)}
/>
                    </div>
                </div>
                <Table
                    data={TableContrat.filter(
                        (contract) =>
                            (service ? contract.title.toLowerCase().includes(service.toLowerCase()) : true) &&
                            filterContracts(contract) &&
                            filterByScore(contract)
                    )}
                />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
            </div>
        </>
    );
};

export default Contrats;
