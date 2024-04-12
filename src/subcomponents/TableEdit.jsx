import React, { useState, useEffect } from 'react';
import Importance from './Importance.jsx';
import ProgressBar from './ProgressBar.jsx';
import DeleteModal from './DeleteModal.jsx';

// Composant pour l'entête du tableau
const TableHeader = () => {
  return (
    <div className="px-4 py-3 bg-indigo-50 rounded-tl-md rounded-tr-md flex items-center">
      <div className="w-[372px] px-4 font-inter font-bold">Critère</div>
      <div className="w-[156px] px-4 font-inter font-bold">Importance</div>
      <div className="w-[156px] px-4 font-inter font-bold">Note /10</div>
      <div className="w-[137px] px-8 font-inter font-bold">Score</div>
    </div>
  );
};

const DataRow = ({ critere, importance, note, setNote }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setNote(critere, '', importance);
    } else {
      const numValue = Number(value);
      if (numValue >= 0 && numValue <= 10) {
        setNote(critere, numValue, importance);
      }
    }
  };

  return (
    <div className="px-4 py-6 flex items-center border-b border-zinc-200">
      <div className="w-[372px] px-4 font-inter">{critere}</div>
      <div className="w-[156px] px-4 font-inter"><Importance importance={importance} /></div>
      <div className="w-[156px] px-4 font-inter">
        <input type="number" className="border rounded px-2 py-1 text-center" value={note} onChange={handleInputChange} min="0" max="10" placeholder="0" />
      </div>
      <div className="w-[137px] px-8 font-inter flex justify-center"><ProgressBar score={note} /></div>
    </div>
  );
};

const TableEdit = ({ data, onScoreChange }) => {
  const [notes, setNotes] = useState(data.reduce((acc, item) => {
    acc[item.critere] = { score: 0, importance: item.importance };
    return acc;
  }, {}));

  const handleSetNote = (critere, value, importance) => {
    setNotes(prevNotes => ({
      ...prevNotes,
      [critere]: { score: value, importance: importance }
    }));
  };

  const calculateTotalScore = () => {
    const totalImportance = Object.values(notes).reduce((sum, { importance }) => sum + Number(importance), 0);
    const weightedScoreSum = Object.values(notes).reduce((sum, { score, importance }) => 
      sum + (score * 10) * Number(importance), 0);
  
    // Vérifiez si une note a été entrée
    const anyScoreEntered = Object.values(notes).some(({ score }) => score > 0);
  
    // Si aucune note n'a été entrée, renvoyez "-" pour le score
    if (!anyScoreEntered) {
      return '-';
    }
  
    // Le score final est la somme des produits des notes adaptées et de leurs importances,
    // divisée par la somme des importances, ce qui donne directement un pourcentage.
    const score = totalImportance > 0 ? Math.round(weightedScoreSum / totalImportance) : '-';
    onScoreChange(score);
    return score;
  };
  
  
  
  
  // Assurons-nous que le totalImportance est calculé correctement et que les notes sont correctement mises à jour
  useEffect(() => {
    console.log('Importance Totale:', Object.values(notes).reduce((sum, { importance }) => sum + importance, 0));
    console.log('Scores:', notes);
  }, [notes]);
  

  const totalScore = calculateTotalScore();

  return (
    <div>
      <div className="mt-5 mb-5 flex justify-between">
        <DeleteModal/>
        <div>
          <span className="text-gray-900 text-base font-normal font-inter leading-normal">Score : </span>
          <span className="text-gray-900 text-base font-bold font-inter leading-relaxed">
            {totalScore === '-' ? totalScore : `${totalScore}/100`}
          </span>        </div>
      </div>
      <div className="bg-white rounded-tl-md rounded-tr-md">
        <TableHeader />
        {data.map((item, index) => (
          <DataRow key={index} {...item} note={notes[item.critere].score} setNote={handleSetNote} />
        ))}
      </div>
    </div>
  );
};

export default TableEdit;
