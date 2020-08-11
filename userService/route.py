''' This file handles routing using a Blueprint '''

from flask import Blueprint, request
from data import login, register

user_bp = Blueprint('users', __name__)

@user_bp.route('/users/<string:username>', methods=['POST'])
def user_login(username):
    ''' This function is for logging in '''
    if request.method == 'POST':
        input_dict = request.get_json(force=True)

        required_fields = ['username', 'password']

        if all(field in input_dict for field in required_fields):
            return login(input_dict['username'], input_dict['password'])

        else:
            return 'Bad Request', 400

@user_bp.route('/users', methods=['POST'])
def user_register(username, password):
    ''' This function is used for requests to register for an account '''
    if request.method == 'POST':
        input_dict = request.get_json(force=True)

        required_fields = ['username', 'password']

        if all(field in input_dict for field in required_fields):
            return register(input_dict['username'], input_dict['password'])

        else:
            return 'Bad Request', 400
