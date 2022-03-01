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

/*class User {
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

u1.hello()*/

/////////////////////////////////////

/*class User {
    constructor(name, site, dayOfBirth) {
        this.name = name
        this.site = site
        this.dayOfBirth = dayOfBirth
        this.counter = 0
    }

    hello() {
        this.counter++
        console.log(`Im a ${this.name} from ${this.site}`)
    }
}

const u1 = new User('Andre', 'google.com', new Date(1900, 1, 1))
const u2 = new User('Andrei', 'google.com', new Date(1900, 1, 1))

u1.hello()
u2.hello()*/

////////////////////////////////////////////

// class User {
//     #name = ''
//
//     constructor(name, site, dayOfBirth) {
//         this.#name = name
//         this.site = site
//         this.dayOfBirth = dayOfBirth
//         this.counter = 0
//     }
//
//     getName() {
//         return this.#name
//     }
//
//     setName(value) {
//         return this.#name = value
//     }
//
//     hello() {
//         this.counter++
//         console.log(`Im a ${this.#name} from ${this.site}`)
//     }
// }
//
// const u1 = new User('Andre', 'google.com', new Date(1900, 1, 1))
// const u2 = new User('Andrei', 'google.com', new Date(1900, 1, 1))
//
// //console.log(u1.#name)
// console.log(u1.getName())
// console.log(u1.setName('Andrew'))


//////////////////////////////


class User {
    name = ''

    constructor(name, site, dayOfBirth) {
        this.name = name
        this.site = site
        this.dayOfBirth = dayOfBirth
        this.counter = 0
    }

    get name() {
        return this.name
    }

    set name(value) {
        return this.name = value
    }

    hello() {
        this.counter++
        console.log(`Im a ${this.name} from ${this.site}`)
    }
}

const u1 = new User('Andre', 'google.com', new Date(1900, 1, 1))
const u2 = new User('Andrei', 'google.com', new Date(1900, 1, 1))
u1.name = 'Igor'
let users = [u1, u2]

users.forEach(u => u.hello())

class Coder extends User {
    constructor(name, site, dayOfBirth, tech) {
        super(name, site, dayOfBirth);
        this.tech = tech
    }

    code() {
        console.log(`I am ${this.name}, this is my ${this.tech} code: let sum = (a, b) => a + b`)
    }

    hello() {
        super.hello();
        console.log('Go away')
    }
}

class Hacker extends Coder {
    constructor(name, site, dayOfBirth, tech) {
        super();
        this.tech = '.Net'
        this.name = 'X'
    }
    code() {
        console.log(`I'll hack everything`)
    }
}

const coder1 = new Coder('Andre coder', 'google.com', new Date(1982, 1, 1), 'JS')
coder1.code()

const hacker = new Hacker('Andre coder', 'google.com', new Date(1982, 1, 1), 'JS')
hacker.code()
hacker.hello()














