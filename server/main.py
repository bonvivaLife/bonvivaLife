from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS
from tim import api as bankingApi
import copy
from states import States
import data

app = Flask(__name__)
CORS(app)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

@app.route('/items', methods = ['GET'])
def items():
    try:
        balance = bankingApi.getBalance()
        d["balance"] = balance
    except:
        d["balance"] = { "Balance": 42, "Currency": "CHF" }, { "Balance": 112, "Currency": "EUR" }, { "Balance": -18, "Currency": "USD" }
    return jsonify(d)

@app.route('/payments/<currency>/<amount>/<description>', methods = ['POST'])
def payments(currency, amount, description):
    global d
    amount = int(amount)
    params = {
        "Currency": currency,
        "Amount": amount,
        "Description": description
    }
    if (bankingApi.makePayment(params)):
        try:
            balance = bankingApi.getBalance()
            d["balance"] = balance
        except:
            d["balance"] = { "Balance": 42, "Currency": "CHF" }, { "Balance": 112, "Currency": "EUR" }, { "Balance": -18, "Currency": "USD" }
        return jsonify(d)
    else:
        raise RuntimeError("Payment failed")

@app.route('/items/<user_id>/terminate', methods = ['POST'])
def terminate(user_id):
    global d
    user_id = int(user_id)
    found = False
    for index in range(len(d['contracts'])):
        if d['contracts'][index]['id'] == user_id:
            if d['contracts'][index]['status'] != s.running:
                raise RuntimeError("State of ID {} has to be {} for termination".format(user_id, s.running))
            d['contracts'][index]['status'] = s.cancellation_requested
            found = True
    if not found:
        raise RuntimeError("ID not Found")
    return jsonify(d)

@app.route('/items/<user_id>/auto_on', methods = ['POST'])
def auto_on(user_id):
    global d
    user_id = int(user_id)
    found = False
    for index in range(len(d['contracts'])):
        if d['contracts'][index]['id'] == user_id:
            d['contracts'][index]['auto_recurring'] = True
            found = True
    if not found:
        raise RuntimeError("ID not Found")
    return jsonify(d)

@app.route('/items/<user_id>/auto_off', methods = ['POST'])
def auto_off(user_id):
    global d
    user_id = int(user_id)
    found = False
    for index in range(len(d['contracts'])):
        if d['contracts'][index]['id'] == user_id:
            d['contracts'][index]['auto_recurring'] = False
            found = True
    if not found:
        raise RuntimeError("ID not Found")
    return jsonify(d)

@app.route('/reset', methods = ['POST'])
def reset():
    global d
    d = data.load_orig()
    return jsonify(d)

@app.route('/pdf', methods = ['GET'])
def pdf():
    return "8080:/formal_letter_4.pdf"

api.add_resource(HelloWorld, '/')

d = data.load_orig()
s = States()
if __name__ == '__main__':
    app.run(host = '0.0.0.0', debug=True)
