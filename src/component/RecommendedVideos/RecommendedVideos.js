import React from 'react'
import VideoCard from './VideoCard';
import './RecommendedVideos.css'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">


            {/* Links 
            Video 1 : https://i.ytimg.com/an_webp/pUxrDcITyjg/mqdefault_6s.webp?du=3000&sqp=CMCU2PoF&rs=AOn4CLCovdPToSdIKMBA1MHgdzQTYhhvyQ
            Video 2 : https://i.ytimg.com/an_webp/KCHck5LIhCc/mqdefault_6s.webp?du=3000&sqp=CNme2PoF&rs=AOn4CLAqjtj_EdO1WmAwAgkJVoEjSQcJuw
            Video 3 : https://i.ytimg.com/an_webp/KPdLFotQPlA/mqdefault_6s_480x270.webp?du=3000&sqp=CKCY2PoF&rs=AOn4CLB4KV0LDFvEH1SXww_iyLZza5KDWA
            Video 4 : https://i.ytimg.com/an_webp/tyMbktsAScE/mqdefault_6s.webp?du=3000&sqp=CImb2PoF&rs=AOn4CLA3f4LnsaWip5kdWJF077p9bFyn8w
            Video 5 : https://i.ytimg.com/an_webp/ntXj6EJgh0c/mqdefault_6s.webp?du=3000&sqp=CMSl2PoF&rs=AOn4CLBUcXfHY8MKfrPl-cRegUjqtlrucw
            Video 6 : https://i.ytimg.com/an_webp/JSm4aQl4w_U/mqdefault_6s.webp?du=3000&sqp=CLG02PoF&rs=AOn4CLDHPjkAYIuM2gWH6mT7HWTEK4xL0A
            Video 7 : https://i.ytimg.com/an_webp/KXDDL7bsBvE/mqdefault_6s.webp?du=3000&sqp=CImb2PoF&rs=AOn4CLAB8B_-frnnnInE29RdXnFW6zLBGA
            Video 8 : https://i.ytimg.com/an_webp/9xm4eOvnL6E/mqdefault_6s.webp?du=3000&sqp=CPm32PoF&rs=AOn4CLDk1IDwSLa2sBKGis8yK2wZl4wOpA

            Thumbnail Images Are not Align Properly
            Description should be change
            Icon of Youtube
            */}

            <div className="grid-container3">
                <div className="grid-item3">
                    <div className="active">All</div>
                    <div>JavaScript</div>
                    <div>Computer Science</div>
                    <div>Python</div>
                    <div>Computer Programming</div>
                    <div>C#</div>
                    <div>Choreography</div>
                    <div>Desks</div>
                    <div>Nvidia RTX</div>
                    <div>3D Modelling</div>
                    <div>Website</div>
                    <div>Computers</div>
                    <div>Linux</div>
                    <div>Elon Musk</div>
                    <div>Consumer Electronics</div>
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/pUxrDcITyjg/mqdefault_6s.webp?du=3000&sqp=CKD83foF&rs=AOn4CLCcuYayJaPo8C_Tt53tibYCVqyNDg" title="🔴 Let's build a WhatsApp Clone with REACT JS for Beginners!" views="136K views" timestamp="Streamed 2 weeks ago" channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo" channel="Clever Programmer" image="https://i.ytimg.com/vi/pUxrDcITyjg/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/KCHck5LIhCc/mqdefault_6s.webp?du=3000&sqp=CIGa3voF&rs=AOn4CLAFop_Sz7XbvwdZiZBmRKZaAAgMpQ" title="My Work From Home Productivity Setup" views="120K views" timestamp="2 months ago" channelImage="https://yt3.ggpht.com/a-/AOh14Gir5a-R___nDtCCM7DRRmEw5tahbOkaVafHfg=s68-c-k-c0x00ffffff-no-rj-mo" channel="Aral Tasher" image="https://i.ytimg.com/vi/KCHck5LIhCc/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/KPdLFotQPlA/mqdefault_6s.webp?du=3000&sqp=CLCE3voF&rs=AOn4CLC0y5ltH8ikxBnAIzJPwd4aRpZz-A" title="Jax Jones - You Don't Know Me ft RAYE - Choreography by Eden Shabtai" views="11M views" timestamp="3 years ago" channelImage="https://yt3.ggpht.com/a-/AOh14GgC_hi5UdMrYidczdDO8MdQkE6NV9DOXKkYzw=s68-c-k-c0x00ffffff-no-rj-mo" channel="Tim Milgram" image="https://i.ytimg.com/vi/KPdLFotQPlA/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/tyMbktsAScE/mqdefault_6s.webp?du=3000&sqp=CIj83foF&rs=AOn4CLD4U5YiF0tcNyRhNbUCufZTkKy5yQ" title="What were the final images NASA's Cassini ever took?" views="342K views" timestamp="2 months ago" channelImage="https://yt3.ggpht.com/a-/AOh14GgISZxez_fVqHc2DQZ0zcmcHaFFEnRzFKc6Ng=s68-c-k-c0x00ffffff-no-rj-mo" channel="Astrum" image="https://i.ytimg.com/vi/tyMbktsAScE/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/ntXj6EJgh0c/mqdefault_6s.webp?du=3000&sqp=COrv3foF&rs=AOn4CLA-mqr94by5h7J8k4iDFsdFWgQQPw" title="These are the MOST important things to know about 3070, 3080, 3090" views="365K views" timestamp="14 hours ago" channelImage="https://yt3.ggpht.com/a-/AOh14GiCnaLeTk1ppPfWCWkTDT0Dnf9RdQNTLoLuGQ=s68-c-k-c0x00ffffff-no-rj-mo" channel="JayzTwoCents" image="https://i.ytimg.com/vi/ntXj6EJgh0c/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/JSm4aQl4w_U/mqdefault_6s.webp?du=3000&sqp=COP13foF&rs=AOn4CLBSR75Tkivp4cUDbAL7GHOzXYtdcA" title="SEO for Developers | 2020 SEO Tutorial" views="13K views" timestamp="9 months ago" channelImage="https://yt3.ggpht.com/a-/AOh14GhsPMReHx0LFOV0t7dpA7IwtGf_rf6hErq6CA=s68-c-k-c0x00ffffff-no-rj-mo" channel="JavaScript Mastrey" image="https://i.ytimg.com/vi/JSm4aQl4w_U/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/KXDDL7bsBvE/mqdefault_6s.webp?du=3000&sqp=CIj83foF&rs=AOn4CLDBkTZGQB4kMme8IoVdiLULuppBKQ" title="Vocal Coach and Singer React to Arijit Singh's BEAUTIFUL Live Vocals" views="377K views" timestamp="2 weeks ago" channelImage="https://yt3.ggpht.com/a-/AOh14Gj3Hwur3OZiAcCjJ1svxhqDFwvVvJOo45u-Eg=s68-c-k-c0x00ffffff-no-rj-mo" channel="Justin Burke" image="https://i.ytimg.com/vi/KXDDL7bsBvE/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/9xm4eOvnL6E/mqdefault_6s.webp?du=3000&sqp=COqO3voF&rs=AOn4CLCOrlR9CGC8xqEDklzVump_uOA-eQ" title="How Nvidia Ampere RTX 3000 Series saved the PC Master Race" views="126K" timestamp="6 hours ago" channelImage="https://yt3.ggpht.com/a-/AOh14Gj21j8KDUANgc-l61f5EQ4qZNArddnP-N3D5A=s68-c-k-c0x00ffffff-no-rj-mo" channel="GameInVoid" image="https://i.ytimg.com/vi/9xm4eOvnL6E/maxresdefault.jpg" />
                </div>
            </div>
            <div className="grid-container2">
                <div className="grid-item2">
                    <hr />
                </div>
            </div>
            <div className="grid-container2">
                <div className="grid-item2">
                    <h3>Breaking news</h3>
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/pUxrDcITyjg/mqdefault_6s.webp?du=3000&sqp=CKD83foF&rs=AOn4CLCcuYayJaPo8C_Tt53tibYCVqyNDg" title="🔴 Let's build a WhatsApp Clone with REACT JS for Beginners!" views="136K views" timestamp="Streamed 2 weeks ago" channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo" channel="Clever Programmer" image="https://i.ytimg.com/vi/pUxrDcITyjg/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/KCHck5LIhCc/mqdefault_6s.webp?du=3000&sqp=CIGa3voF&rs=AOn4CLAFop_Sz7XbvwdZiZBmRKZaAAgMpQ" title="My Work From Home Productivity Setup" views="120K views" timestamp="2 months ago" channelImage="https://yt3.ggpht.com/a-/AOh14Gir5a-R___nDtCCM7DRRmEw5tahbOkaVafHfg=s68-c-k-c0x00ffffff-no-rj-mo" channel="Aral Tasher" image="https://i.ytimg.com/vi/KCHck5LIhCc/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/KPdLFotQPlA/mqdefault_6s.webp?du=3000&sqp=CLCE3voF&rs=AOn4CLC0y5ltH8ikxBnAIzJPwd4aRpZz-A" title="Jax Jones - You Don't Know Me ft RAYE - Choreography by Eden Shabtai" views="11M views" timestamp="3 years ago" channelImage="https://yt3.ggpht.com/a-/AOh14GgC_hi5UdMrYidczdDO8MdQkE6NV9DOXKkYzw=s68-c-k-c0x00ffffff-no-rj-mo" channel="Tim Milgram" image="https://i.ytimg.com/vi/KPdLFotQPlA/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/tyMbktsAScE/mqdefault_6s.webp?du=3000&sqp=CIj83foF&rs=AOn4CLD4U5YiF0tcNyRhNbUCufZTkKy5yQ" title="What were the final images NASA's Cassini ever took?" views="342K views" timestamp="2 months ago" channelImage="https://yt3.ggpht.com/a-/AOh14GgISZxez_fVqHc2DQZ0zcmcHaFFEnRzFKc6Ng=s68-c-k-c0x00ffffff-no-rj-mo" channel="Astrum" image="https://i.ytimg.com/vi/tyMbktsAScE/maxresdefault.jpg" />
                </div>
            </div>
            <div className="grid-container2">
                <div className="grid-item2 cen">
                    <button><ExpandMoreOutlinedIcon /></button>
                </div>
            </div>
            <div className="grid-container2">
                <div className="grid-item2 toppart">
                    <hr />
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/ntXj6EJgh0c/mqdefault_6s.webp?du=3000&sqp=COrv3foF&rs=AOn4CLA-mqr94by5h7J8k4iDFsdFWgQQPw" title="These are the MOST important things to know about 3070, 3080, 3090" views="365K views" timestamp="14 hours ago" channelImage="https://yt3.ggpht.com/a-/AOh14GiCnaLeTk1ppPfWCWkTDT0Dnf9RdQNTLoLuGQ=s68-c-k-c0x00ffffff-no-rj-mo" channel="JayzTwoCents" image="https://i.ytimg.com/vi/ntXj6EJgh0c/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/JSm4aQl4w_U/mqdefault_6s.webp?du=3000&sqp=COP13foF&rs=AOn4CLBSR75Tkivp4cUDbAL7GHOzXYtdcA" title="SEO for Developers | 2020 SEO Tutorial" views="13K views" timestamp="9 months ago" channelImage="https://yt3.ggpht.com/a-/AOh14GhsPMReHx0LFOV0t7dpA7IwtGf_rf6hErq6CA=s68-c-k-c0x00ffffff-no-rj-mo" channel="JavaScript Mastrey" image="https://i.ytimg.com/vi/JSm4aQl4w_U/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/KXDDL7bsBvE/mqdefault_6s.webp?du=3000&sqp=CIj83foF&rs=AOn4CLDBkTZGQB4kMme8IoVdiLULuppBKQ" title="Vocal Coach and Singer React to Arijit Singh's BEAUTIFUL Live Vocals" views="377K views" timestamp="2 weeks ago" channelImage="https://yt3.ggpht.com/a-/AOh14Gj3Hwur3OZiAcCjJ1svxhqDFwvVvJOo45u-Eg=s68-c-k-c0x00ffffff-no-rj-mo" channel="Justin Burke" image="https://i.ytimg.com/vi/KXDDL7bsBvE/maxresdefault.jpg" />
                </div>
                <div className="grid-item">
                    <VideoCard gifimage="https://i.ytimg.com/an_webp/9xm4eOvnL6E/mqdefault_6s.webp?du=3000&sqp=COqO3voF&rs=AOn4CLCOrlR9CGC8xqEDklzVump_uOA-eQ" title="How Nvidia Ampere RTX 3000 Series saved the PC Master Race" views="126K" timestamp="6 hours ago" channelImage="https://yt3.ggpht.com/a-/AOh14Gj21j8KDUANgc-l61f5EQ4qZNArddnP-N3D5A=s68-c-k-c0x00ffffff-no-rj-mo" channel="GameInVoid" image="https://i.ytimg.com/vi/9xm4eOvnL6E/maxresdefault.jpg" />
                </div>
            </div>
        </div>
    )
}

export default RecommendedVideos