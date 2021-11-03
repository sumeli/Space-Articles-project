import './App.css';
import DataFetch from './DataFetch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './About'

function App() {
  return (
    <Router >
      <Switch>
        <div className="App">
          <Route exact path="/" component={DataFetch}/>
          <Route path="/article/:id" component={About}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
