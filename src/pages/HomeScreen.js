import React from 'react';
import Expo, { SQLite } from 'expo';
import { AppRegistry, StyleSheet, Text, View, Button, Picker, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Auth } from '../model/Auth.js';

import Styles from '../components/Styles.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.HScontainer}>
	    <Text style = {Styles.SBtitle}>
		  StudyBuddy
		</Text>
		<Text style = {Styles.HSheader}>
		  Georgia Tech
		</Text>
        <Button
          onPress={() => navigate('Login')}
          title="Login" />
        <Button
          onPress={() => navigate('Register')}
          title="Register" />
      </View>
    );  
  }
}