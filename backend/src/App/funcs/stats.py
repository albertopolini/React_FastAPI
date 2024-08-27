import numpy as np
import pandas as pd
import yaml

import soccerdata as sd


def get_competition_stats() -> str:
    """
    Retrieves the competition statistics for Serie A from a specified URL.
    Returns:
        str: A JSON string containing the competition statistics.
    """

    url = "https://fbref.com/it/comp/11/Statistiche-di-Serie-A"

    # Read the competition statistics from the given URL.
    df = pd.read_html(url, decimal=",", thousands=".", encoding="utf-8", flavor="bs4")

    df[0].to_csv("Data/seriea/teams.csv", index=False)

    # Convert the DataFrame to a JSON string.
    # json_str = df[0].to_json(orient='records')

    # Return the competition statistics as a JSON string.
    # return json_str

def get_player_stats(columns) -> str:
    """
    Retrieves the competition statistics for Serie A from a specified URL.
    Returns:
        str: A JSON string containing the competition statistics.
    """
   
    # Read the competition statistics from the given URL.
    fbref = sd.FBref(leagues="ITA-Serie A", seasons=['2223', '2324', '2425'])

    player_stats = fbref.read_player_season_stats(stat_type='standard')
    player_stats = player_stats.reset_index()
    player_stats.columns = player_stats.columns.get_level_values(0) + '_' + player_stats.columns.get_level_values(1)
    player_stats.columns = [col.replace(' ', '_').replace(":", "").strip() for col in player_stats.columns]
    player_stats = player_stats.rename(columns=columns["columns"])[columns["columns"].values()]

    role_mapping = {
    'Portiere': ['GK'],
    'Difensore': ['DF'],
    'Centrocampista': ['MF'],
    'Attaccante': ['FW', 'FW,MF']
    }

    player_stats['Role'] = player_stats['Role'].map({value: key for key, values in role_mapping.items() for value in values})
    player_stats.to_csv("Data/seriea/players.csv", index=False)
    