import './App.css';

import React, { Component } from 'react'
import Homepage from '../src/pages/homepage/Homepage.components';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/Sign-in-and-sign-up.component';
import { auth } from './firebase/Firebase.utils'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  
  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path = '/' component = {Homepage}/>
          <Route exact path = '/shop' component = {ShopPage}/>
          <Route exact path = '/signin' component = {SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
}

export default App

