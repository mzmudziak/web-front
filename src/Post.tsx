import {Post} from "./store/types";
import React from "react";

type Props = {
    post: Post
}

const PostComponent = ({post}: Props) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <div>{post.content}</div>
            <p>{post.author} - {post.created_time}</p>
            <br/>
        </div>
    );
};

export default PostComponent;
