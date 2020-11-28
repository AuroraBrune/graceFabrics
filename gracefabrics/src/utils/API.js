import axios from 'axios';

const API = {

  login: function(credentials) {
    return axios.post('/api/login', credentials);
  },
  logout: function() {
    return axios.get('/api/logout');
  },
  getProducts: function() {
    return axios.get('/api/products');
  },
  getProductsById: function(id) {
    return axios.get('/api/' + id)
  },
  getAdmin: function() {
    return axios.get('/api/admin')
  },
  getAlters: function() {
    return axios.get('/api/products/alter')
  },
  getStoles: function() {
    return axios.get('/api/products/stoles')
  },
  getChristmasStoles: function() {
    return axios.get('/api/products/christmas-stoles')
  },
  getSortedStoles: function(event) {
     let stoleName = event.currentTarget.value
     console.log(stoleName)
    return axios.get(`/api/products/${stoleName}`)
  },
  getEasterStoles: function() {
    return axios.get('/api/products/easter-stoles')
  },
  getPentecostStoles: function() {
    return axios.get('/api/products/pentecost-stoles')
  },
  getLentenStoles: function() {
    return axios.get('/api/products/lenten-stoles')
  },
  getAdventStoles: function() {
    return axios.get('/api/products/advent-stoles')
  },
  getBanners: function() {
    return axios.get('/api/products/banners')
  },
  updateItem: function(event) {
    console.log(event.currentTarget.value)
    let product = event.currentTarget.value
    console.log((event.currentTarget.value))
    return axios.put(`/api/admin/products`, JSON.parse(product))
  },
  deleteProduct: function(event){
    const id = event.currentTarget.dataset.pid
    return axios.delete(`/api/products/${id}/`)
  },
  createProduct: function(event) {
    console.log(event.currentTarget.value)
    let products = event.currentTarget.value
    console.log(JSON.parse(products))
    return axios.post('/api/admin', JSON.parse(products))
  },
}
export default API;