# Whisky Discography
Project #2 - Group 6

![whisky01.png](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/whisky01.png)

An in-depth analysis to the global whisky market using the Whisky Hunter API.

## Assignment structure
```
Whisky_Discography
| 
|__ code/
|__ |__ app.py
|__ |__ whisky_data.ipynb
|__ |__ whisky_dist.db
|   |__ static/
|      |__ css/
|         |__ style.css
|      |__ image/
|         |__ alysha.png
|         |__ craig.jpg
|         |__ heriawan.jpg
|         |__ matt.png
|         |__ ms2.jpg
|         |__ oban.jpg
|         |__ steph.jpg
|         |__ whisky01.png
|         |__ whisky02.png
|         |__ whisky03.png
|         |__ whisky04.png
|         |__ whisky05.png
|         |__ whisky06.png
|         |__ whisky07.png
|         |__ whisky08.png
|         |__ whisky09.png
|         |__ ym1.jpg
|      |__ js/
|         |__ app.js
|         |__ data.js
|         |__ explore.js
|      |__ scripts/
|         |__ world.js
|   |__ templates/
|      |__ about_us.html
|      |__ data.html
|      |__ index.html
|
|__ data/
|   |__ whisky_hunter_data.csv
|   |__ whisky_hunter_data.json
|
|__ Project Proposal/
|   |__ Project 2.docx
|   |__ Wireframe Toolkit.pptx
|
|__ .gitignore 
|__ README.md
| 

```

## Usage

```
# Dependencies and Setup

## JUPYTER NOTEBOOK
* import pandas as pd
* import json
* from sqlalchemy import create_engine

## JAVASCRIPT
* <!-- install lodash -->
* <!-- https://www.newline.co/@morfsys/you-should-start-using-lodash-in-2020-and-heres-why--792500b0 -->
* <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>

## HTML
* <!DOCTYPE html>
* <html lang="en">
* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

### HIGHCHARTS - MAP
* <script src="https://code.highcharts.com/maps/highmaps.js"></script>
* <script src="https://code.highcharts.com/maps/modules/data.js"></script>
* <script src="https://code.highcharts.com/maps/modules/exporting.js"></script>
* <script src="https://code.highcharts.com/maps/modules/offline-exporting.js"></script>
* <script src="https://code.highcharts.com/mapdata/custom/world.js"></script>

### STATISTICS - PLOTLY
* <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

### DISTILLERIES DATA TABLE - JQUERY & DATATABLES
* <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
* <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.5.0/d3.js"></script>
* <script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>

## HEROKU
* pip install gunicorn
* pip install flask
* pip install flask-sqlalchemy

```

## Data Sources:

|No|Source|Link|
|-|-|-|
|1|Public APIs|https://whiskyhunter.net/api/|

## Datasets 

|No|Source|Link|
|-|-|-|
|1|whisky_hunter_data.csv|https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/data/whisky_hunter_data.csv|
|2|whisky_hunter_data.json|https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/data/whisky_hunter_data.json|

## Extract:

Using the Whisky Hunter API we fetched the json file from [Whisky Hunter](https://whiskyhunter.net/api/) and extracted the Whisky distillery information from the [Whisky Base](https://www.whiskybase.com/whiskies/distilleries) distillery table.

### Whisky Hunter
![extract01.PNG](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/extract01.PNG)

### Whisky Base
![extract02.PNG](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/extract02.PNG)

## Transform:

In jupyter notebook applying the pandas library we read in the files, transformed the data and created dataframes sorted in ascending order based on the top rated whiskies, top voted and top whiskies in the world in preparation for pushing to a data base.

![chart](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/transform01.PNG)

## Load - SQLite Database:

Using the dataframes created in the jupyter notebook we applied the df.to_SQL to push the tables to the SQLite Database to store the raw data.

 created in the juto push to and store raw data and sorted data in an SQLite Database [whisky_dist.db](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/whisky_dist.db).

![chart](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/sqlitedb01.PNG)

![chart](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/sqlitedb02.PNG)

## Visualisations:

All visualisations were created and displayed on the html pages by using plotly, jquery and highchart via fetching the data from the whisky_dist.db raw_data, top_rated and the unique_countries tables.

Below is an overview of each html page for our Whisky Discography webpage;

### Index

![chart](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/index.PNG)

### Statistics

![chart](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/statistics.PNG)

### Explore

![chart](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/explore.PNG)

### Distilleries

![chart](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/image/distilleries.PNG)

### Our Picks

![chart](https://github.com/EpicTomatoSauce/Whisky_Discography/blob/main/code/static/images/XXX.PNG)

## Analysis:

After diving into the world of Whisky we noted the following observations from our dataset.

* The highest rated Whisky was in Italy, however it only had one vote
* United States had the most distilleries 
* Scotland had the most reviewed distilleries  

## Final Note:

The Whisky Discography website can be used by Whisky beginners to connoisseurs to find their next whisky to sample. Essentially end users can use the website to plan their next Whisky road trip, gift or whisky to enjoy.


## Contributors
- [@Alysha](https://github.com/alysnow)
- [@Heriawan](https://github.com/xsbaggages/)
- [@Steph](https://github.com/sSalvs)
- [@Matt](https://github.com/EpicTomatoSauce)
