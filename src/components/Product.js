// Code Product Component Here
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    return (<div>
      <h1>{this.props.name}</h1>
      <p>{this.props.producer}</p>
      <p>Has Watermark: {this.props.hasWatermark}</p>
      <p>Color: {this.props.color}</p>
      <p>Weight: {this.props.weight}</p>
    </div>)
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'salmon', 'eggshell-white']).isRequired,
  weight: PropTypes.oneOf([...Array(300).keys()].slice(80)).isRequired
}
