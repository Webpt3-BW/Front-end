import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Team from './Pages/Team';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Route exact path ="/" component={Landing}/>
      <Route path ="/Team" component={Team}/>
      <Route path ="/Login" component={Login}/>
      <Route path ="/Register" component={Register}/>
      <Route path ="/Dashboard" component={Dashboard}/>
    </div>
  );
}

export default App;
