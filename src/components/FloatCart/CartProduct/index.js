import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Thumb from './../../Thumb';
import { formatPrice } from '../../../services/util';
import { connect } from "react-redux";
import { monetateTrack, MonetateEventTypes } from "monetate-state-store-integration-sdk";

@monetateTrack({ type: MonetateEventTypes.DecisionRequest, data: { requestId: "123456" } })
class CartProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false,
    };
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut() {
    this.setState({ isMouseOver: false });
  };
  
  render() {
    const { product, removeProduct } = this.props;
    const classes = ['shelf-item'];

    if (!!this.state.isMouseOver) {
      classes.push('shelf-item--mouseover');
    }

    return (
      <div className={classes.join(' ')}>
        <div
          className="shelf-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(product)}
        />
        <Thumb
          classes="shelf-item__thumb"
          src={require(`../../../static/products/${product.sku}_2.jpg`)}
          alt={product.title}
        />
        <div className="shelf-item__details">
          <p className="title">{product.title}</p>
          <p className="desc">
            {`${product.availableSizes[0]} | ${product.style}`} <br />
            Quantity: {product.quantity}
          </p>
        </div>
        <div className="shelf-item__price">
          <p>{`${product.currencyFormat}  ${formatPrice(product.price)}`}</p>
        </div>
      </div>
    );
  }
}

export default connect()(CartProduct);
