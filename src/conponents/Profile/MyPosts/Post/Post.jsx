import React, { Component } from 'react';
import s from './Post.module.css';

const Post = (props) => (

        <div className={s.item}>
            <img src='https://i.pinimg.com/736x/87/af/ef/87afef76100d0b704ca5b6039468a736.jpg'/>
            { props.message }
            <div>
                <span>Like</span>
            </div>
            <div>
                {props.like}
            </div>
        </div>
)

export default Post;