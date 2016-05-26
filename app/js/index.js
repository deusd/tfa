
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './pages/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PlaceSearch from './pages/PlaceSearch'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact_us" component={Contact} />
      <Route path="/search" component={PlaceSearch} />
    </Route>
  </Router>
), document.getElementById('app'));