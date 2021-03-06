import React, { Component } from 'react';
import Header from './components/Header'
import MainPage from './components/MainPage'
import Footer from './components/Footer';
import Price from './components/Price';
import Contacts from './components/Contacts';
import SignupForm from './components/AuthForm/signup.jsx';
import LoginForm from './components/AuthForm/login';
import NewsPage from './components/News';
import Account from './components/Account';
import OrderForm from './components/Account/accountForms';
import PaymentStep from './components/Account/accountForms/secondStep';
import EditProfile from './components/Account/accountForms/editProfile';
import ResetPassword from './components/AuthForm/reset';
import {Switch, Route} from 'react-router-dom';
import './App.scss';

const isLogged = false;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header isLogged={isLogged} />
          <Switch>
              <Route exact path='/signup' component={SignupForm} />
              <Route exact path='/login' component={LoginForm} />
              <Route exact path='/reset-password' component={ResetPassword} />
              <Route exact path='/' component={MainPage}/>
              <Route exact path='/price' component={Price} />
              <Route exact path='/contacts' component={Contacts} />
              <Route exact path='/news' component={NewsPage} />
              <Route exact path='/account' component={Account} />
              <Route exact path='/order' component={OrderForm} />
              <Route exact path='/order-payment' component={PaymentStep} />
              <Route exact path='/edit-profile' component={EditProfile} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
