
import os
import pymongo

db = pymongo.MongoClient(os.getenv('MONGO_URI')).chatapp

users = db['users']

def login(username, password):
    validated_user = users.find_one({'username': username})

    if validated_user and validated_user['password'] == password:
        status = 'Logged In'
        code = 200
        return status, code
    status = 'Information incorrect'
    code = 401
    
    return status, code    

def register(username, password):
    existing_users = users.find({'username': username})

    if len(list(existing_users)) > 0:
        status = 'User with that username exists'
        code = 409
        return status, code
    
    status = 'User registered'
    code = 201
    return status, code
