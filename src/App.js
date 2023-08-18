import Navbaar from './Components/header/Navbaar';
import Newnav from './Components/newnav/Newnav';
import Maincomp from './Components/home/Maincomp';
import Footer from './Components/footer/Footer';
import Signup from './Components/signup_signin/SignUp';
import SignIn from './Components/signup_signin/SignIn';
import Cart from './Components/cart/Cart';
import Buynow from './Components/buynow/Buynow';
import './App.css';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Switch, Route } from "react-router-dom";
import axios from 'axios';

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    axios.get('https://amazonclonebackend-qb8s.onrender.com/api/getData')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <>
      {
        data ? (
          <>
            <Navbaar />
            <Newnav />
            <Switch>
              <Route exact path="/">
                <Maincomp />
              </Route>
              <Route exact path="/register">
                <Signup />
              </Route>
              <Route exact path="/login">
                <SignIn/>
              </Route>
              <Route exact path="/getproductsone/:id">
                <Cart />
              </Route>
              <Route exact path="/buynow">
                <Buynow />
              </Route>
            </Switch>
            <Footer />
          </>
        ) : (
          <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>
        )
      }

    </>
  );
}

export default App;
