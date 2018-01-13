import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

export default class Login extends React.Component{
  render(){
      return(
        <Image
          style={{width: 50, height: 50}}
          source={{uri: '../../../source/images/logo_white.png'}}
        />
      );
  }
}
