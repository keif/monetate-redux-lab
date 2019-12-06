import React from 'react';
import { Provider } from 'react-redux';
import monetateStateStoreIntegrationSDK from "monetate-state-store-integration-sdk";

import store from './services/store';

monetateStateStoreIntegrationSDK.monetateLoadBuilder(store().getState(), () => {}, "#monetate-root", "#root");

const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);

export default Root;
