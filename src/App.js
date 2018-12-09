import React, {
  Component
} from 'react';
import './App.css';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-128458639-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return null
  }
}

export default App;