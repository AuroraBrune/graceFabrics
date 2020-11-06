import axios from 'axios';

export default {

  login: function(credentials) {
    return axios.post('/api/login', credentials);
  },
  logout: function() {
    return axios.get('/api/logout');
  },
  getProducts: function() {
    return axios.get('/api/products');
  },
  getProducts: function(id) {
    return axios.get('/api/' + id)
  },
  getProducts: function() {
    return axios.get('/api/admin')
  },
  getProducts: function() {
    return axios.get('/api/products/alter')
  },
  getProducts: function() {
    return axios.get('/api/products/stoles')
  }

}