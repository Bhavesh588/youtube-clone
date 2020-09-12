import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                channel="Clever Programmer"
                verified
                subs="697K"
                noOfVideos={382}
                description="You can find awasome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level"
            />

            <hr />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Lets Build a YouTube Clone with REACT JS for Beginners"
                image="https://static.toiimg.com/photo/75256648.cms"
            />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Lets Build a YouTube Clone with REACT JS for Beginners"
                image="https://static.toiimg.com/photo/75256648.cms"
            />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Lets Build a YouTube Clone with REACT JS for Beginners"
                image="https://static.toiimg.com/photo/75256648.cms"
            />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Lets Build a YouTube Clone with REACT JS for Beginners"
                image="https://static.toiimg.com/photo/75256648.cms"
            />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Lets Build a YouTube Clone with REACT JS for Beginners"
                image="https://static.toiimg.com/photo/75256648.cms"
            />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Lets Build a YouTube Clone with REACT JS for Beginners"
                image="https://static.toiimg.com/photo/75256648.cms"
            />

        </div>
    )
}

export default SearchPage