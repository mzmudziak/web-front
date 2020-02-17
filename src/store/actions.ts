import {ADD_POST_COMPLETED, GET_POSTS, GET_POSTS_COMPLETED, GET_POSTS_FAILED, Post, PostActionTypes} from './types'

export function addPost(newPost: Post): PostActionTypes {
    return {
        type: ADD_POST_COMPLETED,
        payload: newPost
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
