import requests
import os
import json
import datetime

base_url = 'https://csopenbankingzh.azurewebsites.net'
auth = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9UUXlRVGRCTkRFNU1rWTNNMFZFTnpNeU9EWkJOa1pETkRCR1FrRkZOamxDTTBJeE5EazRNdyJ9.eyJpc3MiOiJodHRwczovL2dicHJvamVjdC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWI5YzFjZjJmMTY0MjcyMWFkODc1NWQwIiwiYXVkIjpbImh0dHBzOi8vb3BlbmJhbmtpbmcuY29tL2FwaSIsImh0dHBzOi8vZ2Jwcm9qZWN0LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE1MzcwNTI4MTQsImV4cCI6MTUzNzEzOTIxNCwiYXpwIjoicThJTVlzMVNLekt0WExvdjhWM0pab3oxaE43MHgzQTciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiZ3R5IjoicGFzc3dvcmQifQ.TAxceUGMw447LRVOkYgRuQtoNrzd2SN5360NtQC_Yg6DiBc4eQy1AbQRWDYkemeYtKsbbTOJIABz5AT19yA7ZA2VHqDw9Q7E4FZDqdeGLTBFu_rvvNTiNvEdR6gQiYtKljOL-VW7nvMlR3aIM7_qDvupGzya084Abb5nhbtamVspCaLtaqtOZXzWPn4CBcPLekotB284mshw0lLmBjROuIMNnxwBcdqrXMG-Y0Kc4oiZdtFd-6QT6Y8DxEZgSVV43l6zxf_7vwnBhO1jow_qYKLEQhSNl59xBj0QgMtC_6ZP5iNMcfZSje3rDq0rWu-WPp9X8-uHqwYUqddzpL4L9g'
nickname = 'roger.federer@gmail.com'
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
    print(requests.get(url, headers=headers))
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
