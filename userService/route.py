''' This file handles routing using a Blueprint '''

from flask import Blueprint, request
from data import login

user_bp = Blueprint('users', __name__)

@user_bp.route('/users/<string:username>', methods=['POST'])
def user_login(username):
    ''' This function is for logging in '''
    if request.method == 'POST':
        input_dict = request.get_json(force=True)

        return login(input_dict['username'], input_dict['password'])


