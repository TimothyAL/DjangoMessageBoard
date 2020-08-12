''' This file handles routing using a Blueprint '''

from flask import Blueprint, request
from data import login, register, add_socket_id, remove_socket_id

user_bp = Blueprint('users', __name__)

@user_bp.route('/users/<string:username>', methods=['POST', 'PUT'])
def user_login(username):
    ''' This function is for logging in '''
    if request.method == 'POST':
        input_dict = request.get_json(force=True)

        required_fields = ['username', 'password']

        if all(field in input_dict for field in required_fields):
            return login(input_dict['username'], input_dict['password'])

        else:
            return 'Bad Request', 400

    if request.method == 'PUT':
        input_dict = request.get_json(force=True)

        required_fields['username', 'action', 'socket_id']

        if all(field in input_dict for field in required_fields):
            if input_dict['action'] == 'connect':
                return add_socket_id(input_dict['username'], input_dict['socket_id'])
            elif input_dict['action'] == 'disconnect':
                return remove_socket_id(input_dict['username'], input_dict['socket_id'])
            else:
                return 'Bad request', 400

    else:
        return 'Method not implemented', 501

@user_bp.route('/users', methods=['POST'])
def user_register():
    ''' This function is used for requests to register for an account '''
    if request.method == 'POST':
        input_dict = request.get_json(force=True)

        required_fields = ['username', 'password']

        if all(field in input_dict for field in required_fields):
            return register(input_dict['username'], input_dict['password'])

        else:
            return 'Bad Request', 400
