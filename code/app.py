from flask import Flask, jsonify, render_template, redirect
import sqlite3 as sql
from pandas.core.frame import DataFrame
from sqlalchemy import create_engine
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import os

app = Flask(__name__)

# raw_data = Base.classes.raw_data

# Route to render index.html template using data from Mongo
@app.route("/raw_data")
def raw():
    filepath = os.path.dirname(os.path.abspath(__file__))
    engine = create_engine(f'sqlite:///{filepath}/whisky_dist.db')
    conn = engine.connect()
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    # create connection SQLite db
    raw_data = pd.read_sql("SELECT * FROM raw_data", conn)
    print(raw_data)
    return jsonify(raw_data.values.tolist())

@app.route("/top_rated")
def rated():
    filepath = os.path.dirname(os.path.abspath(__file__))
    engine = create_engine(f'sqlite:///{filepath}/whisky_dist.db')
    conn = engine.connect()
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    # create connection SQLite db
    raw_data = pd.read_sql("SELECT * FROM top_rated", conn)
    print(raw_data)
    return jsonify(raw_data.values.tolist())

@app.route("/top_votes")
def votes():
    filepath = os.path.dirname(os.path.abspath(__file__))
    engine = create_engine(f'sqlite:///{filepath}/whisky_dist.db')
    conn = engine.connect()
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    # create connection SQLite db
    raw_data = pd.read_sql("SELECT * FROM top_votes", conn)
    print(raw_data)
    return jsonify(raw_data.values.tolist())

@app.route("/top_whiskies")
def whiskies():
    filepath = os.path.dirname(os.path.abspath(__file__))
    engine = create_engine(f'sqlite:///{filepath}/whisky_dist.db')
    conn = engine.connect()
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    # create connection SQLite db
    raw_data = pd.read_sql("SELECT * FROM top_whiskies", conn)
    print(raw_data)
    return jsonify(raw_data.values.tolist())

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about_us.html")

@app.route("/data")
def data():
    return render_template("data.html")


if __name__ == "__main__":
    app.run(debug=True)
