import {UserType} from "./10. immutability";

function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power

    return copy
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Andre',
        hair: 23,
        address: {
            title: 'Minsk'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(11.5)
    expect(user.hair).toBe(23)

})