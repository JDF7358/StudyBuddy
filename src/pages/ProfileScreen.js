import React from 'react';
import { StyleSheet, Text, Button, View, Image, TouchableOpacity, Picker } from 'react-native';

import Styles from '../components/Styles.js';
import UserProfilePageCmp from '../components/UserProfilePageCmp.js';

export default class ProfileScreen extends React.Component {
  
  static navigationOptions = ({navigation}) => ({
	  headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
	  title: "My Profile",
	  headerLeft: <TouchableOpacity onPress = {() => navigation.navigate('SidebarMenu')}
	    style = {{margin: 10, padding: 10}}>
		  <Text>Menu</Text></TouchableOpacity>,
	  headerRight: <TouchableOpacity onPress = {() => navigation.navigate('EditMyProfile')}
	    style = {{margin: 10, padding: 10}}>
		  <Text>Edit</Text></TouchableOpacity>
  });
  
  render() {
	return (
	  <View style = {Styles.PScontainer}>
	    <UserProfilePageCmp />
	  </View>
	);  
  }
  
}