
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
    try:
        boards.insert_one(board)
        return jsonify('BOARD CREATED'), 200
    except:
        return jsonify('ERROR'), 500

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
