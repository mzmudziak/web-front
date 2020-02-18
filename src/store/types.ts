import { Action } from 'redux';

export interface Post {
    _id?: string
    title: string,
    author: string,
    created_time?: Date,
    content: string,
    imageUrl?: string
}

export type FeedState = Readonly<{
    posts: Post[]
}>;

export const ADD_POST = 'ADD_POST';
export const ADD_POST_COMPLETED = 'ADD_POST_COMPLETED';
export const ADD_POST_FAILED = 'ADD_POST_FAILED';
export const GET_POSTS_COMPLETED = 'GET_POSTS_COMPLETED';
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED';
export const GET_POSTS = 'GET_POSTS';

export interface AppAction extends Action {
    payload?: any;
}

interface GetPostsAction {
    type: typeof GET_POSTS
}

interface GetPostsCompletedAction {
    type: typeof GET_POSTS_COMPLETED
    payload: Post[]
}

interface GetPostsFailedAction {
    type: typeof GET_POSTS_FAILED
    payload: string
}

interface AddPostAction {
    type: typeof ADD_POST
    payload: Post
}

interface AddPostCompletedAction {
    type: typeof ADD_POST_COMPLETED
    payload: Post
}

interface AddPostFailedAction {
    type: typeof ADD_POST_FAILED
    payload: string
}

export type PostActionTypes =
    GetPostsAction
    | GetPostsCompletedAction
    | GetPostsFailedAction
    | AddPostAction
    | AddPostCompletedAction
    | AddPostFailedAction


