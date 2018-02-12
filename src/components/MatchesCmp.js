import React from 'react';
import { AsyncStorage, StyleSheet, Text, Button, View, Image, TouchableOpacity, Picker } from 'react-native';

import Styles from '../components/Styles.js';

export default class LoggedInPageProfileCmp extends React.Component {
	render() {
		//user = this.props.navigation.state.params.user;
		return (
			<View style = {Styles.Mcontainer}>
				<Text style = {Styles.name}>A User woo</Text>
				<Text style = {Styles.major_year}>[insert major here]</Text>				
			</View>
		);
		// console.log(AsyncStorage.getAllKeys())
	}
}