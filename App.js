import React from 'react';
import Expo, { SQLite } from 'expo';
import { AppRegistry, StyleSheet, Text, View, Button, Picker, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Auth } from './src/model/Auth.js';

import HomeScreen from './src/pages/HomeScreen.js'
import LoginScreen from './src/pages/LoginScreen.js';
import RegisterScreen from './src/pages/RegisterScreen.js';

export const StudyBuddy = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
});

export default class App extends React.Component {
  render() {
    return <StudyBuddy />;
  }
}