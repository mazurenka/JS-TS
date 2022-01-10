import React from "react";


let user = {
    'name': "Andre",
    'age': 12,
    'address': {
        'city': {
            'title': 'Minsk'
        }
    }
}

let title = user.address.city.title
let title1 = user['address']['city']['title']

let users = ['Andre', 'Lena', 'Katya', 'Igor']
let users1 = users[0] //'Andre'
let users2 = users.map((e) => e.toUpperCase()) //['ANDRE', 'LENA', 'KATYA', 'IGOR']
let users3 = users['map']((e) => e.toUpperCase()) //['ANDRE', 'LENA', 'KATYA', 'IGOR']

let userObj = {
    '0': 'Andre',
    '1': 'Lena',
    '2': 'Katya',
    '3': 'Igor'
}
let userObj1 = userObj['0']   //'Andre'
let userObj2 = userObj['table'] = 'brown'
let userObj3 = userObj['car color'] = 'red'
let userObj4 = userObj['5']  //'red'

let userObjKeys = Object.keys(userObj)     //['0', '1', '2', '3' ]
let userObjValue = Object.values(userObj)  //['Andre', 'Lena', 'Katya', 'Igor' ]






















