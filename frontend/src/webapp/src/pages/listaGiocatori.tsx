import React, { useEffect, useState } from 'react';
import { playerStats } from '../types/playerStats';
import PlayerList from '../components/playerList';


function ListaGiocatoriPage() {

    const [playerStats, setPlayerStats] = useState<playerStats[]>([]);
    
    useEffect(() => {
        fetch('http://localhost:8000/player_stats')
          .then(response => response.json())
          .then(data => {
            setPlayerStats(data);
          })
          .catch(error => console.error('Errore nel recupero dei dati:', error));
        }, [])

    return (
        <div className="">
          <h1 className="text-5xl text-white font-semibold mt-10 mb-10">
            Lista Giocatori
          </h1>
          <div className="space-x-2 mb-10">
            <button className="ml-auto bg-slate-900 hover:bg-slate-700 text-white font-bold p-3 rounded">Portieri</button>
            <button className="ml-auto bg-slate-900 hover:bg-slate-700 text-white font-bold p-3 rounded">Difensori</button>
            <button className="ml-auto bg-slate-900 hover:bg-slate-700 text-white font-bold p-3 rounded">Centrocampisti</button>
            <button className="ml-auto bg-slate-900 hover:bg-slate-700 text-white font-bold p-3 rounded">Attaccanti</button>
          </div>
          {playerStats
            .filter(player => player.Season === 2425)
            .map((player, index) => (
              <PlayerList
                key={index}
                {...player}
              />
            ))}
        </div>
    );
}

export default ListaGiocatoriPage