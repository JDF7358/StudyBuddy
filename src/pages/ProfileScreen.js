import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import Styles from '../components/Styles.js';
import { userInfo } from '../pages/HomeScreen.js';

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
  
  render() {
    return (
      <View style={Styles.PScontainer}>
        <View style={Styles.PCcontainer}>
        <View style={Styles.bgImgPos}>
          <Image style={Styles.profileBG} source={require('../img/headerbg.jpeg')} />
        </View>
        <View style={Styles.PCheader}>
          <View style={Styles.profilepicWrap}>
            <Image style={Styles.profilepic} source={require('../img/defaultprofilepic.png')} />
          </View>

          <Text style={Styles.name}>{userInfo.name} {userInfo.lastName}</Text>
          <Text style={Styles.major_year}>{userInfo.major}</Text>
          <Text style={Styles.major_year}>{userInfo.year}</Text>
          <Text />
          <Text style={Styles.bio}>Bio:</Text>
          <Text style={Styles.cic}>{userInfo.bio}</Text>
          <Text />
          <Text style={Styles.bio}>Classes in Common:</Text>
          <Text style={Styles.cic}>CS 3312, LMC 3431, CS 2200, CS 4400</Text>
        </View>
      </View>
      </View>
    );  
  }
}