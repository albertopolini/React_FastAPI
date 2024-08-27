import pandas as pd
import yaml
import os

from .utils import save_auction_status


def show_teams(auction_status):
    return auction_status["managers"]

def max_bid(credits: int, free_slots: int):
        return credits - (free_slots - 1)


def acquista_giocatore(auction_status, nome_giocatore, ruolo, squadra, prezzo):
        
        if nome_giocatore in auction_status['managers'][squadra]['Rosa'][ruolo]:
                return {"Giocatore già presente nella rosa"}
        else:
                auction_status['managers'][squadra]['Rosa'][ruolo].append({nome_giocatore: {"Price": prezzo}})
                auction_status['managers'][squadra]['Crediti'] -= prezzo
                auction_status['managers'][squadra]['Slot_Rimanenti'] -= 1

                auction_status['managers'][squadra]['MassimoRilancio'] = max_bid(auction_status['managers'][squadra]['Crediti'], len(auction_status['managers'][squadra]["Rosa"][ruolo]))
                print(f"Il giocatore {nome_giocatore} è stato acquistato dalla squadra {squadra}.")

        save_auction_status("Data/auction_status.yaml", auction_status)


def rimuovi_giocatore(auction_status, nome_giocatore, ruolo, squadra):
    if nome_giocatore in auction_status['managers'][squadra]['Rosa'][ruolo]:

        prezzo_giocatore = auction_status['managers'][squadra]['Rosa'][ruolo][nome_giocatore]['Price']
        
        auction_status['managers'][squadra]['Crediti'] += prezzo_giocatore
        auction_status['managers'][squadra]['Slot_Rimanenti'] -= 1
        auction_status['managers'][squadra]['MassimoRilancio'] = max_bid(auction_status['managers'][squadra]['Crediti'], len(auction_status['managers'][squadra]["Rosa"][ruolo]))

        auction_status['managers'][squadra]['Rosa'][ruolo].remove(nome_giocatore)



        print(f"Il giocatore {nome_giocatore} è stato rimosso dalla squadra {squadra}.")
    else:
        print(f"Il giocatore {nome_giocatore} non è presente nella rosa della squadra {squadra}.")

    save_auction_status("Data/auction_status.yaml", auction_status)
        
        
        
