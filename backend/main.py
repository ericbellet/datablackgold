import configparser
import logging
import os
import ast
from render_map import RenderMap
from coordinates import Coordinates
logging.root.setLevel(logging.INFO)


if __name__ == '__main__':
    config = configparser.ConfigParser()
    config.read("config.ini")
    #RenderMap(file_name='google_hairsalons_test.html').draw_simple_map(data_path='../data/google_hairsalons.csv',  column_label="name")
    # df = Coordinates().obtain_geohashes_from_geohashes(ast.literal_eval(config.get("coordinates","geohashes")))
    # RenderMap(file_name='geohashes.html').draw_geohashes(df)
    df = Coordinates().obtain_geohashes_from_geohashes(ast.literal_eval(config.get("coordinates","geohashes")), total_area=3)
    RenderMap(file_name='geohashes.html').draw_geohashes(df)

    keywords = "barberria"
    type = "beauty_salon|hair_care"