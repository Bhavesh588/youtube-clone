import React, { useEffect, useState } from 'react';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import RecommendedVideos from './component/RecommendedVideos/RecommendedVideos';
import SearchPage from './component/SearchPage/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import AddIcon from '@material-ui/icons/Add';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import './App.css';
// import ReactGa from 'react-ga';


function App() { 
  var [mobile, setMobile] = useState(false)

  useEffect(() => {
    // ReactGa.initialize('UA-161261812-3')
    // ReactGa.pageview('/')
    if(navigator.userAgent.match(/Moto/i)) {
      setMobile(true)
    }
  }, [mobile])

  return (

    // BEM class naming convention
    <div className="app">
      <Router>
        {/* Header */}
        <Header mobile={mobile} />

        <Switch>

          <Route path="/search/:searchTerm">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* Search Page */}
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/*  Recommended Video */}
              <RecommendedVideos />
            </div>
          </Route>

        </Switch>

      </Router>

      <div className="footermobile">
        <div className="footer__content active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="footer__content">
          <ExploreIcon />
          <p>Explore</p>
        </div>
        <div className="footer__content">
          <div className="footer__addcircle">
            <AddIcon />
          </div>
        </div>
        <div className="footer__content">
          <SubscriptionsIcon />
          <p>Subscriptions</p>
        </div>
        <div className="footer__content">
          <LibraryAddCheckIcon />
          <p>Library</p>
        </div>
      </div>
      

    </div>
  );
}

export default App;
