import React from "react";

const deleteUser = (userId) => {
    const action = {
        type: 'DELETE-USER',
        payload: {
            userId: userId
        }
    }
    return action
}

const action1 = deleteUser('121212')
const action2 = deleteUser('232323')

console.log(action1)
console.log(action2)

/////////////////////////////

const userFabric = (name) => {
    const user = {
        name: name,
        site: 'google.com',
        dateOfBirth: new Date(1900, 1,1),
        hello() {
            console.log(`I am ${this.name} from ${this.site}`)
        }
    }
    return user
}

const u1 = userFabric('Andre')
const u2 = userFabric('Dmitriy')

console.log(u1)
console.log(u2)

