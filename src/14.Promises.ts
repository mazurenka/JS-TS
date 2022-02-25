import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {users} from "./08_Associative arrays";

const findUserInDB = (id: number) => {

}
// pending
const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})

const promise2 = findUserInDB(1)
promise2
    .then((user) => {
        console.log(user)
    })
// .catch((error) => {
//     console.warn(error)
// })
// .finally(() => {
//     console.log('finish')
// })

//const otherPromise = Promise.all([promise1, promise2])
const otherPromise2 = Promise.allSettled([promise1, promise2])

otherPromise2
    .then((res) => {
        console.log(res)
    })

const resolvedPromise = Promise.resolve(100)
resolvedPromise
    .then(data => console.log(data))
    .catch(error => console.log(error))

// const rejectedPromise = Promise.reject({message: 'Some error'})
//
// rejectedPromise
//     .then(data => console.log(data))
//     .catch(error => console.warn(error))

const userApi = {
    getAllUsers() {
        Promise.resolve({name: "Andre"})
    }
}

const pr = userApi.getAllUsers()
console.log(pr.then(users = > console.log(users))


const usersApi = {
    getAllUsers() {
        return Promise.resolve({name: 'D'})
    },
    login(login, password) {
        if (login !== '123' && password !== '123') {
            return Promise.reject({message: 'Incorrect log and pass'})
        } else {
            return Promise.resolve({name: 'A'})
        }
    }
}

































