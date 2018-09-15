from tim import api

def test():
    print(api.getUserInfo())
    print(api.getBalance())
    params = {
        "Currency": "EUR",
        "Amount": -25,
        "Description": "Test"
    }
    print(api.makePayment(params))
    print(api.getBalance())

test()