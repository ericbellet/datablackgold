import folium
import pandas as pd
import matplotlib.colors
import matplotlib.patches
import matplotlib.pyplot

class RenderMap():
    def __init__(self, file_name):
        self.file_name = file_name

    def draw_simple_map(self, data_path, column_label, latitude='Latitude', longitude='Longitude'):
        df = pd.read_csv(data_path)
        map_bcn = folium.Map(location=['41.3874', '2.1686'], zoom_start=11)
        for lat, lng, label in zip(df[latitude], df[longitude], df[column_label]):
            label = folium.Popup(label, parse_html=True)
            folium.CircleMarker(
                [lat, lng],
                radius=5,
                popup=label,
                color='blue',
                fill=True,
                fill_color='#3186cc',
                fill_opacity=0.7,
                parse_html=False).add_to(map_bcn)

        map_bcn.save(f'../maps/{self.file_name}')


    def draw_geohashes(self, df):
        lat, lng = (41.3874, 2.1686)  # 강남 Lat, Lng
        m = folium.Map((lat, lng), zoom_start=20)
        folium.Choropleth(geo_data=df,
                          name='choropleth',
                          data=df,
                          columns=['geohash', 'value'],
                          fill_opacity=0.09,
                          line_opacity=0.2,
                          legend_name='asdf').add_to(m)

        for lat, lng, label in zip(df["location"], df["location"], df["geohash"]):
            label = folium.Popup(label, parse_html=True)

            folium.CircleMarker(
                [lat[0], lng[1]],
                radius=5,
                popup=label,
                color='blue',
                fill=True,
                fill_color='#3186cc',
                fill_opacity=0.05,
                parse_html=False).add_to(m)




        folium.LayerControl().add_to(m)
        m.save(f'../maps/{self.file_name}')

