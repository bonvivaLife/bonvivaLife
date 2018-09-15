from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
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

@app.route('/set_state/<user_id>/<state>', methods = ['POST'])
def user(user_id, state):
    user_id = int(user_id)

    found = False
    for index in range(len(d)):
        if d[index]['id'] == user_id:
            d[index]['status'] = state
            found = True

    if not found:
        raise RuntimeError("ID not Found")
    return jsonify(d)

api.add_resource(HelloWorld, '/')
api.add_resource(items, '/items')

d = data.orig_data
if __name__ == '__main__':
    app.run(host = '0.0.0.0', debug=True)
