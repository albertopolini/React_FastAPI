import { TeamPlayers } from "./teamPlayers";

export interface Team {
    teamName: string;
    Crediti: number;
    Slot_Rimanenti: number;
    MassimoRilancio: number;
    Rosa: TeamPlayers;
}