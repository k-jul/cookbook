import axios from 'axios';
const BACKEND_URL = 'http://localhost:9000/api/recipes/';

function getAll() {
    return axios.get(BACKEND_URL)
        .then(response => response.data)
        .catch(console.error);
}

function getRecipe(id) {
    return axios.get(BACKEND_URL + id)
        .then(response => response.data)
        .catch(console.error);
}

function addRecipe(body) {
    return axios.post(BACKEND_URL, body)
        .then(response => response.data)
        .catch(console.error);
}

function updateRecipe(id, body) {
    return axios.put(BACKEND_URL + id, body)
        .then(response => response.data)
        .catch(console.error);
}

function deleteRecipe(id) {
    return axios.delete(BACKEND_URL + id)
        .then(response => response.data)
        .catch(console.error);
}

export {
    getAll,
    getRecipe,
    addRecipe,
    updateRecipe,
    deleteRecipe
}