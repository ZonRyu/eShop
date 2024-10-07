import axios from "axios";

export const getProducts = (callback) => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
        console.log(res.data)
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    })
}