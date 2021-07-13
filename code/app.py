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
@app.route("/data")
def data():
    filepath = os.path.dirname(os.path.abspath(__file__))
    engine = create_engine(f'sqlite:///{filepath}/whisky_dist.db')
    conn = engine.connect()
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    # create connection SQLite db
    raw_data = pd.read_sql("SELECT * FROM raw_data", conn)
    print(raw_data)
    # session = Session(engine)
    # query = session.query(raw_data.name).all()
    # session.close()
    return raw_data.to_html()
    # return jsonify(query)

# @app.route("/index")
# def index():
#     # create connection SQLite db
#     con = sql.connect("whisky_dist.db")
#     # https://stackoverflow.com/questions/44009452/what-is-the-purpose-of-the-row-factory-method-of-an-sqlite3-connection-object
#     con.row_factory = sql.Row
    
#     cur = con.cursor()
#     cur.execute("select * from raw_data")
    
#     rows = cur.fetchall(); 
#     return render_template("index.html",rows = rows)

# @app.route('/group')
# def group():
#    return render_template('group.html')

if __name__ == "__main__":
    app.run(debug=True)
