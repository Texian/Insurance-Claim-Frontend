import axios from 'axios';

const endpoint = 'http://localhost:4000/api/vi/profiles';

const index = () => {
    return axios.get(endpoint)
    .then(res => res)
    .catch(err = console.log(`Profiles Index Error: ${err}`));
}

const getOne = (user) => {
    return axios.get(`${endpoint}/${props.user._id}`, user)
    .then(res => res)
    .catch(err = console.log(`Profile Get Error: ${err}`));
}

const create = (user) => {
    return axios.post(endpoint, user)
    .then(res => res)
    .catch(err = console.log(`Profile Create Err: ${err}`));
}

const update = (user) => {
    return axios.put(`${endpoint}/${props.user._id}`, user)
    .then(res => res)
    .catch(err = console.log(`Profile Update Err: ${err}`));
}

const deletePr = (user) => {
    return axios.delete(`${endpoint}/${props.user._id}`)
    .then(res => res)
    .catch(err = console.log(`Profile Delete Error: ${err}`));
}

export default{
    index,
    getOne,
    create,
    update,
    deletePr
}