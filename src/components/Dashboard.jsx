import React from 'react';
import Table from '../subcomponents/Table';
import TableData from '../assets/TableData.json'; // Assurez-vous que le chemin vers TableData.json est correct
import ButtonFill from '../subcomponents/ButtonFill.jsx';
import ButtonGroup from '../subcomponents/ButtonGroup.jsx';
import DropDownButton from '../subcomponents/DropDownButton.jsx';
const Dashboard = () => {
  return (
    <div className="px-12 py-10">

      <div className="flex justify-between items-center mb-10 ">
        <h1 className="text-4xl font-bold text-custom-grey">Bienvenue Mayo,</h1>
        <ButtonFill label="Exporter (pdf)" />
      </div>
      <div className="flex justify-between items-center mb-6">
      
      <ButtonGroup />
      <div className="flex justify-start space-x-4"> {/* Adjust the space-x-* value as needed */}
  <DropDownButton label={'Filtrer par service'} />
  <DropDownButton label={'30 derniers jours'} />
</div>
      </div>
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-custom-grey">En attente de score</h1>

      </div>

      <Table data={TableData} />
    </div>
  );
  
};

export default Dashboard;
