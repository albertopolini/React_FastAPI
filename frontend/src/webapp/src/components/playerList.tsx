import { playerStats } from "../types/playerStats";
import React from 'react';

function PlayerList({ Season,
                        Team,
                        Player,
                        Nationality,
                        Role,
                        Age,
                        Presences,
                        Gol,
                        Assist,
                        Penalty_Goal,
                        Penalty_Attempt,
                        Expected_Goals,
                        Expected_Assists,
                        Progressive_Carries,
                        Progressive_Passes,
                        Progressive_Receptions,
                        Goals_per_90_minutes,
                        Assists_per_90_minutes,
                        Expected_Goals_per_90_minutes,
                        Expected_Assists_per_90_minutes}: playerStats ) {

    let boxColor = "bg-gray-700";

    if (Role === "Portiere") {
        boxColor = "bg-amber-700";
    } else if (Role === "Difensore") {
        boxColor = "bg-green-700";
    } else if (Role === "Centrocampista") {
        boxColor = "bg-blue-700";
    } else {
        boxColor = "bg-red-700";
    }
    
    let boxStyle = `flex text-white ${boxColor} mb-5 py-2`;

    return (
        <div className={boxStyle}>
        <div className="flex justify-between px-3 space-x-5 w-full p-2 text-center">
          <div className="max-w-[150px] flex items-center bg-gray-800 p-1 flex-1">
            <div className="flex-1 text-l font-bold">
              <p>{Player}</p>
            </div>
          </div>
          <div className="max-w-[150px] flex items-center bg-gray-800 p-1 flex-1">
            <div className="flex-1">
              <h2 className="font-bold">Squadra</h2>
              <p>{Team}</p>
            </div>
          </div>
          <div className="max-w-[150px] flex items-center bg-gray-800 p-1 flex-1">
            <div className="flex-1">
              <h2 className="font-bold">Ruolo</h2>
              <p>{Role}</p>
            </div>
          </div>
          <div className="max-w-[150px] flex items-center bg-gray-800 p-1 flex-1">
            <div className="flex-1">
              <h2 className="font-bold">Presenze</h2>
              <p className="text-2xl font-bold">{Presences}</p>
            </div>
          </div>
          <div className="max-w-[150px] flex items-center bg-gray-800 p-1 flex-1">
            <div className="max-w-[150px] bg-gray-800 p-1 flex-1">
                <h2 className="font-bold">Goal</h2>
                <p className="text-2xl font-bold">{Gol}</p>
            </div>
          </div>
          <div className="max-w-[150px] flex items-center bg-gray-800 p-1 flex-1">
            <div className="max-w-[150px] bg-gray-800 p-1 flex-1">
                <h2 className="font-bold">Assist</h2>
                <p className="text-2xl font-bold">{Assist}</p>
            </div>
          </div>
          <div className="max-w-[150px] flex items-center bg-gray-800 p-1 flex-1">
            <div className="max-w-[150px] bg-gray-800 p-1 flex-1">
                <h2 className="font-bold">xG</h2>
                <p className="text-2xl font-bold">{Expected_Goals}</p>
            </div>
          </div>
          <div className="max-w-[150px] flex items-center bg-gray-800 p-1 flex-1">
            <div className="max-w-[150px] bg-gray-800 p-1 flex-1">
                <h2 className="font-bold">Penalty Goal</h2>
                <p className="text-2xl font-bold">{Penalty_Goal}</p>
            </div>
          </div>
          <div className="max-w-[150px] flex items-center bg-gray-800 p-1 flex-1">
            <div className="max-w-[150px] bg-gray-800 p-1 flex-1">
                <h2 className="font-bold">Progr. Carries</h2>
                <p className="text-2xl font-bold">{Progressive_Carries}</p>
            </div>
          </div>
          <div className="max-w-[150px] flex items-center bg-gray-800 p-1 flex-1">
            <div className="max-w-[150px] bg-gray-800 p-1 flex-1">
                <h2 className="font-bold">xG 90</h2>
                <p className="text-2xl font-bold">{Expected_Goals_per_90_minutes}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PlayerList;