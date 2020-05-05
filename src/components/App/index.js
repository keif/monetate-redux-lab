import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';

import { connect } from "react-redux";
import monetateStateStoreIntegrationSDK from "monetate-state-store-integration-sdk";
const { monetateTrack, MonetateEventTypes, monetateEngineRequestDataActions } = monetateStateStoreIntegrationSDK;

const monetateId = "5.1745556563.1566310956835";
const monetateEngineRequestDataConfig = {
  monetateId: monetateId,
};

@monetateTrack([
  { type: MonetateEventTypes.ContextUserAgent, data: { userAgent: window.navigator.userAgent } },
  { type: MonetateEventTypes.ContextScreenSize, data: { width: window.screen.width, height: window.screen.height } },
])
class App extends React.Component {
  componentDidMount() {
     // logged in userid available when app is mounted, passing mock monetate id.
    const { dispatch } = this.props
    dispatch(monetateEngineRequestDataActions.configureEngineRequestData(monetateEngineRequestDataConfig));
  }

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