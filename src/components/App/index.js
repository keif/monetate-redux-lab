import { monetateEngineRequestDataActions, MonetateEventTypes, monetateTrack } from 'monetate-state-store-integration-sdk';
import React from 'react';

import { connect } from 'react-redux';
import FloatCart from '../FloatCart';
import Hero from '../Hero';
import Lightbox from '../Lightbox';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import './App.scss';

const monetateId = '5.1745556563.1566310956835';
const monetateEngineRequestDataConfig = {
  monetateId: monetateId
};

@monetateTrack([
  { type: MonetateEventTypes.ContextUserAgent, data: { userAgent: window.navigator.userAgent } },
  { type: MonetateEventTypes.ContextScreenSize, data: { width: window.screen.width, height: window.screen.height } }
])
class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(monetateEngineRequestDataActions.configureEngineRequestData(monetateEngineRequestDataConfig));
  }

  render() {
    return (
      <>
        <Lightbox/>
        <header>
          <img
            alt={`Punk Hand Store`}
            src={require(`../../static/logo.png`)}
          />
        </header>
        <Hero/>
        <main>
          <Filter/>
          <Shelf/>
        </main>
        <FloatCart/>
      </>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(App);
