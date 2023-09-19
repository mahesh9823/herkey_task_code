from asyncio import constants
import json
import traceback
from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.json_util import dumps
import certifi

uri = "mongodb+srv://dbadmin:dbadmin2023@cluster0.jquyl3o.mongodb.net/"
dbClient = MongoClient(uri, tlsCAFile=certifi.where())


def initializeDb():
    return dbClient


db = dbClient["herkeyDashboard"]


def insertData(tableType, data, existFilter=None, session=None):
    try:

        if existFilter is not None:
            state = db[tableType].find_one(existFilter)
        else:
            state = None
        if state is None:
            newRecord = db[tableType].insert_one(data, session=session)
            return True
        else:
            return "Record already exists"
    except:
        return str(traceback.format_exc())


def getData(tableType, filterOptions=None, projection=None, session=None):
    try:
        records = []
        for item in db[tableType].find(filterOptions, projection, session=session):
            records.append(item)
        return json.loads(dumps(records))
    except:
        print(traceback.format_exc())
        return []
