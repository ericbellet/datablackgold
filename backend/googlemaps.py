import os
import time
import requests
import configparser
import logging
import pandas as pd

class GoogleMaps():

    def __init__(self, keywords, type, locations=["41.401096,2.1996773"], radius=500):
        self.config = configparser.ConfigParser().read("config.ini")
        self.keywords = keywords
        self.type = type
        self.key = self.config["google"]["key"]
        self.path_result = self.config["google"]["path_result"]
        self.locations =locations
        self.radius = radius
        self.__endpoints__()

    def __endpoints__(self):
        self.url_nearby_search = self.config["google"]["nearby_search"]

    def getNearbySearch(self):
        url_nearby_search = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
        if not os.path.exists(self.path_result):
            next_page_token = ''
            nearby_places = pd.DataFrame()
            nearby_places_columns = ['business_status',
                                     'Latitude',
                                     'Longitude',
                                     'name',
                                     'rating',
                                     'types',
                                     'user_ratings_total',
                                     'vicinity'
                                     'place_id']
            for location in self.locations:
                url = f"{self.url_nearby_search}type={self.type}&key={self.key}&location={location}&radius={self.radius}"
                count = 0
                while next_page_token is not None and count < 100:
                    try:
                        url_place = url if count == 0 else url + f"&pagetoken={next_page_token}"
                        logging.info(url_place)
                        if count > 2:
                            print(location)
                        time.sleep(2)
                        content = requests.get(url_place).json()
                        results = content.get("results")
                        next_page_token = content.get("next_page_token")
                        nearby_places = nearby_places.append(self.parseNearbySearch(results, nearby_places_columns))
                        count += 1
                    except Exception as e:
                        logging.error(e)
                        break
                next_page_token = ''
            nearby_places.to_csv(self.path_result, header=True)
        else:
            return pd.read_csv(self.path_result)

    def parseNearbySearch(self, results, nearby_places_columns):
        nearby_places = pd.DataFrame()

        for result in results:
            nearby_places = nearby_places.append(pd.Series([
                result.get("business_status"),
                result.get("geometry").get("location").get("lat"),
                result.get("geometry").get("location").get("lng"),
                result.get("name"),
                result.get("rating"),
                result.get("types"),
                result.get("user_ratings_total"),
                result.get("vicinity"),
                result.get("place_id")
            ],index=nearby_places_columns), ignore_index=True)

        return nearby_places