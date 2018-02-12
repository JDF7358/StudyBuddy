import React from 'react';
import { StyleSheet, Text, Button, View, Image, TouchableOpacity, Picker } from 'react-native';

import Styles from '../components/Styles.js';
import ProfileCmp from '../components/ProfileCmp.js';

export default class EditProfileScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Edit Profile',
  };
  
  render() {
	return (
	  <View style = {Styles.PScontainer}>
	    <ProfileCmp />
	  </View>
	);  
  }
  
}