import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Photos from "./components/Photos/Photos";
import Album from "./components/Album/Album";

const App = () => {
    return (
      <Router >
          <Header/>
          <div className="container main">
          <Switch>
            <Route exact={true}  path="/album/:albumId">
               <Album/>
            </Route>
            <Route exact={true} path="/photos/:photoId">
               <Photos />
            </Route>
            <Route exact={true}  path="/">
               <Home albumId={null}/>
            </Route>
            <Route path="/">
                <div className="notFound">
                    <h1>404</h1>
                    <p>not found</p>
                </div>
            </Route>
          </Switch>
          </div>
      </Router>
  )
}

export default App;
