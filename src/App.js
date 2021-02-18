import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import {useEffect} from "react";

function App() {

  const[{user}, dispatch] = useStateValue();

  //useEffect <<<<<<<< Powerful
  //Piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //User is logged in...
        dispatch({
          type:"SET_USER",
          user: authUser,
        });
      }
      else{
        //User is logged out...
        dispatch({
          type:"SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any cleanup operations go in here....
      unsubscribe();
    };

  }, []);

  console.log("USER IS >>>>",user);

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          {/*This is the Default Route*/}
          <Route path="/">
            <Header/>
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}
{/*We NEED React-ROUTER*/}
{/*localhost.com*/}
{/*localhost.com/checkout*/}
{/*localhost.com/login*/}
export default App;
