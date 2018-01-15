import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

export default class Login extends React.Component{
  render(){
      return(
          <View>
            <View>
              <Image source={require('../../source/images/logo_yellow.png')}/>
            </View>
          </View>
      );
  }
}
