import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Overview from './Overview'

const App = () => (
  <div id='root-container'>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/overview" component={Overview} />
  </div>
)

export default App
