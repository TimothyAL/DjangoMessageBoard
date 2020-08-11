''' This file handles routing using a Blueprint '''

from flask import Blueprint, request
from messageService.flaskapp.data import get_boards

board_bp = Blueprint('boards', __name__)



@board_bp.route('/boards', methods=['GET'])
def get_all_boards():
    ''' This function retrieves all boards from the database'''
    val = get_boards()
    print(val, type(val))
    return val


