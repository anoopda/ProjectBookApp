import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
 TextInput
} from 'react-native';
import styles from './styles';
import Button from 'react-native-button';


export default class SignUp extends Component {

  render() {
    return (

    <View style={{flex:1}}>

        <View style={styles.logoWrapper}>  
         <Text style={styles.logo}>Picture Book</Text>
        </View>  


        <View style={styles.bodyWrapper}>  
           <TextInput placeholder="First Name" style={styles.input} />
           <TextInput placeholder="Last Name" style={styles.input} />
           <TextInput placeholder="Password" style={styles.input}/>
           <TextInput placeholder="Password" style={styles.input} />
             <Button
                style={styles.defaultButton}
              >Login</Button>
        </View> 
    </View>
);
  }


}