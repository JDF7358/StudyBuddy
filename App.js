import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/pages/HomeScreen.js';
import LoginScreen from './src/pages/LoginScreen.js';
import RegisterScreen from './src/pages/RegisterScreen.js';
import LoggedIn from './src/pages/LoggedIn.js';
import ChatScreen from './src/pages/ChatScreen.js';
import ProfileScreen from './src/pages/ProfileScreen.js';
import EditProfileScreen from './src/pages/EditProfileScreen.js';
import OthersProfileScreen from './src/pages/OthersProfileScreen.js';
import GalleryCmp from './src/components/GalleryCmp.js';

import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD3t41icczPZC8x7UEJ9ighhdGdQ0SxLqI',
  authDomain: 'studybuddy-gt.firebaseapp.com',
  databaseURL: 'https://studybuddy-gt.firebaseio.com',
  projectId: 'studybuddy-gt',
  storageBucket: 'studybuddy-gt.appspot.com',
  messagingSenderId: '1037332241375'
};
firebase.initializeApp(config);

export const StudyBuddy = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  LoggedIn: { screen: LoggedIn },
  Chat: { screen: ChatScreen },
  MyProfile: { screen: ProfileScreen },
  OtherProfile: { screen: OthersProfileScreen },
  EditProfile: { screen: EditProfileScreen },
  ChoosePicture: { screen: GalleryCmp }
});

export default class App extends React.Component {
  render() {
    return <StudyBuddy />;
  }
}
