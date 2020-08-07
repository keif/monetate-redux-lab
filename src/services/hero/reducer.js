import { UPDATE_IMAGE } from './actionTypes';

const initialState = {
  image: ``
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    default:
      return state;
  }
}
