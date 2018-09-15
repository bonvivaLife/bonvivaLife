import requests
import os
import json
import datetime

base_url = 'https://csopenbankingzh.azurewebsites.net'
auth = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9UUXlRVGRCTkRFNU1rWTNNMFZFTnpNeU9EWkJOa1pETkRCR1FrRkZOamxDTTBJeE5EazRNdyJ9.eyJpc3MiOiJodHRwczovL2dicHJvamVjdC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWI5YzFjZjJmMTY0MjcyMWFkODc1NWQwIiwiYXVkIjpbImh0dHBzOi8vb3BlbmJhbmtpbmcuY29tL2FwaSIsImh0dHBzOi8vZ2Jwcm9qZWN0LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE1MzY5NjU3MTMsImV4cCI6MTUzNzA1MjExMywiYXpwIjoicThJTVlzMVNLekt0WExvdjhWM0pab3oxaE43MHgzQTciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiZ3R5IjoicGFzc3dvcmQifQ.nQaltGDshGbt6mltIexvDHKmAWXUmGJIcVOsyziRPaeDHjXl8qCxGDOJXg-nEryiubCVEmliEkkK_ixSLnkMYFschZZ7NKTcharzL-dD4DPSj0rgNePnnujWVAzjrdq9xNNX4JbOcQLAqSUWW3E5PFzr7VrehZ7iqdq-JVaLDzCGTL1FMtKZQc5KaDfFv3PlLNUQOsbktz-my-m3T1RSNr_9Th7NTjOBslWU4_2hksInKLAt7E1IveR0OWMphArIqrR_RleFrpm-nayjwhWkicPYDHHZ55KaBVE5TUvm3PiIYq4D12-UyZ74ODh800F9POE4Uf3dW8nx39gfRhPCdQ'
nickname = 'max.mustermann@gmail.com'
cashaccountid = 11
customerid = 1000015
bankingrelationid = 9
headers = {
    'Accept' : 'application/json',
    'Authorization' : '{}'.format(auth)
}

def getUserInfo():
    url = '{}/customers?nickname={}'.format(base_url, nickname)
    return requests.post(url, headers=headers).json()


def makePayment(params):
    payload = {
        "accountid" : cashaccountid,
        "currency": params["Currency"],
        "sign": "CREDIT",
        "valuedate" : getDateString(),
        "amount" : params["Amount"],
        "description" : params["Description"]
    }
    print(payload)
    url = '{}/cashtransactions/'.format(base_url)
    req = requests.post(url, headers=headers, json=payload)
    try:
        req.raise_for_status()
        return True
    except:
        return False

def getDateString():
    return datetime.datetime.today().strftime('%Y-%m-%d')

def getBalance():
    url = '{}/accounts/{}/balancecash'.format(base_url, cashaccountid)
    print(url)
    json = requests.get(url, headers=headers).json()
    print(json)
    ret = []
    for i in json["object"]:
        entry = {
            "Balance": i["balance"],
            "Currency": i["currency"]
        }
        ret.append(entry)
    return ret