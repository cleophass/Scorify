import { useState } from "react";
import profilepicture from "../assets/homme_1.png";
import TableCta from "../subcomponents/TableCta.jsx";
import TableContrat from "../assets/TableContrat.json";
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import TextArea from "../subcomponents/TextArea.jsx";
// import ButtonOutline from "../subcomponents/ButtonOutline.jsx";
import Pagination from "../subcomponents/Pagination.jsx";
import * as XLSX from "xlsx";
import React from "react";

const Contrats = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedService, setSelectedService] = useState(["Marketing", "Développement", "Support"]);
    const [scoreRange, setScoreRange] = useState(["Aucun", "0-25", "26-50", "51-100"]);

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase());
    };

    const onChangeScoreRange = (newSelectedRanges) => {
        setScoreRange(newSelectedRanges);
    };

    const onChangeService = (newSelectedService) => {
        setSelectedService(newSelectedService);
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
            {/* header */}

            <div className="px-16 pt-10 pb-5">
                <div className="flex justify-between items-center mb-5">
                    {/* Titre et boutons */}
                    <h1 className="text-4xl font-bold">Fournisseurs</h1>
                    <div className="flex gap-3">
                        <ButtonFill label="Nouveau contrat" fill={false} icon={true} height="50px"/>
                        <ButtonFill label="Modifier" fill={true} icon={false} height="50px" />
                    </div>
                </div>
                {/* Profil fournisseur et image */}
                <div className="flex items-center justify-between my-4">
                    <div className="flex items-center space-x-4">
                        <img className="h-16 w-16 rounded-full" src={profilepicture} alt="Profile" />
                        <p className="text-gray-500 font-bold">110 - Samuel Dupont</p>
                    </div>
                </div>
                {/* Note */}
                <div className="mb-7">
                    <h2 className="text-3xl font-bold mb-5">Notes</h2>
                    <TextArea defaultValue="Ce fournisseur a des commentaires pas très agréables donc je dois arrêter de travailler avec lui." />
                </div>
                <div className="mb-5">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold">Affaires liées</h2>
                    </div>

                    {/* Table */}

                    <TableCta data={TableContrat} path="/contrats/1" />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>

                <div className="mb-5">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-3xl font-bold">Contrats liés</h2>
                    </div>

                    <TableCta data={TableContrat} path="/contrats/1" />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>
            </div>
        </>
    );
};

export default Contrats;
