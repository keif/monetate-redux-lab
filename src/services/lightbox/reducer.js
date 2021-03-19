import { UPDATE_LIGHTBOX } from './actionTypes';

const initialState = {
  html: ``
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LIGHTBOX:
      return {
        ...state,
        html: action.payload
      };
    default:
      return state;
  }
}
