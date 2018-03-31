import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Styles from '../components/Styles.js';
import ProfileCmp from '../components/ProfileCmp.js';

export default class ProfileScreen extends React.Component {
  
  static navigationOptions = ({navigation}) => ({
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    title: 'My Profile',
    headerLeft: <TouchableOpacity onPress = {() => navigation.navigate('LoggedIn')}
      style = {{margin: 10, padding: 10}}>
      <Text>My Matches</Text></TouchableOpacity>,
    headerRight: <TouchableOpacity onPress = {() => navigation.navigate('EditProfile')}
      style = {{margin: 10, padding: 10}}>
      <Text>Edit</Text></TouchableOpacity>
  });
<<<<<<< HEAD

=======
  
>>>>>>> 4146ad4f3d970adc3b4720317ec5504b1af7ef95
  render() {
    return (
      <View style={Styles.PScontainer}>
        <ProfileCmp />
      </View>
    );  
  }
}