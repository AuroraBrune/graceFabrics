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
  getChristmasStoles: function() {
    return axios.get('/api/products/christmas-stoles')
  },
  getRainbowStoles: function() {
    return axios.get('/api/products/rainbow-stoles')
  },
  getBanners: function() {
    return axios.get('/api/products/banners')
  }
}
export default API;