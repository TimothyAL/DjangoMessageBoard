
import os
import pymongo
from flask import jsonify

db = pymongo.MongoClient(os.getenv('MONGO_URI')).chatapp

users = db['users']
# boards = db['boards']

def login(username, password):
    validated_user = users.find_one({'username': username})

    if validated_user and validated_user['password'] == password:
        status = 'Logged In'
        code = 200
        return status, code
    status = 'Information incorrect'
    code = 401
    
    return status, code    


# def get_boards():
#     try:
#         all_boards = list(boards.find({'author': {'$exists': True}}))
#         code = 200
#     except:
#         all_boards = 'ERROR'
#         code = 500
#     return jsonify(all_boards), code