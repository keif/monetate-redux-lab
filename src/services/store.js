import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import monetateConfig from "../../config/monetate.json";
import monetateTrackSDK from "monetate-track-sdk";

export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    const persist = {
      cart: state.cart,
      total: state.total
    };

    window.localStorage.setItem('state', JSON.stringify(persist));
  });

  const monetateAccountConfig = {
    domain: monetateConfig.domain,
    name: monetateConfig.name,
    instance: monetateConfig.instance,
    shortname: monetateConfig.shortname,
  };
  store.dispatch(monetateTrackSDK.monetateAccountActions.configureAccount(monetateAccountConfig));

  const monetateEngineRequestDataConfig = {
    monetateId: monetateConfig.monetateId,
  };
  store.dispatch(monetateTrackSDK.monetateEngineRequestDataActions.configureEngineRequestData(monetateEngineRequestDataConfig));

  return store;
};
