import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';
import { updateCart } from '../../../../services/total/actions';

class Product extends React.Component {

  handleAddProduct = () => {
    const {cartProducts, addProduct, updateCart, product} = this.props;    
    addProduct(product);

    // code to update total state
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
  }

  render() {
    const { product } = this.props
    product.quantity = 1;

    let formattedPrice = formatPrice(product.price, product.currencyId);
  
    let productInstallment;
  
    if (!!product.installments) {
      const installmentPrice = product.price / product.installments;
  
      productInstallment = (
        <div className="installment">
          <span>or {product.installments} x</span>
          <b>
            {product.currencyFormat}
            {formatPrice(installmentPrice, product.currencyId)}
          </b>
        </div>
      );
    }
  
    return (
      <div
        className="shelf-item"
        onClick={this.handleAddProduct}
        data-sku={product.sku}
      >
        {product.isFreeShipping && (
          <div className="shelf-stopper">Free shipping</div>
        )}
        <Thumb
          classes="shelf-item__thumb"
          src={require(`../../../../static/products/${product.sku}_1.jpg`)}
          alt={product.title}
        />
        <p className="shelf-item__title">{product.title}</p>
        <div className="shelf-item__price">
          <div className="val">
            <small>{product.currencyFormat}</small>
            <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
            <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
          </div>
          {productInstallment}
        </div>
        <div className="shelf-item__buy-btn">Add to cart</div>
      </div>
    );   
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
});

export default connect(
  mapStateToProps,
  { addProduct, updateCart }
)(Product);
