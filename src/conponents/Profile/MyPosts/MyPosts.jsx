import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => (
<div>
    <div >
        My posts
        <div>
            Mew post
        </div >
       <Post like='9' message ='Hi,how ar you' />
        <Post like='12' message ="It's my first post" />
    </div>
</div>
)

export default MyPosts;