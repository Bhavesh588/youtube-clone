import React from 'react'
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined';
import PlaylistPlay from '@material-ui/icons/PlaylistPlay';
import './Sidebar.css'
import $ from 'jquery';

$(document).ready(function(){
    $(".showmore").click(function(){
        let display = $(".sidebar__more").css("display");
        if(display === "none") {
            $(".sidebar__more").css("display", "inline");
            $(".showless").css("display", "inline");
            $(".showmore").css("display", "none");
        }
    });
    $(".showless").click(function(){
        let display = $(".sidebar__more").css("display");
        if(display === "inline") {
            $(".sidebar__more").css("display", "none");
            $(".showless").css("display", "none");
            $(".showmore").css("display", "inline");
        }
    });

    // Sidebar Should stick when scroll

    // $(function() {

    //     var $sidebar   = $(".sidebar"), 
    //         $window    = $(window),
    //         offset     = $sidebar.offset(),
    //         topPadding = 5;
    
    //     $window.scroll(function() {
    //         if ($window.scrollTop() > offset.top) {
    //             $sidebar.stop()
    //         } else {
    //             $sidebar.stop().animate({
    //                 marginTop: 0
    //             });
    //         }
    //     });
        
    // });
});


function Sidebar() {
    return (
        <div className="side">
            <div className="sidebar">
                <div className="sidebar__inside"></div>
                <SidebarRow Icon={HomeIcon} title="Home" selected />
                <SidebarRow Icon={WhatshotIcon} title="Trending" />
                <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
                <hr/>
                <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
                <SidebarRow Icon={HistoryIcon} title="History" />
                <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
                <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
                <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
                <div className="sidebar__more">
                    <SidebarRow Icon={PlaylistPlay} title="Android Studio Tutorials" wrap />
                    <SidebarRow Icon={PlaylistPlay} title="React Beginner Tutorials" wrap />
                    <SidebarRow Icon={PlaylistPlay} title="C# Course Tutorials" wrap />
                </div>
                <button className="showmore">
                    <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
                </button>
                <button className="showless">
                    <SidebarRow Icon={ExpandLessOutlinedIcon} title="Show less" />
                </button>
                <hr/>
            </div>
            <div className="sidebar__small">
                <div className="sidebar__inside"></div>
                <SidebarRow Icon={HomeIcon} title="Home" selected />
                <SidebarRow Icon={WhatshotIcon} title="Trending" />
                <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
                <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            </div>
        </div>
    )
}

export default Sidebar
