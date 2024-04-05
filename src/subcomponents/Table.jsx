import React, { useState } from 'react';
import Score from './Score.jsx';
import TeamAvatars from "./TeamAvatars.jsx";
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';


// Composant pour l'entête du tableau
const TableHeader = ({ isAllSelected, toggleAll }) => {
  return (
    <div className="px-4 py-3 bg-indigo-50 rounded-tl-md rounded-tr-md shadow-inner flex items-center">
      <div className="px-3 w-[46px]">
        <input type="checkbox" checked={isAllSelected} onChange={toggleAll} />
      </div>
      <div className="w-[80px] px-4 font-inter font-bold">ID</div>
      <div className="w-[169px] px-3 font-inter font-bold">Titre</div>
      <div className="w-[242px] px-3 font-inter font-bold">Fournisseur</div>
      <div className="w-[137px] px-2 font-inter font-bold">Score</div>
      <div className="w-[137px] px-2 font-inter font-bold">Équipe</div>
      <div className="w-[137px] px-2 font-inter font-bold">Créé le</div>
      <div className="flex-grow px-4 font-inter font-bold"></div>
    </div>
  );
};

// Composant pour une ligne de données
const DataRow = ({ id, title, provider, score, avatars, dateCreated, isSelected, toggle }) => {
  return (
    <div className={`px-4 py-6 flex items-center border-b border-zinc-200 ${isSelected ? 'bg-gray-200' : ''}`}>
      <div className="px-3 w-[46px]">
        <input type="checkbox" checked={isSelected} onChange={() => toggle(id)} />
      </div>
      <div className="w-[80px] px-4 font-inter">{id}</div>
      <div className="w-[169px] px-3 font-inter">{title}</div>
      <div className="w-[242px] px-3 font-inter">{provider}</div>
      <div className="w-[137px] px-2 font-inter"><Score score={score}/></div>
      <div className="w-[137px] px-2 font-inter">
          <TeamAvatars avatars={avatars}/></div>
      <div className="w-[137px] px-2 font-inter">{dateCreated}</div>
      <div className="flex-grow px-4 font-inter"><EllipsisVerticalIcon className='h-5'/></div>
    </div>
  );
};

// Composant principal pour le tableau
const Table = ({ data }) => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const toggleAll = () => {
    if (selectedIds.size < data.length) {
      setSelectedIds(new Set(data.map(item => item.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const toggle = id => {
    const newSelectedIds = new Set(selectedIds);
    if (newSelectedIds.has(id)) {
      newSelectedIds.delete(id);
    } else {
      newSelectedIds.add(id);
    }
    setSelectedIds(newSelectedIds);
  };

  const isAllSelected = selectedIds.size === data.length;

  return (
    <div className="bg-white rounded-tl-md rounded-tr-md shadow">
      <TableHeader isAllSelected={isAllSelected} toggleAll={toggleAll} />
      {data.map((item, index) => (
        <DataRow
          key={item.id} // il vaut mieux utiliser un identifiant unique s'il est disponible
          {...item}
          isSelected={selectedIds.has(item.id)}
          toggle={toggle}
        />
      ))}
    </div>
  );
};

export default Table;
