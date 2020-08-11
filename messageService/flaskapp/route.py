''' This file handles routing using a Blueprint '''

from flask import Blueprint, request, jsonify
from messageService.flaskapp.data import get_boards, get_comments, add_board, add_comment

board_bp = Blueprint('boards', __name__)



@board_bp.route('/boards', methods=['GET', 'POST'])
def get_all_boards():
    ''' This function retrieves all boards from the database or adds a board to the database'''
    if request.method == 'GET':
        val = get_boards()
        print(val, type(val))
        return val
    elif request.method == 'POST':
        return add_board(request.json)
    else:
        return jsonify('BAD REQUEST'), 400


@board_bp.route('/boards/<board_name>', methods=['GET', 'POST'])
def get_board_comments(board_name):
    '''This function retrieves comments for a specified board from the database or adds comments to a board'''
    if request.method == 'GET':
        return get_comments(board_name)
    elif request.method == 'POST':
        return add_comment(request.json)
    else:
        return jsonify('BAD REQUEST'), 400
