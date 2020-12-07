import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route path='/about' render={(props) => <About {...props} /> }/>
      </Switch>

      </header>
    </div>
    </Router>
  );
}

export default App;
