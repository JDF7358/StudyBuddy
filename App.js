import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/pages/HomeScreen.js'
import LoginScreen from './src/pages/LoginScreen.js';
import RegisterScreen from './src/pages/RegisterScreen.js';
import LoggedIn from './src/pages/LoggedIn.js';
import ProfileScreen from './src/pages/ProfileScreen.js';
import EditProfileScreen from './src/pages/EditProfileScreen.js';

export const StudyBuddy = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  LoggedIn: { screen: LoggedIn },
  MyProfile: { screen: ProfileScreen },
  EditProfile: { screen: EditProfileScreen }
});

export default class App extends React.Component {
  render() {
    return <StudyBuddy />;
  }
}