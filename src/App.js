import React, {
  Component
} from 'react';
import './App.css';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <LoginPage />
        
      </div>
    );
  }
}

export default App;