import {
    ADD_POST,
    ADD_POST_COMPLETED,
    ADD_POST_FAILED,
    GET_POSTS,
    GET_POSTS_COMPLETED,
    GET_POSTS_FAILED,
    Post,
    PostActionTypes
} from './types'

export function addPost(post: Post): PostActionTypes {
    return {
        type: ADD_POST,
        payload: post
    }
}

export function getPosts(): PostActionTypes {
    return {
        type: GET_POSTS,
    }
}

export function getPostsCompleted(posts: Post[]): PostActionTypes {
    return {
        type: GET_POSTS_COMPLETED,
        payload: posts
    }
}

export function getPostsFailed(message: string): PostActionTypes {
    return {
        type: GET_POSTS_FAILED,
        payload: message
    }
}


export function addPostCompleted(post: Post): PostActionTypes {
    return {
        type: ADD_POST_COMPLETED,
        payload: post
    }
}

export function addPostFailed(message: string): PostActionTypes {
    return {
        type: ADD_POST_FAILED,
        payload: message
    }
}
