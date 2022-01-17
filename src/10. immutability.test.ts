import {makeHairstyle, moveUser, userLaptopType, UserType} from "./10. immutability";

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
    let user: userLaptopType = {
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