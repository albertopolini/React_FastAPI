import { TeamPlayers } from "../types/teamPlayers";
import { Player } from "../types/player";
import {PencilIcon} from '@heroicons/react/20/solid';

interface RoleListProps {
    teamplayers: TeamPlayers;
    role: string;
}


function RoleList({teamplayers, role}: RoleListProps) {

    let players: Player[] = []
    let boxColor = "bg-gray-700";

    if (role === "Portieri") {
        players = teamplayers.Portieri;
        boxColor = "bg-amber-700";
    } else if (role === "Difensori") {
        players = teamplayers.Difensori;
        boxColor = "bg-green-700";
    } else if (role === "Centrocampisti") {
        players = teamplayers.Centrocampisti;
        boxColor = "bg-blue-700";
    } else {
        players = teamplayers.Attaccanti;
        boxColor = "bg-red-700";
    }

    let boxStyle = `flex space-x-max p-2 pl-2 ${boxColor} shadow-lg rounded-lg`;

    return (
        <div className="flex flex-col space-y-2 border border-gray-800 rounded-md p-2">
        <h1 className="text-white text-sm font-bold mb-3 text-center">{role}</h1>
        {players.map((player:Player, index) => (
            <div key={index} className={boxStyle}>
                <p className=" text-white text-m font-bold">{player.playerName} - {player.price}M</p>
                <button className="ml-auto bg-slate-800 hover:bg-slate-700 text-white font-bold py-1 pl-2 rounded"><PencilIcon className="h-5 w-5 mr-2" /></button>
            </div>
        ))}
        </div>
    )}

export default RoleList;