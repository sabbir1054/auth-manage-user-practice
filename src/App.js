import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';


function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Register></Register>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
