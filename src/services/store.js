import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import monetateConfig from "../../config/monetate.json";
import  {monetateAccountActions } from "monetate-state-store-integration-sdk";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export default () => {
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );

  const monetateAccountConfig = {
    domain: monetateConfig.domain,
    name: monetateConfig.name,
    instance: monetateConfig.instance,
    shortname: monetateConfig.shortname,
    restrictedStates: monetateConfig.restrictedStates
  };
  store.dispatch(monetateAccountActions.configureAccount(monetateAccountConfig));

  return store;
};
