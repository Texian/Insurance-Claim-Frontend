import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1/items';

const index = () => {
    return axios.get(endpoint)
    .then(res => res)
    .catch(err => console.log(`Item Index Error: ${err}`));
}

const update = () => {
    return axios.put(`${endpoint}/${item._id}`, item)
    .then(res => res)
    .catch(err => console.log(`Item Update Error: ${err}`));
}

const deleteIt = (id) => {
    return axios.delete(`${endpoint}/${id}`)
    .then(res => res)
    .catch(err => console.log(`Item Delete Error: ${err}`));
}

export default {
    index, 
    update,
    deleteIt
}