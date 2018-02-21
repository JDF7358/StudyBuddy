import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Styles from '../components/Styles.js';
import OtherProfileCmp from '../components/OtherProfileCmp.js';

export default class OthersProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    title: 'My Profile',
    headerLeft: <TouchableOpacity onPress={() => navigation.navigate('SidebarMenu')}
      style={{ margin: 10, padding: 10 }}>
      <Text>Menu</Text></TouchableOpacity>,
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}
      style={{ margin: 10, padding: 10 }}>
      <Text>Edit</Text></TouchableOpacity>
  });

  render() {
    return (
      <View style={Styles.PScontainer}>
        <OtherProfileCmp />
      </View>
    );
  }

}
