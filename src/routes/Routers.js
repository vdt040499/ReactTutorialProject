import React from 'react'
import {
    Route
  } from "react-router-dom";

import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Detail from '../pages/Detail'

export default function Routers() {
    return(
        <div>
            <Route path="/" exact component={Home}/>
            <Route path="/about/" exact component={About}/>
            <Route path="/projects/" exact component={Projects}/>
            <Route path="/contact/" exact component={Contact}/>
            <Route path="/article/:slug.:id.html" exact component={Detail}/>
        </div>
    );
}