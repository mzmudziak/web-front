import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "./store";
import {Dispatch} from "redux";
import {addPost, getPosts} from "./store/actions";
import PostComponent from "./Post";


const mapStateToProps = (state: RootState) => ({
    posts: state.feed.posts
});

const mapDispatch = (dispatch: Dispatch) => {
    return ({
        addPost,
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
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={() => props.getPosts()}>
                    Add Post
                </button>
                {
                    props.posts.map(post => <PostComponent post={post} />)
                }
            </header>
        </div>
    );
};

export default connector(App)
