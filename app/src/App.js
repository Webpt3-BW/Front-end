import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './Utilities/PrivateRoute'
import Landing from './Pages/Landing';
import Team from './Pages/Team';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Route exact path ="/" component={Landing}/>
      <Route path ="/Team" component={Team}/>
      <Route path ="/Login" component={Login}/>
      <Route path ="/Register" component={Register}/>
      <PrivateRoute path ="/Dashboard" component={Dashboard}/>
    </Router>
  );
}

export default App;
