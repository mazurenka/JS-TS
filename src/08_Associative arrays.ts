import React from "react";


let user01 = {
    'name': "Andre",
    'age': 12,
    'address': {
        'city': {
            'title': 'Minsk'
        }
    }
}

let title = user01.address.city.title
let title1 = user01['address']['city']['title']

let users0 = ['Andre', 'Lena', 'Katya', 'Igor']
let users1 = users0[0] //'Andre'
let users2 = users0.map((e) => e.toUpperCase()) //['ANDRE', 'LENA', 'KATYA', 'IGOR']
let users3 = users0['map']((e) => e.toUpperCase()) //['ANDRE', 'LENA', 'KATYA', 'IGOR']

let userObj0 = {
    '0': 'Andre',
    '1': 'Lena',
    '2': 'Katya',
    '3': 'Igor'
}
let userObj1 = userObj0['0']   //'Andre'

// @ts-ignore
let userObj2 = userObj0['table'] = 'brown'
// @ts-ignore
let userObj3 = userObj0['car color'] = 'red'
// @ts-ignore
let userObj4 = userObj0['5']  //'red'

let userObjKeys = Object.keys(userObj0)     //['0', '1', '2', '3' ]
let userObjValue = Object.values(userObj0)  //['Andre', 'Lena', 'Katya', 'Igor' ]


export const usersObj = {
    '0': 'Andre',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
type UsersType = {
    [key: string]: { id: number, name: string }
}
export const users: UsersType = {
    '101': {id: 101, name: 'Andre'},
    '34567786': {id: 34567786, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

//users[1]
let user = {id: 100500, name: 'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Viktor'

export const usersArray = [
    {id: 101, name: 'Andre'},
    {id: 34567786, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

//usersArray.filter(u => u.id === 1)
//var usersArray = usersArray.filter(u => u.id !== user.id)






















