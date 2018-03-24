import React, {
  Component
} from 'react';
import './App.css';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <HomePage />
        <LoginPage />
        <SignupPage />
      </div>
    );
  }
}

export default App;