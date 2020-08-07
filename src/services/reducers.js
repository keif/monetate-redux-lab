import { monetateReduceReducers, monetateReducers } from 'monetate-state-store-integration-sdk';
import { combineReducers } from 'redux';
import heroReducer from './hero/reducer';
import cartReducer from './cart/reducer';
import filtersReducer from './filters/reducer';
import shelfReducer from './shelf/reducer';
import sortReducer from './sort/reducer';
import totalReducer from './total/reducer';

export default monetateReduceReducers(combineReducers({
  ...monetateReducers,
  cart: cartReducer,
  filters: filtersReducer,
  hero: heroReducer,
  shelf: shelfReducer,
  sort: sortReducer,
  total: totalReducer
}));
