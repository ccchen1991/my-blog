import React, { Component } from 'react';
import { Switch, Route, NavLink, BrowserRouter } from 'react-router-dom';
import AboutMe from './components/aboutMe';
import Blog from './containers/blogContainer';
import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className='appHeader'>
          <h1>My Blog</h1>
          <ul className='appMenu'>
            <li><NavLink exact to='/'>Blog</NavLink></li>
            <li><NavLink to='/AboutMe'>About Me</NavLink></li>
          </ul>
          </div>
          <div className='appContent'>
            <Switch>
              <Route exact path='/' component={Blog} />
              <Route path='/AboutMe' component={AboutMe} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
