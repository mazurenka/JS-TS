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

function commonHello() {
    console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
    const user = {
        name: name,
        site: 'google.com',
        dateOfBirth: new Date(1900, 1, 1),
        hello: commonHello
    }
    return user
}

const u1 = userFabric('Andre')
const u2 = userFabric('Dmitriy')

u1.hello()
u2.hello()

