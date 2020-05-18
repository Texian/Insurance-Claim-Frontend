import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1/rooms';

const index = () => {
    return axios.get(endpoint)
    .then(res => res)
    .catch(err = console.log(`Room Index Error: ${err}`));
}

const update = (room) => {
    return axios.put(`${endpoint}/${room._id}`, room)
    .then(res => res)
    .catch(err = console.log(`Room Update Error: ${err}`));
}

const deleteRm = (id) => {
    return axios.delete(`${endpoint}/${id}`)
    .then(res => res)
    .catch(err = console.log(`Room Delete Error: ${err}`));
}

export default {
    index,
    update,
    deleteRm
}