import React from 'react';
import { StyleSheet, Text, Button, View, Image, TouchableOpacity, Picker } from 'react-native';

export default class UserProfilePageCmp extends React.Component {
  render() {
	user = this.props.navigation.state.params.user;
	return (
		<View style = {styles.container}>
		  <View style = {styles.bgImgPos}>
		    <Image style = {styles.profileBG} source = {require('../img/headerbg.jpeg')} />
		  </View>
	      <View style = {styles.header}>
		    <View style = {styles.profilepicWrap}>
		      <Image style = {styles.profilepic} source = {require('../img/defaultprofilepic.png')} />
		    </View>
		  
		    <Text style = {styles.name}>{user.name} {user.lastName}</Text>
		    <Text style = {styles.major_year}>{user.major}</Text>
		    <Text style = {styles.major_year}>{user.year}</Text>
			<Text />
			<Text style = {styles.otherH}>Bio:</Text>
			<Text style = {styles.otherT}>{user.bio}</Text>
			<Text />
			<Text style = {styles.otherH}>Classes in Common:</Text>
			<Text style = {styles.otherT}>CS 3312, LMC 3431, CS 2200, CS 4400</Text>
		  </View>
		</View>
	);  
  }
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#000',
  },
  bgImgPos: {
    position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: '100%',
	height: '100%',
  },
  profileBG: {
    flex: 1,
	resizeMode: 'cover',
  },
  header: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  padding: 20,
	  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  profilepicWrap: {
	  width: 180,
	  height: 180,
	  borderRadius: 100,
	  borderColor: 'rgba(0, 0, 0, 0.4)',
	  borderWidth: 16,
  },
  profilepic: {
	  flex: 1,
	  width: null,
	  alignSelf: 'stretch',
	  borderRadius: 100,
	  borderColor: '#fff',
	  borderWidth: 4,
  },
  name: {
	  marginTop: 10,
	  fontSize: 30,
	  color: '#fff',
	  fontWeight: 'bold',
  },
  major_year: {
	  fontSize: 20,
	  color: '#fff',
	  fontWeight: '300',
  },
  otherH: {
	  marginTop: 20,
	  fontSize: 16,
	  color: '#fff',
	  fontWeight: 'bold',
  },
  otherT: {
	  fontSize: 16,
	  color: '#fff',
	  fontWeight: 'normal',
  }
}); 