import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Creat from './components/Creat'
import Edit from './components/Edit'
import List from './components/List'
import Home from './components/Home'

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className='navbar-brand'>CRUD</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li>
                  <Link to={'/'} className='nav-link'>Home</Link>
                </li>
                <li>
                  <Link to={'/creat'} className='nav-link'>Create</Link>
                </li>
                <li>
                  <Link to={'/list'} className='nav-link'>List</Link>
                </li>
              </ul>
            </div>
          </nav>

          <h2>Projeto CRUD</h2> <br />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/creat' component={Creat} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/list' component={List} />
          </Switch>
        </div>
      </Router>
    )
  }
}