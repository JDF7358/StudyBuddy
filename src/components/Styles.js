import React from 'react';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
	
  HScontainer: {					// HomeScreen
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
  SBtitle: {
	fontSize: 40,
	fontWeight: 'bold',
  },
  HSheader: {
    fontSize: 20,
  },
  
  
  LIcontainer: {					// LoggedIn
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
  
  
  LScontainer: {					// LoginScreen
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: '5%',
  },
  LSheader: {
    fontSize: 20,
    padding: 15,
  },
  
  
  PScontainer: {					// ProfileScreen
    flex: 1,
    backgroundColor: '#000',
  },
  
  
  RScontainer: {					// RegisterScreen
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: '5%',
  },
  
  
  PCcontainer: {					// ProfileCmp
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

  Mcontainer: {            //MatchesCmp
    flex: 1,
    height: 70,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: 'powderblue',
  },
  profileBG: {
    flex: 1,
	resizeMode: 'cover',
  },
  PCheader: {
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
  bio: {
	  marginTop: 20,
	  fontSize: 16,
	  color: '#fff',
	  fontWeight: 'bold',
  },
  cic: {
	  fontSize: 16,
	  color: '#fff',
	  fontWeight: 'normal',
  }
  
  
});