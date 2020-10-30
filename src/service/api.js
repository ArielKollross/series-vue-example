import axios from 'axios';

// https://guarded-headland-11685.herokuapp.com/

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})