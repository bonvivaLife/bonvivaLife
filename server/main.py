from flask import Flask
from flask_restful import Resource, Api
import data

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

class items(Resource):
    def get(self):
        return d

api.add_resource(HelloWorld, '/')
api.add_resource(items, '/items')

d = data.orig_data
if __name__ == '__main__':
    app.run(host = '0.0.0.0', debug=True)
