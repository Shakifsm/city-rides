import './App.css';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import fakeData from './fakeData/fakeData';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [transports, setTransports] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
    useEffect(() =>{
        setTransports(fakeData)
    },[])

  return (
    <UserContext.Provider value={[transports, setTransports, loggedInUser, setLoggedInUser]}>
    <Router>
        <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <PrivateRoute path="/destination">
                <Destination></Destination>
            </PrivateRoute>
            <Route path="/blog">
                <Blog></Blog>
            </Route>
            <Route path="/contact">
                <Contact></Contact>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/*">
                <NotFound></NotFound>
            </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
