import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => (
<div >
    <div>
        <img src='https://c.wallhere.com/photos/b7/73/Makoto_Shinkai_5_Centimeters_Per_Second_field_clouds_landscape_artwork_anime_colorful-294387.jpg!d' />
    </div>
    <div>
        ava + discription
    </div>
   <MyPosts />
</div>
)

export default Profile;