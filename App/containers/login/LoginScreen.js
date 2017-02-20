import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import Button from 'react-native-button';
import AppTheme from './styles';

var LoginScreen = React.createClass({
  signIn: function() {
    console.log("login");
  },

  render: function() {
    return (
      <View style={{flex:1}}>

       <View style={AppTheme.logoWrapper}> 
        <Text style ={AppTheme.logo}>Picture Book</Text>
       </View>
       
       <View style ={AppTheme.bodyWrapper}> 

           <View  > 
              <TextInput
                placeholder="username"
              />
               <TextInput placeholder="password"/>
              <Button
                onPress={this.signIn}
                style={AppTheme.defaultButton}
              >Login</Button>
          </View> 

           <View style={AppTheme.signUpWrapper}> 
              <Text style={AppTheme.register}>Register</Text>
              <Text style={AppTheme.forgotPassword}>Forgot Password</Text>
           </View> 

        </View>

      </View>
    );
  }
});

export default LoginScreen;
