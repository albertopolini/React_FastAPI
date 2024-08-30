from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import uvicorn
import json
import time

from typing import Optional

from funcs.stats import get_competition_stats, get_player_stats
from funcs.manage_teams import show_teams, acquista_giocatore
from funcs.utils import read_yaml_config


player_columns = read_yaml_config('config/player_stats_columns.yaml')
print(player_columns)

REFRESH_DATA = False
if REFRESH_DATA:
    get_competition_stats()
    get_player_stats(columns=player_columns)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/team_stats")
def get_competition_stats():
    team_stats = pd.read_csv("Data/seriea/teams.csv")
    team_stats = team_stats.to_json(orient='records')
    return json.loads(team_stats)


@app.get("/player_stats")
def get_player_stats_stats():
    player_stats = pd.read_csv("Data/seriea/players.csv")
    player_stats.columns = [col.replace(" ","_") for col in player_stats.columns]
    player_stats = player_stats.to_json(orient='records')
    return json.loads(player_stats)


@app.get("/search_player/{player_name}")
def search_player(player_name: str, q: Optional[int] = None):
    df = pd.read_csv("Data/seriea/players.csv")
    if q:
        df = df[(df['Player'].str.contains(player_name, case=False)) & (df['Season'] == q)]
    else:
        df = df[df['Player'].str.contains(player_name, case=False)]
    df = df.to_json(orient='records')
    return json.loads(df)


@app.get("/team/{team_name}")
def get_team(team_name: str, q: Optional[int] = None):
    df = pd.read_csv("Data/seriea/players.csv")
    if q:
        df = df[(df['Team'].str.contains(team_name, case=False)) & (df['Season'] == q)]
    else:
        df = df[df['Team'].str.contains(team_name, case=False)]
    df = df.to_json(orient='records')
    return json.loads(df)


@app.get("/rose")
def get_rose(q:Optional[str]=None):
    auction_status = read_yaml_config("Data/auction_status.yaml")
    if q:
        return show_teams(auction_status=auction_status)[q]
    else:
        return show_teams(auction_status=auction_status)



# Command to launch the server: uvicorn app:app --host 0.0.0.0 --port 8000
