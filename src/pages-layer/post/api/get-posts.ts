import axios from "axios"

export const getPosts = () => {
   return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then(res => res.data)
}