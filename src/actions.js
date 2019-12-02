export const FETCH_IMAGES = 'FETCH_IMAGES';
export const REQUEST_SENDING = 'REQUEST_SENDING';
export const PUT_IMAGES = 'PUT_IMAGES';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const fetchImages=(page)=>({
  type:FETCH_IMAGES,
  payload:{page}
});
export const sendRequest=()=>({
  type:REQUEST_SENDING
});
export const putImages=(data, page)=>({
  type:PUT_IMAGES,
  payload: {data, page}
});
export const errorRequest=()=>({
  type:REQUEST_ERROR
});
