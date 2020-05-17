import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1/floorplans';

const index = () => {
    return axios.get(endpoint)
    .then(res => res)
    .catch(err = console.log(`Floorplan Index Error: ${err}`));
}

const update = (floorplan) => {
    return axios.put(`${endpoint}/${floorplan._id}`, floorplan)
    .then(res => res)
    .catch(err = console.log(`Floorplan Update Error: ${err}`));
}

const deleteFp = (id) => {
    return axios.delete(`${endpoint}/${id}`)
    .then(res => res)
    .catch(err = console.log(`Floorplan Delete Error: ${err}`));
}

default export {
    index,
    update,
    deleteFp
}