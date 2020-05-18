import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1/claims';

const index = () => {
    return axios.get(endpoint)
    .then(res => res)
    .catch(err = console.log(`Claim Index Error: ${err}`));
}

const update = (claim) => {
    return axios.put(`${endpoint}/${claim._id}`, claim)
    .then(res => res)
    .catch(err = console.log(`Claim Update Error: ${err}`));
}

const deleteCl = (id) => {
    return axios.delete(`${endpoint}/${id}`)
    .then(res => res)
    .catch(err = console.log(`Claim Delete Error: ${err}`));
}

export default {
    index,
    update,
    deleteCl
}