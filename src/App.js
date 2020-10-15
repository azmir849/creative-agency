import React, { createContext, useState } from 'react';
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
import ClientOrderReview from './Components/Client/ClientPages/ClientOrderReview/ClientOrderReview';
import ClientOrder from './Components/Client/ClientPages/ClientOrder/ClientOrder';
import ServiceList from './Components/Admin/AdminPages/ServiceList/ServiceList';
import ClientOrderServiceList from './Components/Client/ClientPages/ClientOrderServiceList/ClientOrderServiceList';
import MakeAdmin from './Components/Admin/AdminPages/MakeAdmin/MakeAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
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

          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path="/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <PrivateRoute path="/order">
            <ClientOrder></ClientOrder>
          </PrivateRoute>

          <PrivateRoute path="/orderList">
            <ClientOrderServiceList></ClientOrderServiceList>
          </PrivateRoute>

          <PrivateRoute path="/orderReview">
            <ClientOrderReview></ClientOrderReview>
          </PrivateRoute>

          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
