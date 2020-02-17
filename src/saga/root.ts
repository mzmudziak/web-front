import { all } from 'redux-saga/effects';
import { getPostsSaga } from './posts.saga';

export default function* rootSaga() {
  yield all([
    getPostsSaga
  ]);
}
