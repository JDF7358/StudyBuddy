import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity, Picker, TextInput, KeyboardAvoidingView } from 'react-native';

const UPPstyles = StyleSheet.create({
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