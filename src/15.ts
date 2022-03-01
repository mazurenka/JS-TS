const deleteUser = (userId: string) => {
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