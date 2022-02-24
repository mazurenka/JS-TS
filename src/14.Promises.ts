import axios from "axios";

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






