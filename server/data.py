import pickle

orig_data = \
{
        'balance':[],
        'contracts':[

                {
                    'id':0,
                    'provider':"SBB",
                    'product':"Halbtax",
                    'start':"2017-12-10",
                    'end':"2018-12-10",
                    'earlies_termination':"2018-10-16",
                    'early_termination_penalty':200,
                    'monthly_cost':13.33,
                    'auto_recurring':True,
                    'status':'RUNNING'
                    },
                {
                    'id':1,
                    'provider':"Sunrise",
                    'product':"Young swiss start",
                    'start':"2017-10-10",
                    'end':"2018-10-10",
                    'earlies_termination':"2018-10-16",
                    'early_termination_penalty':200,
                    'monthly_cost':13.33,
                    'auto_recurring':True,
                    'status':'RUNNING'
                    },
                {
                    'id':2,
                    'provider':"assura",
                    'product':"Basic",
                    'start':"2018-01-01",
                    'end':"2018-12-31",
                    'earlies_termination':"2018-12-31",
                    'early_termination_penalty':200,
                    'monthly_cost':232.42,
                    'auto_recurring':True,
                    'status':'RUNNING'
                    },
                ]

        }

with open('data.pkl', 'wb') as fp:
        pickle.dump(orig_data, fp)

def load_orig():
    with open('data.pkl', 'rb') as fp:
        d = pickle.load(fp)
    return d
