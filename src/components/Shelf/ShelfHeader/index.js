import PropTypes from 'prop-types';
import React from 'react';

import Sort from '../Sort';

const ShelfHeader = props => (
  <div className="shelf-container-header">
    <small className="products-found">
      <span>{props.productsLength} Product(s) found.</span>
    </small>
    <Sort/>
  </div>
);

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default ShelfHeader;
