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