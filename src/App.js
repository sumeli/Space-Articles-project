import './App.css';
import DataFetch from './DataFetch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './About'
import Article from './Article';

function App() {
  return (
    <Router >
      <Switch>
        <div className="App">
          <Route exact path="/" component={DataFetch}/>
          <Route path="/about" component={About} />
          <Route path="/article" exact component={Article}/>
          <Route path="/article/:id" component={About}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
