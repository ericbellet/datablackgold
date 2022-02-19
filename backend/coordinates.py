import logging
import os
import numpy as np
import requests
import geocoder
import geohash2
import folium
import geopandas as gpd
import pandas as pd
from bs4 import BeautifulSoup
from geolib import geohash as gh
from polygon_geohasher.polygon_geohasher import geohash_to_polygon



class Coordinates():

    def __init__(self):
        pass

    def get_coordinates(self, row):
        # initialize variable to None
        lat_lng_coords = None
        print(row["neighbourhoods"])
        # loop until we get the coordinates
        while (lat_lng_coords is None):
            g = geocoder.arcgis(f'{row["neighbourhoods"]}, Barcelona')
            lat_lng_coords = g.latlng

        # return pair lat,long
        return pd.Series([lat_lng_coords[0], lat_lng_coords[1]])

    def get(self):
        if not os.path.exists('../data/barcelona_neighbours.csv'):
            wiki_url = "https://en.wikipedia.org/wiki/Districts_of_Barcelona"

            # If the request was successful, reponse should be '200'.
            response = requests.get(wiki_url)

            # Parse response content to html with BeautifulSoup
            soup = BeautifulSoup(response.content, 'html.parser')

            # Find the right table in the HTML sourcecode
            wiki_table = soup.find('table', {"class": 'wikitable'})

            df_bcn = pd.DataFrame()
            for row in wiki_table.findAll("tr"):
                cells = row.findAll('td')
                if len(cells) > 0:
                    district = cells[1].find(text=True).replace('\n', '').rstrip().lstrip().upper()
                    size_km2 = cells[2].find(text=True).replace('\n', '').rstrip().lstrip().upper()
                    population = cells[3].find(text=True).replace('\n', '').rstrip().lstrip().upper()
                    inhabitants_km2 = cells[4].find(text=True).replace('\n', '').rstrip().lstrip().upper()
                    neighbourhoods = [neighbour.find(text=True) for neighbour in cells[5].find_all('a')]
                    df_bcn = df_bcn.append(pd.Series([district, size_km2, population, inhabitants_km2, neighbourhoods], index=['district', 'size_km2', 'population', 'inhabitants_km2', 'neighbourhoods']), ignore_index=True)
            df_bcn = df_bcn.explode('neighbourhoods')


            df_bcn[['Latitude', 'Longitude']] = df_bcn.apply(self.get_coordinates, axis=1)
            df_bcn.to_csv('../data/barcelona_neighbours.csv', header=True)
            return df_bcn
        else:
            return pd.read_csv('../data/barcelona_neighbours.csv')

    def obtain_geohashes_from_geohashes(self, geohashes: list, precision=6, total_area=8):
        initial_locations = [geohash2.decode_exactly(geohash_defined)[0:2] for geohash_defined in geohashes]
        geohashes_new_precision = [geohash2.encode(location[0], location[1], precision) for location in initial_locations]
        neigbors = self.obtain_neighbors(geohashes_new_precision, total_area)

        logging.info(f"Total of geohashes {len(neigbors)}")

        locations = [geohash2.decode_exactly(geohash_defined)[0:2] for geohash_defined in neigbors]

        df = gpd.GeoDataFrame({'location': locations, 'value': np.random.rand(len(locations))})
        df['geohash'] = df['location'].apply(lambda l: geohash2.encode(l[0], l[1], precision))
        df['geometry'] = df['geohash'].apply(geohash_to_polygon)
        df.crs = {'init': 'epsg:4326'}
        return df

    def obtain_neighbors(self, neigbors:list, n):
        if n == 0:
            return neigbors
        else:
            neigbors = list(set(neigbors))
            geohashes_neighbors = [list(gh.neighbours(g)) for g in neigbors]
            flat_list = [item for sublist in geohashes_neighbors for item in sublist]

            return self.obtain_neighbors(flat_list, n-1)
