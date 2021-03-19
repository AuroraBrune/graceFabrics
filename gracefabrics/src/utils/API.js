import axios from 'axios';

const API = {

  login: function (credentials) {
    return axios.post('/api/login', credentials);
  },
  logout: function () {
    return axios.get('/api/logout');
  },
  getProducts: function () {
    return axios.get('/api/products');
  },
  getSortedStoles: function (props) {
    let stoleName = props;
    return axios.get(`/api/products/${stoleName}`);
  },
  updateItem: function (event) {
    let product = event.currentTarget.value;
    return axios.put(`/api/admin/products`, JSON.parse(product));
  },
  deleteProduct: function (event) {
    const id = event.currentTarget.dataset.pid;
    return axios.delete(`/api/products/${id}/`);
  },
  createProduct: function (event) {
    let products = event.currentTarget.value;
    return axios.post('/api/admin', JSON.parse(products));
  },
}
export default API;