import {feedReducer} from './reducers'
import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    feed: feedReducer
});


export type RootState = ReturnType<typeof rootReducer>
