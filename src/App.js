import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Nomatch from './Components/NoMatch/Nomatch';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import AddService from './Components/Admin/AdminPages/AddService/AddService';


function App() {
  return (
    <Router>
     <Switch>
       <Route  exact path="/">
         <Home></Home>
       </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
              <Route path="/register">
               <Register></Register>
              </Route>
                 <Route path="/service">
                   <AddService></AddService>
                 </Route>
             <Route path="*">
               <Nomatch></Nomatch>
             </Route>
    </Switch>
  </Router>
  );
}

export default App;
