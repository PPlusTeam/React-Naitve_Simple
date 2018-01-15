import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
export default class Splash extends Component {
  render(){
    return(
      <View >
        <Image
        style={styles.imagesLogo}
          source={require('../../source/images/logo.png')}
         />
      </View>

    );
  }
}
const styles = StyleSheet.create({
splash: {
  backgroundColor: 'red',
  justifyContent: 'center',
  alignItems:'center',
},
imagesLogo:{
  height: 230,
  width: 250,
  marginTop: 100
}
});
