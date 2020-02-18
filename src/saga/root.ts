import {all} from 'redux-saga/effects';
import {addPostSaga, getPostsSaga} from './posts.saga';

export default function* rootSaga() {
  yield all([
    getPostsSaga,
    addPostSaga
  ]);
}
