import {PUT_IMAGES, ERROR, FETCH_IMAGES} from './actions';
const initialState = {images: [], page: 1, fetching: false};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_IMAGES:
      const newState = Object.assign({}, state);
      newState.images.pop();
      for(let i of action.payload.data) newState.images.push(i);
      newState.images.push({});
      return {...newState,  page: action.payload.page, fetching: false};
    case FETCH_IMAGES:
      return {...state, fetching: true};
    case ERROR:
      return {...state};
    default:
      return state;
  }
};
