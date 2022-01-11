import React from "react";

type UserType = {
    name: string
    age: number
}

let user: UserType = {
    name: 'Dimych',
    age: 32
}

function increaseAge (user: UserType) {
    user.age++;
}


