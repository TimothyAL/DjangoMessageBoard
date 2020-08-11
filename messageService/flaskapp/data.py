
import os
import pymongo
from flask import jsonify

db = pymongo.MongoClient(os.getenv('MONGO_URI')).chatapp

boards = db['boards']

def get_boards():
    try:
        all_boards = list(boards.find({'author': {'$exists': True}}))
        code = 200
    except:
        all_boards = 'ERROR'
        code = 500
    return jsonify(all_boards), code