import React, {
  Component
} from 'react';
import './App.css';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <LoginPage />
        <SignupPage />
      </div>
    );
  }
}

export default App;