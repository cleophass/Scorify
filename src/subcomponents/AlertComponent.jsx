import React from "react";
import { ExclamationTriangleIcon, InformationCircleIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const AlertComponent = ({ score }) => {
  let icon = null;
  let bgColor = '';
  let borderColor = '';
  let bg2Color = '';
  let textcolor = '';
  let title = '';
  let textElements = null;

  if (score === '-') {
    icon = <InformationCircleIcon className="h-5 text-white" />;
    title = 'Evaluez votre contrat';
    textElements = (
      <>
        Modifiez le contrat pour ajouter vos critères et notations afin d’établir un score pour ce contrat.
      </>
    );
    bgColor = 'bg-blue-light';
    textcolor = 'text-blue-dark';
    borderColor = 'border-blue-dark';
    bg2Color = 'bg-blue-dark';
  } else if (score < 25) {
    icon = <XCircleIcon className="h-5 text-white" />;
    title = 'Critique';
    textElements = (
      <>
        <strong>Nécessite un Contract Manager à temps plein.</strong> Contrats essentiels au fonctionnement de l'entreprise, à forte valeur, ou avec de nouveaux fournisseurs dont la fiabilité est encore à prouver.
      </>
    );
    bgColor = 'bg-red-light';
    textcolor = 'text-red-dark';
    borderColor = 'border-red-dark';
    bg2Color = 'bg-red-dark';
  } else if (score < 50) {
    icon = <ExclamationTriangleIcon className="h-5 text-white" />;
    title = 'Prioritaire';
    textElements = (
      <>
        <strong>Ne nécessite pas de Contract Manager à temps plein.</strong> Contrats de grande valeur ou stratégiques, avec des risques significatifs, des fournisseurs qui requièrent une gestion active en raison de leur importance critique pour l'entreprise.
      </>
    );
    textcolor = 'text-yellow-dark';
    bgColor = 'bg-yellow-light';
    borderColor = 'border-yellow-dark';
    bg2Color = 'bg-yellow-dark';
  } else {
    icon = <CheckCircleIcon className="h-5 text-white" />;
    title = 'Basique';
    textElements = (
      <>
        <strong>Pas de suivi particulier.</strong> Contrats de faible valeur financière, risques minimaux, fournisseurs bien établis avec lesquels vous avez des antécédents positifs.
      </>
    );
    bgColor = 'bg-green-light';
    textcolor = 'text-green-dark';
    borderColor = 'border-green-dark';
    bg2Color = 'bg-green-dark';
  }

  return (
    <div className="py-10 bg-white dark:bg-dark">
      <div className="container">
        <div className={`${borderColor} ${bgColor} flex w-full rounded-lg border-l-[6px] px-7 py-8 md:p-9`}>
          <div className={`${bg2Color} mr-5 flex h-[34px] w-full max-w-[34px] items-center justify-center rounded-md`}>
            {icon}
          </div>
          <div className="w-full">
            <h5 className={`mb-3 text-lg font-semibold ${textcolor}`}>
              {title}
            </h5>
            <p className={`text-base leading-relaxed text-dark-grey`}>
              {textElements}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertComponent;
