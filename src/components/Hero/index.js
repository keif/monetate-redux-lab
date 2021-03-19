import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateImage } from '../../services/hero/actions';
import './Hero.scss';

class Hero extends Component {
  static propTypes = {
    image: PropTypes.string,
    updateImage: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      image: require(`../../static/hero.jpeg`),
      isMouseOver: false
    };
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.props.updateImage(this.state.image);
  }

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut() {
    this.setState({ isMouseOver: false });
  };

  render(props) {
    const classes = [`hero`];

    if (!!this.state.isMouseOver) {
      classes.push(`hero--mouseover`);
    }

    return (
      <div className={classes.join(' ')}>
        <img
          alt={`Summer Steals`}
          src={this.props.image}
        />
      </div>
    );
  }
}

// export default connect()(Hero);

const mapStateToProps = state => ({
    image: state.hero.image
});



export default connect(
  mapStateToProps,
  { updateImage }
)(Hero);
