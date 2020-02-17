export interface Post {
    _id: string
    title: string,
    author: string,
    created_time: Date,
    content: string,
    imageUrl: string
}

export type FeedState = Readonly<{
    posts: Post[]
}>;

export const ADD_POST_COMPLETED = 'ADD_POST';
export const GET_POSTS_COMPLETED = 'GET_POSTS_COMPLETED';
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED';
export const GET_POSTS = 'GET_POSTS';

interface GetPostsAction {
    type: typeof GET_POSTS
}

interface SendMessageAction {
    type: typeof ADD_POST_COMPLETED
    payload: Post
}

interface GetPostsCompletedAction {
    type: typeof GET_POSTS_COMPLETED
    payload: Post[]
}

interface GetPostsFailedAction {
    type: typeof GET_POSTS_FAILED
    payload: string
}

export type PostActionTypes =
    GetPostsAction
    | SendMessageAction
    | GetPostsCompletedAction
    | GetPostsFailedAction

