
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

def add_board(board):
    new_id = get_id_counter()
    print('new_id: ', new_id)
    board['_id'] = new_id
    print(board)
    try:
        boards.insert_one(board)
        return jsonify('BOARD CREATED'), 200
    except:
        return jsonify('ERROR'), 500

def get_id_counter():
    '''This function will get a unique ID by pulling it from the counter field of a counter
    document, then increase the counter value.'''
    _id = boards.find_one_and_update({'_id': 'ID COUNTER'},
                                     {'$inc': {'count': 1}},
                                     return_document=pymongo.ReturnDocument.AFTER)['count']
    # _id = boards.find_one({'_id': 'ID COUNTER'})
    print(_id)
    return _id

def get_comments(board):
    try:
        comments = boards.find_one({'name': board})['comments']
        code = 200
    except:
        comments = 'ERROR: board not found'
        code = 404
    return jsonify(comments), code

def add_comment(comment):
    try:
        board = comment['board_name']
        author = comment['author']
        content = comment['content']
        boards.find_one_and_update({{'board_name': board}, {'$push':{'comments': {'author': author, 'content': content}}}})
        return jsonify('COMMENT ADDED'), 200
    except:
        return jsonify('ERROR: board not found'), 404
