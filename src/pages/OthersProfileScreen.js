import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Styles from '../components/Styles.js';
import { other } from './LoggedIn.js';
import OtherProfileCmp from '../components/OtherProfileCmp.js';

export default class OthersProfileScreen extends React.Component {

<<<<<<< HEAD
  static navigationOptions = {
    title: "Nihjur's Profile",
  };

=======
>>>>>>> 4146ad4f3d970adc3b4720317ec5504b1af7ef95
  render() {
    return (
      <View style={Styles.PScontainer}>
        <OtherProfileCmp />
      </View>
    );
  }

}