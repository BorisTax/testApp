import fetch from 'node-fetch';
export const FETCH_IMAGES = 'FETCH_IMAGES';
export const PUT_IMAGES = 'PUT_IMAGES';
export const ERROR = 'ERROR';
export const fetchImages = page => {
  return dispatch => {
    fetch(
      `https://api.unsplash.com/photos?page=${page}&client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`,
    )
      .then(res => {
        if (res.status === 200) return res.json();
        else throw new Error();
      })
      .then(res => {
        const data = [];
        for (let item of res) {
          let description =
            ('' + item.description).length < '' + item.alt_description
              ? item.description
              : item.alt_description;
          if (!item.description || !item.alt_description) description = item.description || item.alt_description;
          data.push({
            title: description,
            author: item.user.name,
            urlMiniImage: item.urls.small,
            urlMaxImage: item.urls.regular,
          });
        }
        dispatch({type: PUT_IMAGES, payload: {data, page}});
      })
      .catch((e) => {dispatch({type: ERROR})});
    dispatch({type: FETCH_IMAGES});
  };
};
