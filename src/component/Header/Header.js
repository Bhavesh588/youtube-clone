import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from 'react-router-dom';
import $ from 'jquery';

// On click the ManuIcon Button
$(document).ready(function(){
    $(".menubtn").click(function(){
        let display = $(".sidebar").css("display");
        if(display === "inline") {
            $(".sidebar").css("display", "none");
            $(".sidebar__small").css({"display": "block", "margin-top": "5px"});
            $(".sidebarRow").css({"flex-direction": "column", "color": "gray", "padding": "15px 5px"});
            $(".sidebarRow__title").css({"margin-left": "0", "margin-top": "10px", "font-size": "10px", "font-weight": "400"});
            $(".side").css({"flex": "0.02"});
            $(".recommendedVideos").css({"flex": "0.98"});
            $(".grid-container").css({"grid-template-columns": "20% 20% 20% 20% 20%", "padding": "0"});
        } else {
            $(".sidebar").css("display", "inline");
            $(".sidebar__small").css("display", "none");
            $(".sidebarRow").css({"flex-direction": "row", "padding": "10px 28px", "color": "white"});
            $(".sidebarRow__title").css({"margin-left": "23px", "margin-top": "0px", "font-size": "13px", "font-weight": "550"});
            $(".side").css({"flex": "0.13"});
            $(".recommendedVideos").css({"flex": "0.87"});
            $(".grid-container").css({"grid-template-columns": "25% 25% 25% 25%", "padding": "0px 20px"});
        }
    });
});

function menu(x) {
    if (x.matches) {
        $(".sidebar").css("display", "none");
        $(".sidebar__small").css({"display": "block", "margin-top": "5px"});
        $(".sidebarRow").css({"flex-direction": "column", "color": "gray", "padding": "15px 5px"});
        $(".sidebarRow__title").css({"margin-left": "0", "margin-top": "10px", "font-size": "10px", "font-weight": "400"});
        $(".side").css({"flex": "0.05"});
        $(".recommendedVideos").css({"flex": "0.95"});
        $(".grid-container").css({"grid-template-columns": "25% 25% 25% 25%", "padding": "0", "grid-auto-columns": "4fr"});
    } else {
        $(".sidebar").css("display", "inline");
        $(".sidebar__small").css("display", "none");
        $(".sidebarRow").css({"flex-direction": "row", "padding": "10px 28px", "color": "white"});
        $(".sidebarRow__title").css({"margin-left": "23px", "margin-top": "0px", "font-size": "13px", "font-weight": "550"});
        $(".side").css({"flex": "0.13"});
        $(".recommendedVideos").css({"flex": "0.87"});
        $(".grid-container").css({"grid-template-columns": "25% 25% 25% 25%", "padding": "0px 20px", "grid-auto-columns": "4fr"});
    }
}
var x = window.matchMedia("(max-width: 1325px)")
menu(x)
x.addListener(menu)

function Header() {

    const [inputSearch, setInputSearch] = useState('');
    
    return (
        <div className="header">
            <div className="header__left">
                <button className="menubtn"><MenuIcon /></button>
                <div className="header__link">
                    <Link to="/" className="header__mainlogo">
                        <YouTubeIcon className="header__logo" style={{ fontSize: 30 }} />
                        <h4 className="header__youtitle">YouTube</h4><sup className="header__sup">IN</sup>
                    </Link>
                </div>
            </div>

            <div className="header__input">
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`} className="header__inputButton">
                    <SearchIcon style={{ fontSize: 20 }} />
                </Link>
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Bhavesh" src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
            </div>
        </div>
    )
}

export default Header
