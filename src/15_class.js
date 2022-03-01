/*class DeleteUserAction {
    constructor() {
        this.type = 'DELETE-USER';
        this.payload = {
            userId: userId
        }
    }
}

const action1  = new DeleteUserAction(121212)
const action2  = new DeleteUserAction(232323)

console.log(action1)
console.log(action2)*/

////////////////////////////

class User {
    constructor(name, site, dayOfBirth) {
        this.name = name
        this.site = site
        this.dayOfBirth = dayOfBirth
    }

    hello() {
        console.log(`Im a ${this.name} from ${this.site}`)
    }
}

const u1 = new User('Andre', 'google.com', new Date(1900, 1, 1))
const u2 = new User('Andrei', 'google.com', new Date(1900, 1, 1))

u1.hello()


