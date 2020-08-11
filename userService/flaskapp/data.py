
import os
import pymongo

db = pymongo.MongoClient(os.getenv('MONGO_URI')).chatapp

users = db['users']
boards = db['boards']

def login(username, password):
    validated_user = users.find_one({'username': username})

    if validated_user and validated_user['password'] == password:
        status = 'Logged In'
        code = 200
        return status, code
    status = 'Information incorrect'
    code = 401
    
    return status, code    


def get_boards():
