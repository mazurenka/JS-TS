import {
    makeHairstyle,
    moveUser,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10. immutability";

test('reference type test', () => {
    let user: UserType = {
        name: 'Andre',
        hair: 23,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(11.5)
    expect(user.hair).toBe(23)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Andre',
        hair: 23,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")

})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Andre',
        hair: 23,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")

})

test('upgrade user"s book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Andre',
        hair: 23,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css', 'html', 'js', "react" ]
    }

    const userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")

})