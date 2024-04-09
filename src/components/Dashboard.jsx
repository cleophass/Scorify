import React, { useState } from "react";
import Table from "../subcomponents/Table";
import TableData1 from "../assets/TableData1.json";
import TableData2 from "../assets/TableData2.json";
import ButtonFill from "../subcomponents/ButtonFill.jsx";
import ButtonGroup from "../subcomponents/ButtonGroup.jsx";
import DropDownButton from "../subcomponents/DropDownButton.jsx";
import StatsCard from "../subcomponents/StatsCard.jsx";
import GraphComponent from "../subcomponents/GraphComponent.jsx";
import SampleChartData1 from "../assets/SampleChartData1.json";
import SampleChartData2 from "../assets/SampleChartData2.json";
import LineChartComponent from "../subcomponents/LineChartComponent.jsx";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("contrats");

    const dataScores = [40, 55, 35, 25, 5, 5, 25, 20, 5, 30, 5, 10, 5];
    const labels = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul", "Août"];
    const handleButtonClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className="px-16 py-10">
            <div className="flex justify-between items-center mb-10 w-[1113px]">
                <h1 className="text-4xl font-bold text-custom-grey">Bienvenue Mayo,</h1>
                <ButtonFill label="Exporter (pdf)" />
            </div>

            <div className="flex justify-between items-center mb-6">
                <ButtonGroup active={activeTab} onButtonClick={handleButtonClick} />
                <div className="flex justify-start space-x-4">
                    {/* <DropDownButton label={'Filtrer par service'} />
          <DropDownButton label={'30 derniers jours'} /> */}
                </div>
            </div>

            <div className="flex justify-between mb-6">
                {activeTab === "contrats" && (
                    <>
                        {/* ... vos StatsCard pour Contrats */}

                        <StatsCard title="Contrats" subtitle="Total" value="12" percentage={0.3} barvalue={70} />
                        <StatsCard
                            title="Contrats"
                            subtitle="Score > 50/100"
                            value="2"
                            percentage={0.43}
                            barvalue={30}
                        />
                        <StatsCard title="Contrats" subtitle="En cours" value="17" percentage={0.39} barvalue={60} />
                        <StatsCard
                            title="Contrats"
                            subtitle="En attente de score"
                            value="5"
                            percentage={0.25}
                            barvalue={80}
                        />
                    </>
                )}
                {activeTab === "affaires" && (
                    <>
                        {/* Remplacer avec vos StatsCard pour Affaires */}
                        <StatsCard title="Affaires" subtitle="Total" value="7" percentage={0.35} barvalue={75} />
                        <StatsCard
                            title="Affaires"
                            subtitle="Score > 50/100"
                            value="5"
                            percentage={0.7}
                            barvalue={90}
                        />
                        <StatsCard title="Affaires" subtitle="En cours" value="10" percentage={0.2} barvalue={12} />
                        <StatsCard
                            title="Affaires"
                            subtitle="En attente de score"
                            value="2"
                            percentage={0.55}
                            barvalue={23}
                        />
                    </>
                )}
            </div>
            <div className="flex justify-between mb-6">
                <GraphComponent label="Répartition par score" chartData={SampleChartData1} />
                <GraphComponent label="Répartition par service" chartData={SampleChartData2} />
            </div>
            <div className=" bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center mb-10">
                <div className="text-xl font-bold mb-6 self-start">Score global</div>
                <div
                    style={{
                        width: "1063px",
                        height: "300px",
                        padding: "20px",
                        boxSizing: "border-box",
                        background: "#FFF",
                        borderRadius: "8px",
                    }}
                >
                    <LineChartComponent dataScores={dataScores} labels={labels} />
                </div>
            </div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-custom-grey">En attente de score</h1>
            </div>

            <Table data={TableData1} />

            <div className="mt-10 mb-6">
                <h1 className="text-2xl font-bold text-custom-grey">Score les plus élevés</h1>
            </div>

            <Table data={TableData2} />
        </div>
    );
};

export default Dashboard;
