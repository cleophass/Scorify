import React from 'react';
import Table from '../subcomponents/Table';
import TableData from '../assets/TableData.json'; // Importez les données du tableau depuis le fichier JSON
const Dashboard = () => {
  

  return (
    <div className="App flex justify-center">
      <div className="py-4" style={{ width: '1060px' }}> {/* La largeur du tableau */}
        <Table data={TableData} />
      </div>
    </div>
  );
};

export default Dashboard;
