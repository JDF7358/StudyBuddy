import React from 'react';
import { StyleSheet, Text, View, Image, ListView, TouchableOpacity, Button } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';

import matchdata from '../components/matchdata.js';
import Header from '../components/Header.js';
import SectionHeader from '../components/SectionHeader.js';
import Styles from '../components/Styles.js';
import { AuthObject } from '../model/Auth.js';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { userInfo } from '../pages/HomeScreen.js';

const styles = StyleSheet.create({
  headliner: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 25,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  button: {
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 25,
    backgroundColor: '#FFECB3',
  },
  yes: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
  },
});

export default class ConfirmBudddy extends React.Component {
	static navigationOptions = ({navigation}) => ({
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    title: 'Confirm Match',
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('LoggedIn1')}  
      style={{ margin: 10, padding: 10 }}>
      <Text>Yes</Text></TouchableOpacity>
  });

	render() {
    return (
    <View >
    	<Text style={styles.headliner}>Confirm George P. Burdell as a StudyBuddy?</Text>
    	<Text style={styles.headliner}>Info:</Text>
    	<Text style={styles.headliner}>Major: Mechanical Engineering</Text>
    	<Text style={styles.headliner}>Year: Junior</Text>
    	<Text style={styles.headliner}>Common Courses : ME 2110, ISYE 3770, PHYS 2122, MATH 2552</Text>
    	<TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('LoggedIn')}>
    		<Text style={styles.yes}>Yes</Text>
    	</TouchableOpacity>
    </View>
    );
  }
}