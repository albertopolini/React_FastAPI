import { TeamPlayers } from "../types/teamPlayers";
import RoleList from "./roleList";

interface InfoCardProps {
  teamName: string;
  credits: number;
  remainingSlots: number;
  maxBid: number;
  players: TeamPlayers;
}

function AuctionStatus({ teamName, credits, remainingSlots, maxBid, players }: InfoCardProps) {
    return (
        <div className="min-w-[300px]">
        <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 bg-gray-800">
                <p className="text-white text-2xl font-bold text-center">{teamName}</p>
            </div>  
            <div className="p-4">
                <p className="text-gray-400 text-l text-center">Crediti: <span className="text-white text-xl font-bold">{credits}</span>/500</p>
                <p className="text-gray-400 text-l text-center">Slot Rimanenti: <span className="text-white text-xl font-bold">{remainingSlots}</span>/25</p>
                <p className="text-gray-400 text-l text-center">Massimo rilancio: <span className="text-white text-xl font-bold">{maxBid}</span></p>
            </div>
                
        </div>
        <div className="mt-2 p-3 bg-gray-900 rounded-lg shadow-lg flex-col space-y-2">
            <RoleList 
                teamplayers={players}
                role="Portieri"
            />
            <RoleList 
                teamplayers={players}
                role="Difensori"
            />
            <RoleList 
                teamplayers={players}
                role="Centrocampisti"
            />
            <RoleList 
                teamplayers={players}
                role="Attaccanti"
            />
        </div>
        </div>
    );
}

export default AuctionStatus;