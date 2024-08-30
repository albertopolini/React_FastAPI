import React, { useState } from 'react';

function AstaGiocatorePage() {
    const [nomeGiocatore, setNomeGiocatore] = useState('');
    const [offerta, setOfferta] = useState(0);

    const [purchaseValue, setPurchaseValue] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('');

    const handleNomeGiocatoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNomeGiocatore(event.target.value);
    };

    const handleOffertaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOfferta(Number(event.target.value));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aggiungi qui la logica per gestire l'asta del giocatore
        console.log(`Offerta per ${nomeGiocatore}: ${offerta}`);
    };

    const teams = ['Squadra 1', 'Squadra 2', 'Squadra 3']; // Elenco delle squadre

    return (
        <div>
            <div className="">
                <h1 className="text-5xl text-white font-semibold">
                    Asta Giocatore
                </h1>
            </div>
            <div className="mt-5 flex flex-col items-center w-full p-4">
                <input
                    type="text"
                    placeholder="Giocatore"
                    className="w-2/3 p-2 mb-6 text-lg border border-gray-300 rounded"
                />
                <div className="w-4/5 p-6 bg-gray-900 text-white rounded-lg">
                    <div className="flex mb-6">
                    <div className="flex items-center">
                        <div className="w-24 h-24 rounded-full bg-slate-400 flex justify-center items-center text-6xl text-purple-800 mr-6">
                        <span role="img" aria-label="Avatar">👤</span>
                        </div>
                        <div>
                        <h2 className="text-2xl font-bold">Giocatore</h2>
                        <p>Squadra:</p>
                        <p>Ruolo:</p>
                        <p>Fascia:</p>
                        </div>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-700 p-4 rounded">
                        <h3 className="text-xl font-semibold">Ultime Valutazioni</h3>
                        <p>Grafico valutazione ultimi 3 anni</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <h3 className="text-xl font-semibold">Statistiche</h3>
                        <ul className="list-disc pl-5">
                        <li>Gol</li>
                        <li>Assist</li>
                        <li>Cartellini Gialli</li>
                        <li>Cartellini Rossi</li>
                        </ul>
                    </div>
                    <div className="bg-gray-700 h-40 p-4 rounded col-span-2">
                        <h3 className="text-xl font-semibold">Descrizione</h3>
                    </div>
                    <div className="bg-gray-700 p-4 rounded col-span-2 text-center">
                        <h3 className="text-xl font-semibold">PMA/ STD</h3>
                        <p className="text-2xl font-bold">45 - 15</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700 p-4 rounded text-center">
                        <h2 className="text-2xl font-semibold mb-4">Prezzo Attuale Rilancio</h2>
                        <input
                        type="number"
                        value={purchaseValue}
                        onChange={(e) => setPurchaseValue(e.target.value)}
                        placeholder="Inserisci valore"
                        className="text-3xl font-bold text-center mb-4 p-2 border border-gray-300 rounded"
                        />
                        <select
                        value={selectedTeam}
                        onChange={(e) => setSelectedTeam(e.target.value)}
                        className="bg-purple-600 text-white py-2 px-4 rounded mb-4 w-2/3 text-center"
                        >
                        <option value="" disabled>Seleziona Squadra</option>
                        {teams.map((team, index) => (
                            <option key={index} value={team}>
                            {team}
                            </option>
                        ))}
                        </select>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded w-2/3">Conferma</button>
                    </div>
                    <div className="bg-gray-700 p-4 rounded text-center">
                        <h2 className="text-2xl font-semibold mb-4">Strategia GenAI</h2>
                        <p>Conviene Rilanciare in base alla situazione attuale della rosa?</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default AstaGiocatorePage;