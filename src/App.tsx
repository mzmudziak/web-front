import React from 'react';
import './App.css';
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "./store";
import {Dispatch} from "redux";
import {addPost, getPosts} from "./store/actions";
import PostComponent from "./Post";
import {Post} from "./store/types";
// @ts-ignore
import faker from "faker";


const mapStateToProps = (state: RootState) => ({
    posts: state.feed.posts
});

const mapDispatch = (dispatch: Dispatch) => {
    return ({
        getPosts: () => dispatch(getPosts()),
        addPost: (post: Post) => dispatch(addPost(post))
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
                <br/>
                <button onClick={() => props.getPosts()}>
                    Get Posts
                </button>
                <br/>

                <button onClick={() => props.addPost({ title: faker.lorem.words(), author: faker.internet.userName(), content: faker.lorem.sentences() })}>
                    Add a random Post
                </button>
                {
                    props.posts.map(post => <PostComponent post={post} />)
                }
            </header>
        </div>
    );
};

export default connector(App)
