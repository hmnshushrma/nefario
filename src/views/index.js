import React, { Component } from 'react'
import getProductCallApi from '../utils/apiService'
import Listing from './list'

class ViewsContainer extends Component {
  state = { isLoading: true }

  componentDidMount() {
    this.getData()
  }

  getDataTagName(args) {
    this.setState({
      selectedCategory: args
    })
  }

  async getData() {
    const response = await getProductCallApi().then(res => res)
    const category = response.map((res, key) => {
      return res.category
    })

    await this.setState({
      products: response,
      categories: category,
      isLoading: false
    })
  }

  render() {
    console.log(this.state)
    const { products, categories, isLoading, selectedCategory } = this.state
    if (!isLoading) {
      return (
        <React.Fragment>
          <Listing
            data={products}
            categories={categories}
            selected={selectedCategory || null}
          />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <p>Is Loading</p>
        </React.Fragment>
      )
    }
  }
}

export default ViewsContainer
