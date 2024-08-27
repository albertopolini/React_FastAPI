import pandas
import numpy
import yaml
import os

def read_yaml_config(file_path: str) -> dict:
    """
    Reads a YAML configuration file and returns its contents as a dictionary.
    Args:
        file_path (str): The path to the YAML configuration file.
    Returns:
        dict: The contents of the YAML configuration file as a dictionary.
    """


    with open(file_path, 'r') as file:
        config = yaml.safe_load(file)

    return config


def save_auction_status(path:str, status):
    # Save the config dictionary to the new file
    with open(path, 'w') as file:
            yaml.dump(status, file)