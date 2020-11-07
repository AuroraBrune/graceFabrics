import React, { Component } from 'react'
import Product from './components/Product'

// import products from './models/products.js'

// import Products from './models/products.js'

class VisibleProducts extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      filteredproducts: []
    }
  }

  componentWillMount() {
    this.setState({
      // products: products,
      // filteredProducts: products
    })
  }

  filterProducts = (search) => {
      let filteredProducts = this.state.products
      filteredProducts = filteredProducts.filter((product) => {
          let productName = product.type.toLowerCase()
          return productName.indexOf(
              search.toLowerCase()) !== -1
      })
      this.setState({
          filteredProducts
      })
  }

  render() {
    return (
      <Product products={this.state.filteredProducts} match={this.props.match} onChange={this.filterProducts} />
    )
  }
}

export default VisibleProducts;

