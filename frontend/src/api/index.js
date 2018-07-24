import axios from 'axios';
const BACKEND_URL = 'http://localhost:9000/api/recipes/';

function getAll() {
    return axios.get(BACKEND_URL)
        .then(response => response.data)
        .catch(console.error);
}

function getReceipt(id) {
    return axios.get(BACKEND_URL + id)
        .then(response => response.data)
        .catch(console.error);
}

function addReceipt(body) {
    return axios.post(BACKEND_URL, body)
        .then(response => response.data)
        .catch(console.error);
}

function updateReceipt(data) {
    return axios.patch(BACKEND_URL + data._id, data)
        .then(response => response.data)
        .catch(console.error);
}

function deleteReceipt(id) {
    return axios.delete(BACKEND_URL + id)
        .then(response => response.data)
        .catch(console.error);
}

export {
    getAll,
    getReceipt,
    addReceipt,
    updateReceipt,
    deleteReceipt
}