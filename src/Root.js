import React from 'react';
import { Provider } from 'react-redux';
import { monetateLoadBuilder } from "monetate-state-store-integration-sdk";

import store from './services/store';

const combinedStore = store();
monetateLoadBuilder(combinedStore, "#monetate-root", "#root");

const Root = ({ children }) => (
  <Provider store={combinedStore}>{children}</Provider>
);

export default Root;
