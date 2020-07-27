import { combineReducers } from 'redux';
import shelfReducer from './shelf/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';
import filtersReducer from './filters/reducer';
import sortReducer from './sort/reducer';
import { monetateReducers, monetateReduceReducers }  from "monetate-state-store-integration-sdk";

export default monetateReduceReducers(combineReducers({
  ...monetateReducers,
  shelf: shelfReducer,
  cart: cartReducer,
  total: totalReducer,
  filters: filtersReducer,
  sort: sortReducer
}));
