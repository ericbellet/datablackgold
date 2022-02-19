import os
import requests
import pandas as pd

class FourSquare():

    def __init__(self):
        self.category = 11064
        self.authorization = "fsq3kvgHUj2VBNBvF9iMk2Z/ZYjjuCvS5cZJQQUWhYsAXWY="
        pass

    def getNearbyVenues(self, names, latitudes, longitudes, radius=500):
        if not os.path.exists('../data/barcelona_hairsalons.csv'):
            venues_list = []
            nearby_venues = pd.DataFrame()
            nearby_venues_columns = ['Neighbourhood Name',
                                     'HairSalonName',
                                     'Latitude',
                                     'Longitude',
                                     'Address']
            for name, lat, lng in zip(names, latitudes, longitudes):

                print(f"Searching hairsalons in {name}")
                url = f"https://api.foursquare.com/v3/places/search?categories={self.category}&ll={lat},{lng}&radius=1000&keyword=hairsalon|peluqueria|barberia|barbershop"
                results = requests.get(url, headers={'Authorization': self.authorization}).json()["results"]

                for result in results:
                    nearby_venues = nearby_venues.append(pd.Series([
                        name,
                        result.get("name"),
                        result.get("geocodes").get("main").get("latitude"),
                        result.get("geocodes").get("main").get("longitude"),
                        result.get("location").get("address")
                    ],index=nearby_venues_columns), ignore_index=True)

            nearby_venues.to_csv('../data/barcelona_hairsalons.csv', header=True)
        else:
            return pd.read_csv('../data/barcelona_hairsalons.csv')