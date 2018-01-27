import React from 'react';
import Expo, { SQLite } from 'expo';
import { AppRegistry, StyleSheet, Text, View, Button, Picker, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Auth } from '../model/Auth.js';

export default class AccountCreatedScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
	const { navigate } = this.props.navigation;
	return (
	  <View style={styles.container}>
		<Text style = {styles.header}>
		  Your StudyBuddy account is now activated!
		  Press the button below to set up your new
		  profile.
		</Text>
		<Button
		  onPress={() => navigate('MyProfile')}
		  title="Go to My Profile"
		/>
	  </View>
	);  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
  textbox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    margin: 2,
    width: '100%',
  },
  textboxTop: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    margin: 'auto',
  },
  textboxBottom: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    margin: 'auto',
  },
  header: {
    fontSize: 20,
	alignItems: 'center',
	justifyContent: 'center',
  },
  SBTitle: {
	fontSize: 40,
	fontWeight: 'bold',
  }
}); 