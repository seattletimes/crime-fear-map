## Data sources

### Crime/fear data

Spreadsheet from Gene is in `raw-data`

### Geography

https://data.seattle.gov/Public-Safety/Seattle-Police-Micro-Community-Policing-Plans-Neig/3ezk-fbaz was out of date so I took the map from https://www.seattle.gov/police/community-policing/mcpp-location-map --> This loads from https://gisrevprxy.seattle.gov/arcgis/rest/services/DoIT_ext/SP_MicroPolicePlanArea/MapServer/0/ and you can get raw geojson of these MCPP areas at https://gisrevprxy.seattle.gov/arcgis/rest/services/DoIT_ext/SP_MicroPolicePlanArea/MapServer/0/query?where=1%3d1&outfields=*&f=geojson
