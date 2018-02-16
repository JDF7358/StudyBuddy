import React from 'react';
import { Stylesheet, Text, Button, View, Image, TouchableOpacity, Picker } from 'react-native';

import Styles from '../components/Styles.js';

export default class ProfileCmp extends React.Component {
  render() {
	return (
		<View style = {Styles.PCcontainer}>
		  <View style = {Styles.bgImgPos}>
		    <Image style = {Styles.profileBG} source = {require('../img/headerbg.jpeg')} />
		  </View>
	      <View style = {Styles.PCheader}>
		    <View style = {Styles.profilepicWrap}>
		      <Image style = {Styles.profilepic} source = {require('../img/defaultprofilepic.png')} />
		    </View>
		  
		    <Text style = {Styles.name}>{user.name} {user.lastName}</Text>
		    <Text style = {Styles.major_year}>{user.major}</Text>
		    <Text style = {Styles.major_year}>{user.year}</Text>
			<Text />
			<Text style = {Styles.bio}>Bio:</Text>
			<Text style = {Styles.cic}>{user.bio}</Text>
			<Text />
			<Text style = {Styles.bio}>Classes in Common:</Text>
			<Text style = {Styles.cic}>CS 3312, LMC 3431, CS 2200, CS 4400</Text>
		  </View>
		</View>
	);  
  }
}