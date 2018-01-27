import React from 'react';
import Expo, { SQLite } from 'expo';
import { AppRegistry, StyleSheet, Text, View, Image, Button, TouchableOpacity, Picker, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Auth } from '../model/Auth.js';
import { Header } from 'react-native-elements';

import UserProfile from '../components/UserProfile.js';

export default class MyProfileScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
	  title: "My Profile",
	  headerLeft: <TouchableOpacity onPress = {() => navigation.navigate('SidebarMenu')}>
		  <Text>Menu</Text></TouchableOpacity>,
	  headerRight: <TouchableOpacity onPress = {() => navigation.navigate('EditMyProfile')}>
		  <Text>Edit</Text></TouchableOpacity>
  });	  

  render() {
	return (
	  <View style = {styles.container}>
	    <UserProfile />
	  </View>
	);  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
}); 