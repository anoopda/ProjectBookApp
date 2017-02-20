
import React, { Component } from 'react';
import {

  View,
  TextInput,
  Text
} from 'react-native';

import UserProfile from './containers/userProfile/UserProfile';
import Login from './containers/login/LoginScreen';
import SignUp from './containers/signup/signUp';

export default class Home extends Component {

  render(){

    return(

     <View style={{ flex:1 ,backgroundColor: '#ffc299' }}>
        <SignUp/>
     </View>

    );
  }

}






