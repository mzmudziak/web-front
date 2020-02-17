import React from 'react';
import './App.css';
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "./store";
import {Dispatch} from "redux";
import {getPosts} from "./store/actions";
import PostComponent from "./Post";


const mapStateToProps = (state: RootState) => ({
    posts: state.feed.posts
});

const mapDispatch = (dispatch: Dispatch) => {
    return ({
        getPosts: () => dispatch(getPosts())
    });
};

const connector = connect(
    mapStateToProps,
    mapDispatch
);

type Props = ConnectedProps<typeof connector>

const App = (props: Props) => {
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => props.getPosts()}>
                    Get Posts
                </button>
                {
                    props.posts.map(post => <PostComponent post={post} />)
                }
            </header>
        </div>
    );
};

export default connector(App)
