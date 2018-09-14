import requests
import os

base_url = 'https://csopenbankingzh.azurewebsites.net'
auth = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9UUXlRVGRCTkRFNU1rWTNNMFZFTnpNeU9EWkJOa1pETkRCR1FrRkZOamxDTTBJeE5EazRNdyJ9.eyJpc3MiOiJodHRwczovL2dicHJvamVjdC5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWI5YzFjZjJmMTY0MjcyMWFkODc1NWQwIiwiYXVkIjpbImh0dHBzOi8vb3BlbmJhbmtpbmcuY29tL2FwaSIsImh0dHBzOi8vZ2Jwcm9qZWN0LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE1MzY5NjU3MTMsImV4cCI6MTUzNzA1MjExMywiYXpwIjoicThJTVlzMVNLekt0WExvdjhWM0pab3oxaE43MHgzQTciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiZ3R5IjoicGFzc3dvcmQifQ.nQaltGDshGbt6mltIexvDHKmAWXUmGJIcVOsyziRPaeDHjXl8qCxGDOJXg-nEryiubCVEmliEkkK_ixSLnkMYFschZZ7NKTcharzL-dD4DPSj0rgNePnnujWVAzjrdq9xNNX4JbOcQLAqSUWW3E5PFzr7VrehZ7iqdq-JVaLDzCGTL1FMtKZQc5KaDfFv3PlLNUQOsbktz-my-m3T1RSNr_9Th7NTjOBslWU4_2hksInKLAt7E1IveR0OWMphArIqrR_RleFrpm-nayjwhWkicPYDHHZ55KaBVE5TUvm3PiIYq4D12-UyZ74ODh800F9POE4Uf3dW8nx39gfRhPCdQ'
nickname = 'bonvivalife@gmail.com'
password = 'Wowv1DruddOGlie'
headers = {
    'Accept' : 'application/json',
    'Authorization' : '{}'.format(auth)
}

def test():
    getUserInfo()

def getUserInfo():
    url = '{}/customers?nickname={}'.format(base_url, nickname)
    print(url)
    print(headers)
    userInfo = requests.post(url, headers=headers)
    print(userInfo.json())


test()