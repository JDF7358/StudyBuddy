import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Styles from '../components/Styles.js';
import { other } from './LoggedIn.js';
import OtherProfileCmp from '../components/OtherProfileCmp.js';

export default class OthersProfileScreen extends React.Component {

  static navigationOptions = {
    title: "Nihjur's Profile",
  };

  render() {
    return (
      <View style={Styles.PScontainer}>
        <OtherProfileCmp />
      </View>
    );
  }

}