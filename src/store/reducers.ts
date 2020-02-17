import {ADD_POST_COMPLETED, FeedState, GET_POSTS_COMPLETED, PostActionTypes} from './types'

const initialState: FeedState = {
    posts: []
};

export function feedReducer(
    state = initialState,
    action: PostActionTypes
): FeedState {
    switch (action.type) {
        case GET_POSTS_COMPLETED:
            return {
                posts: action.payload
            };
        case ADD_POST_COMPLETED:
            return {
                posts: [...state.posts, action.payload]
            };
        default:
            return state
    }
}
