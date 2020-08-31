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
            <Link to={'/'} className='navbar-brand'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cup-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z" />
            </svg></Link>
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