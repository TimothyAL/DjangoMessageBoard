
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
    
    users.insert_one({'_id': get_id_counter(), 'username': username, 'password': password})

    status = 'User registered'
    code = 201
    return status, code

def get_id_counter():
    '''This function will get a unique ID by pulling it from the counter field of a counter
    document, then increase the counter value.'''
    return users.find_one_and_update({'_id': 'ID_COUNTER'},
                                     {'$inc': {'count': 1}},
                                     return_document=pymongo.ReturnDocument.AFTER)['count']

if __name__ == '__main__':
    users.drop()

    users.insert_one({'_id': 'ID_COUNTER', 'count': 0})
