import { Player } from './player'; // Assuming 'Player' is defined in a separate file called 'player.ts'

export interface TeamPlayers {
    Portieri: Player[];
    Difensori: Player[];
    Centrocampisti: Player[];
    Attaccanti: Player[];
}