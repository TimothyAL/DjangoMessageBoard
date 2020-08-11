''' This file handles routing using a Blueprint '''

from flask import Blueprint, request
from userService.flaskapp.data import login, get_boards

user_bp = Blueprint('users', __name__)
board_bp = Blueprint('boards', __name__)

@user_bp.route('/users/<string:username>', methods=['POST'])
def user_login(username):
    ''' This function is for logging in '''
    if request.method == 'POST':
        input_dict = request.get_json(force=True)

        return login(input_dict['username'], input_dict['password'])


@board_bp.route('/boards', methods=['GET'])
def get_all_boards():
    ''' This function retrieves all boards from the database'''
    resp = get_boards()

