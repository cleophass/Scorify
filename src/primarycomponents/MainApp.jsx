import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx"; // Assurez-vous du chemin d'accès
import Dashboard from "../components/Dashboard.jsx";
import Contrats from "../components/Contrats.jsx";
import VueContrat from "../components/VueContrat.jsx";
import Affaires from "../components/Affaires.jsx";
import VueAffaire from "../components/VueAffaire.jsx";
import ComparerAffaires from "../components/ComparerAffaires.jsx";
import ComparerContrats from "../components/ComparerContrats.jsx";
import Fournisseurs from "../components/Fournisseurs.jsx";
import VueFournisseur from "../components/VueFournisseur.jsx";
import VueCollaborateur from "../components/VueCollaborateur.jsx";
import Account from "../components/Account.jsx";
import Critere from "../components/Critere.jsx";
// Autres imports de composants
import { Routes, Route, Navigate } from "react-router-dom";
import EditContrat from "../components/EditContrat.jsx";
import EditAffaires from "../components/EditAffaires.jsx";

const MainApp = ({ onLogout }) => {
    const [activePage, setActivePage] = useState("dashboard");

    return (
        <div className="flex">
            {" "}
            {/* Utilisez flex pour aligner Sidebar et le contenu principal */}
            <Sidebar activePage={activePage} setActivePage={setActivePage} onLogout={onLogout} />
            {/* Appliquez ml-64 ici pour ajouter une marge à gauche à tout le contenu principal */}
            <div className="flex-grow" style={{ marginLeft: "16rem" }}>
                {" "}
                {/* flex-grow pour que le contenu prenne l'espace restant */}
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/contrats" element={<Contrats />} />
                    <Route path="/contrats/comparer" element={<ComparerContrats />} />
                    <Route path="/affaires" element={<Affaires />} />
                    <Route path="/Affaires/1" element={<VueAffaire />} />
                    <Route path="/affaires/comparer" element={<ComparerAffaires />} />
                    <Route path="/contrats/1" element={<VueContrat />} />
                    <Route path="/contrats/1/edit" element={<EditContrat />} />

                    <Route path="/affaires/1/edit" element={<EditAffaires />} />
                    <Route path="/fournisseurs" element={<Fournisseurs />} />
                    <Route path="/fournisseurs/1" element={<VueFournisseur />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/vue-collaborateur" element={<VueCollaborateur />} />
                    <Route path="/criteres" element={<Critere />} />

                    {/* Ajoutez d'autres routes ici si nécessaire */}
                </Routes>
            </div>
        </div>
    );
};

export default MainApp;
