import React, {
  Component
} from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';

import Navigation from './components/Navigation';

class App extends Component {
  
  render() {
    const{ match, location, history} =this.props;
    return (
      <div>
        <Navigation />
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <button onClick={()=> history.push('/login')}>Go!</button>

      </div>
    );
  }
}

export default withRouter(App);