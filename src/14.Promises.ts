import axios from "axios";

const findUserInDB = (id: number) => {

}
// pending
const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})

const promise2 = findUserInDB(2)
promise2
    .then((user) => {
        console.log(user)
    })
    .catch((error) => {
        console.warn(error)
    })
    .finally(() => {
        console.log('finish')
    })






