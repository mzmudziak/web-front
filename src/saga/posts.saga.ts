import {call, put, takeEvery} from 'redux-saga/effects';
import client from "../api/client";
import {addPostCompleted, addPostFailed, getPostsCompleted, getPostsFailed} from "../store/actions";
import {ADD_POST, AppAction, GET_POSTS, Post} from "../store/types";

export const doGetPosts = async () => (await client).apis.default.getPosts();
export const doAddPost = async (post: Post) => (await client).apis.default.add({post}, {requestBody: {post: {}}});

export function* getPosts() {
    try {
        const {data} = yield call(doGetPosts);
        yield put(getPostsCompleted(JSON.parse(data)));
    } catch ({message}) {
        yield put(getPostsFailed(message));
    }
}


export function* addPost(action: AppAction) {
    try {
        const {body} = yield call(doAddPost, action.payload);
        yield put(addPostCompleted(body));
    } catch ({message}) {
        yield put(addPostFailed(message));
    }
}

export const getPostsSaga = takeEvery(GET_POSTS, getPosts);
export const addPostSaga = takeEvery(ADD_POST, addPost);
