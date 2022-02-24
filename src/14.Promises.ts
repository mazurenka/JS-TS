import axios from "axios";

const findUserInDB = (id: number) => {

}


const promise1 = axios.get('https://google.com')
promise1.then((data) => {
    console.log(data)
})

const promise2 = findUserInDB(1)
promise2.then( (user) => {
    console.log(user)
})

console.log('finish')



