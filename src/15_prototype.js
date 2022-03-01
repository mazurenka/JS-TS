function DeleteUserAction(userId) {
    // this = {}
    this.type = 'DELETE-USER';
    this.payload = {
        userId: userId
    }
    // return this
}

const action1 = new DeleteUserAction(121212)
const action2 = new DeleteUserAction(232323)

////////////////////////////

function User(name, site, dayOfBirth) {
    this.name = name
    this.site = site
    this.dayOfBirth = dayOfBirth
}

User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site} `)
}

const u1 = new User('Andre', 'google.com', new Date(1900, 1, 1))
const u2 = new User('Andrey', 'google.com', new Date(1900, 1, 1))

u1.hello()
u2.hello()




















