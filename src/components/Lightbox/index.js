import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { updateLightbox } from '../../services/lightbox/actions';

Modal.setAppElement('#root')
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,69%)';

const customStyles = {
  content : {
    top                   : '10%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, 0%)'
  }
};

class Lightbox extends Component {
  static propTypes = {
    html: PropTypes.string,
    updateLightbox: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      html: ``,
      showModal: false,
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.props.updateLightbox(this.state.html);
  }

  handleCloseModal = () => {
    this.props.updateLightbox(null)
  }

  render(props) {
    if (this.props.html) {
      return (
        <Modal
          isOpen={!!this.props.html}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
        >
          <div className={`lightbox`} dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </Modal>
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  html: state.lightbox.html
});

export default connect(mapStateToProps, { updateLightbox })(Lightbox);
