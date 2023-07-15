const axios = require("axios")


const fetcher = async(id) => {
    const data = await axios.get(`http://jsonplaceholder.typicode.com/todos/${id}`)
    return data.data
}

module.exports = fetcher