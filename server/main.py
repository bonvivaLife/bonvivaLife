from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
from states import States
import data

app = Flask(__name__)
CORS(app)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

class items(Resource):
    def get(self):
        return d

@app.route('/items/<user_id>/terminate', methods = ['POST'])
def terminate(user_id):
    user_id = int(user_id)
    found = False
    for index in range(len(d)):
        if d[index]['id'] == user_id:
            if d[index]['status'] != s.running:
                raise RuntimeError("State of ID {} hast to be {} for termination".format(user_id, s.running))
            d[index]['status'] = s.cancellation_requested
            found = True
    if not found:
        raise RuntimeError("ID not Found")
    return jsonify(d)

@app.route('/reset', methods = ['POST'])
def reset():
    d = data.orig_data
    return jsonify(d)

@app.route('/pdf', methods = ['GET'])
def pdf():
    return "8080:/formal_letter_4.pdf"

api.add_resource(HelloWorld, '/')
api.add_resource(items, '/items')

d = data.orig_data
s = States()
if __name__ == '__main__':
    app.run(host = '0.0.0.0', debug=True)
