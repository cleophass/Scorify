// Contrats.jsx
import { useState } from "react";
import Table from "../subcomponents/Table";
import TableContrat from "../assets/TableContrat.json";
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import ButtonOutline from "../subcomponents/ButtonOutline.jsx";
import SearchBar from "../subcomponents/SearchBar.jsx";
import DropDownButton from "../subcomponents/DropDownButton.jsx";
import Pagination from "../subcomponents/Pagination.jsx";
import * as XLSX from "xlsx";

const Contrats = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 4;

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase()); // Convert search query to lowercase right away.
    };
    const filterContracts = (contract) => {
        if (searchQuery) {
            return (
                contract.title.toLowerCase().includes(searchQuery) ||
                contract.provider.toLowerCase().includes(searchQuery) ||
                // Check other fields that should be included in the search
                contract.id.toString().includes(searchQuery)
            );
        }
        return true; // If no search query, return all contracts.
    };
    const [service, setService] = useState("");
    const [Provider, setProvider] = useState(""); // New state for Provider

    // Function to convert data to excel and trigger download
    const exportToExcel = () => {
        // Assuming TableContrat is the dataset you want to export
        // Ensure this is the dataset you want, possibly applying any filters you have on the view
        const ws = XLSX.utils.json_to_sheet(TableContrat);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Contracts");

        // You could also customize the file name to include timestamps or other identifying information
        XLSX.writeFile(wb, "Contracts.xlsx");
    };

    const onPageChange = (newPage) => {
        setCurrentPage(newPage);
        // Charger les données pour la nouvelle page sélectionnée
    };

    return (
<<<<<<< Updated upstream
        <div>Contrats Content Here stp </div>
=======
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
                        placeholder="Recherchez par affaire, contrat, provider, ID ..."
                        onSearch={handleSearch}
                    />
                    <div className="flex gap-2">
                        <DropDownButton
                            label="Filtrer par service"
                            options={["Tous", "Développeur", "Gestionnaire de Projet", "Chercheur en informatique"]}
                            onChange={(value) => setService(value === "Tous" ? "" : value)}
                        />

                        <DropDownButton
                            label="Filtrer par Fournisseur"
                            options={["Tous", "Alex Semuyel", "Patrice Martin", "Camille Dubois", "Jeanne D'Arc"]}
                            onChange={(value) => setProvider(value === "Tous" ? "" : value)}
                        />
                    </div>
                </div>
                <Table
                    data={TableContrat.filter(
                        (contract) =>
                            (service ? contract.title.toLowerCase().includes(service.toLowerCase()) : true) &&
                            (Provider ? contract.provider.toLowerCase().includes(Provider.toLowerCase()) : true) &&
                            filterContracts(contract)
                    )}
                />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
            </div>
        </>
>>>>>>> Stashed changes
    );
};

export default Contrats;
