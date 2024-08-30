import { useState, useEffect } from "react";
import AuctionStatus from "../components/auctionStatus"
import { Team } from "../types/team";

function RosePage() {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        fetch('http://localhost:8000/rose')
          .then(response => response.json())
          .then(data => {
            setTeams(data);
          })
          .catch(error => console.error('Errore nel recupero dei dati:', error));
        }, []);

    return (
        <>
        <div className="">
            <h1 className="text-5xl text-white font-semibold">
                Riepilogo Rose
            </h1>
        </div>
        <div className="overflow-x-scroll">
                <div className="flex w-max h-max space-x-2 mt-10">
                    {teams.map((team, index) => (
                        <AuctionStatus
                            key={index}
                            teamName={team.teamName}
                            credits={team.Crediti}
                            remainingSlots={team.Slot_Rimanenti}
                            maxBid={team.MassimoRilancio}
                            players={team.Rosa} />
                    ))}
                </div>
        </div>
        </>
    )
}

export default RosePage;
