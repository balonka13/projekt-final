import React from 'react';
import './App.css';
import Header from './conponents/Header/Header';
import Navbar from "./conponents/Nav/Nav";
import MyPosts from "./conponents/Profile/MyPosts/MyPosts";
import Profile from "./conponents/Profile/Profile";
import Dialogs from "./conponents/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./conponents/News/News";
import Music from "./conponents/Music/Music";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path ='/news' component={News}/>
                    <Route path='music' component={Music}/>

                </div>
            </div>
        </BrowserRouter>);

}


export default App;
