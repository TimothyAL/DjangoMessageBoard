''' This is the entry file for the User service '''

from flask import Flask
from flask_cors import CORS
from messageService.flaskapp.route import  board_bp

app = Flask(__name__)

app.register_blueprint(board_bp)

cors = CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

from gevent.pywsgi import WSGIServer

http_server = WSGIServer(('', 5001), app)
http_server.serve_forever()
