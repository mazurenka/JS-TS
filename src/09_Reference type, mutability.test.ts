import React from "react";

function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

test('reference type test', () => {

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user);

    expect(user.age).toBe(33)

    const superman = user;

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array test', () => {

    let users = [{name: 'Dimych', age: 32}, {name: 'Dimych', age: 32}]

    let admins = users;

    admins.push({name: 'Pat', age: 10})

    expect(users[2]).toEqual({name: 'Pat', age: 10})
})

test('value type test', () => {

    let usersCount = 100

    let adminsCount = usersCount;

    adminsCount++

    expect(adminsCount).toBe(101)
    expect(usersCount).toBe(100)
})

test('deep reference type test', () => {

    let address = {title: 'Minsk'}

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: addr
    }
    user2.address.title = 'Kanary'

    expect(user.address.title).toBe('Kanary')
    expect(user2.address.title).toBe('Kanary')
})

test('deep reference array test', () => {

    let address = {title: 'Minsk'}

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }
    const users = [user, user2, {name: 'Kate', age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitriy'

    expect(user.name).toBe('Dmitriy')
    expect(admins[0].name).toBe('Dmitriy')
})

test('sort array test', () => {
    let letters = ['a', 'd', 'c', 'b']

    letters.sort();

    expect(letters).toEqual(['a', 'b', 'c', 'd'])

})






