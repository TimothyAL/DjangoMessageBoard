''' This is the entry file for the User service '''

from flask import Flask
from flask_cors import CORS
from gevent.pywsgi import WSGIServer
from route import user_bp

app = Flask(__name__)

app.register_blueprint(user_bp)

CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

http_server = WSGIServer(('', 5000), app)
http_server.serve_forever()
