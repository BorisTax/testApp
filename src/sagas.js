import fetch from 'node-fetch';
import { takeEvery, put, call } from "@redux-saga/core/effects";
import { FETCH_IMAGES, sendRequest, errorRequest, putImages } from "./actions";

export function* watchFetch(){
    yield takeEvery(FETCH_IMAGES, fetchImages);
}
function* fetchImages(action){
    try{
    yield put(sendRequest());
    const data=yield call(()=>fetch(
        `https://api.unsplash.com/photos?page=${action.payload.page}&client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`,
      )
        .then(res => {
          if (res.status === 200) return res.json();
          else throw new Error();
        })
    );
    yield put(putImages(filterData(data),action.payload.page));
    }catch(e){
        yield put(errorRequest());
    }
}
function filterData(fetchedData){
    const data = [];
    for (let item of fetchedData) {
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
    return data;
}