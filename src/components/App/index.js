import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';

import { connect } from "react-redux";
import monetateStateStoreIntegrationSDK from "monetate-state-store-integration-sdk";
const { monetateTrack, MonetateEventTypes } = monetateStateStoreIntegrationSDK;

@monetateTrack([
  { type: MonetateEventTypes.ContextUserAgent, data: { userAgent: window.navigator.userAgent } },
  { type: MonetateEventTypes.ContextScreenSize, data: { width: window.screen.width, height: window.screen.height } },
])
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Filter />
          <Shelf />
        </main>
        <FloatCart />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(App);
