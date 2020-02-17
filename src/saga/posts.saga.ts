import {call, put, takeEvery} from 'redux-saga/effects';
import client from "../api/client";
import {getPostsCompleted, getPostsFailed} from "../store/actions";
import {GET_POSTS} from "../store/types";

export const doGetPosts = async () => (await client).apis.default.getPosts();

export function* getPosts() {
    try {
        const {data} = yield call(doGetPosts);
        yield put(getPostsCompleted(JSON.parse(data)));
    } catch ({message}) {
        yield put(getPostsFailed(message));
    }
}

export const getPostsSaga = takeEvery(GET_POSTS, getPosts);
