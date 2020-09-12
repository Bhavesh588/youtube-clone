import React from 'react';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import RecommendedVideos from './component/RecommendedVideos/RecommendedVideos';
import SearchPage from './component/SearchPage/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {  
  return (
    // BEM class naming convention
    <div className="app">
      <Router>
        {/* Header */}
        <Header />

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


    </div>
  );
}

export default App;
