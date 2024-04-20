import React, { useState } from "react";
import TextInput from "../subcomponents/TextInput";
import DropdownComponent from "../subcomponents/DropdownComponent";
import ButtonOutline from "../subcomponents/ButtonOutline";
import TextArea from "../subcomponents/TextArea.jsx";
import AlertComponent from "../subcomponents/AlertComponent";
import TableEdit from "../subcomponents/TableEdit";
import TableEditcontent from "../assets/TableEdit.json";
import NewEditCriteria from "../subcomponents/NewEditCriteria.jsx";
const dropdownOptions = [{ label: "Paul", href: "#" }];
const dropdownOptions2 = [{ label: "Samuel", href: "#" }];

const EditFournisseur = () => {
    const [totalScore, setTotalScore] = useState('-');
    return (
        <div id="content-to-export" className=" px-16 py-10 ">
            <h1 className="text-4xl font-bold text-custom-grey">Modifier fournisseur Logitec - 1</h1>
            <AlertComponent score={totalScore} />
            {/* <AlertComponent score={totalScore} /> */}
            {/* div to put item in line */}
            <div className="flex mt-6 flex-wrap " style={{ gap: "32px" }}>
                <TextInput
                    label="Entreprise"
                    value="Logitec" // Valeur initiale
                    onChange={(e) => {
                        /* logic for handling change */
                    }} // Gérer le changement
                    labelFontSize="text-lg"
                    locked={false} // Assurez-vous que c'est modifiable
                    width="330px"
                />
                <div style={{ width: "330px" }}>
                    <label
                        className="mb-2 text-lg font-medium 'text-dark-grey"
                        style={{ width: "330px", height: "28px" }}
                    >
                        Service lié
                    </label>
                    <div className="mt-2">
                        <DropdownComponent label="Marketing" options={dropdownOptions} />
                    </div>
                </div>

                <div style={{ width: "330px" }}>
                    <label className="mb-2 text-lg font-medium 'text-dark-grey" style={{ height: "28px" }}>
                        Contract manager
                    </label>
                    <div className="mt-2">
                        <DropdownComponent label="Marine Fournier" options={dropdownOptions2} />
                    </div>
                </div>
                <TextInput
                    label="Nom complet interlocuteur"
                    value="Samuel Dupont" // Valeur initiale
                    onChange={(e) => {
                        /* logic for handling change */
                    }} // Gérer le changement
                    labelFontSize="text-lg"
                    locked={false} // Assurez-vous que c'est modifiable
                    width="330px"
                />
                <TextInput
                    label="Adresse email interlocuteur"
                    value="samuel.dupont@logitec.com" // Valeur initiale
                    onChange={(e) => {
                        /* logic for handling change */
                    }} // Gérer le changement
                    labelFontSize="text-lg"
                    locked={false} // Assurez-vous que c'est modifiable
                    width="330px"
                />
                <div style={{ width: "330px" }}>
                    <label className="mb-2 text-lg font-medium 'text-dark-grey" style={{ height: "28px" }}>
                        Rôle
                    </label>
                    <div className="mt-2">
                        <DropdownComponent label="Chargé d’affaire" options={dropdownOptions2} />
                    </div>
                </div>
                <div className="mb-7" style={{ width: "100%" }}>
                    <TextArea label="Notes" placeholder="Ajouter des notes" />
                </div>
            </div>
            <h1 className="text-3xl font-bold text-custom-grey">Critères du fournisseur</h1>
           
           <TableEdit data={TableEditcontent} onScoreChange={setTotalScore} />
           <div className="mt-5 flex justify-between w-full"></div>
           <div>
    
  </div>    <div className="mt-5 flex justify-between w-full">
                {/* Button aligned to the left */}
                <NewEditCriteria/>

                {/* Container for buttons aligned to the right */}
                <div className="flex gap-3">
                    <ButtonOutline label="Annuler" width="116px" />  {/* Example button */}
                    <button
                        className="bg-custom-blue text-white font-bold py-2 px-4 rounded"
                        style={{ height: "50px", width: "141px" }}
                    >
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditFournisseur;
