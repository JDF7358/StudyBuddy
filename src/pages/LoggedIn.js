import React from 'react';
import { StyleSheet, Text, Button, View, FlatList, ListView, TouchableOpacity } from 'react-native';

import fakedata from '../components/fakedata.js'
import Row from '../components/Row.js'
import Header from '../components/Header.js'
import SectionHeader from '../components/SectionHeader.js'
import Styles from '../components/Styles.js'

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	marginTop: 20,
    	zIndex: 5,
  	},
  	separator: {
  		flex: 1,
  		height: StyleSheet.hairlineWidth,
  		backgroundColor: '#8E8E8E',
  	},
});

export default class LoggedIn extends React.Component {

	static navigationOptions = ({navigation}) => ({
		headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
		title: "My Matches",
		headerLeft: <TouchableOpacity onPress = {() => navigation.navigate('Home')}
	    style = {{margin: 10, padding: 10}}>
		  <Text>Logout</Text></TouchableOpacity>,
		headerRight: <TouchableOpacity onPress = {() => navigation.navigate('MyProfile')}
	    style = {{margin: 10, padding: 10}}>
		  <Text>My Profile</Text></TouchableOpacity>
	});

	constructor(props) {
		super(props);

		const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
		const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
			sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      		getSectionData,
			getRowData
		});

		const { dataBlob, sectionIds, rowIds } = this.formatData(fakedata);

		this.state = {
			dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
		}
	}

	formatData(data) {
		//Sort alphabetically
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

		//Need somewhere to store data
		const dataBlob = {};
		const sectionIds = [];
		const rowIds = [];

		//sections are alphabets - loop over alphabet
		for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
			//get character we're currently looking for
			const currentChar = alphabet[sectionId];

			//get users whose first name starts with current letter
			const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) == 0);

			//if any users have first name starting w current letter then add new section
			if (users.length > 0) {
				//add section id to array so listview knows we've got a new section
				sectionIds.push(sectionId);

				//store current character to display in section header
				dataBlob[sectionId] = {character : currentChar};

				//set up new array to store row ids for this section
				rowIds.push([]);

				//loop over valid users for this section
				for (let i = 0; i < users.length; i++) {
					//create unique row id for data blob that listview can use for reference
					const rowId = `${sectionId}:${i}`;

					//push row ids to row ids array; listview references this to pull data from data blob
					rowIds[rowIds.length - 1].push(rowId);

					//store data we care about for this row
					dataBlob[rowId] = users[i]; ///////////////////////////////
				}
			}
		}
		return {dataBlob, sectionIds, rowIds};
	}

	render() {
		return (
			//<View>
				<ListView
					style = {styles.container}
					dataSource = {this.state.dataSource}
					renderRow = {(data) => <Row {...data} />}
					renderSeparator = {(sectionId, rowId) => <View key={rowId} style = {styles.separator} />}
					renderHeader={() => <Header />}
					renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />} />
				// <View style={Styles.LIcontainer}>
				// <Button
				// 	onPress={() => {
				// 		const { goBack } = this.props.navigation;
				// 		alert("Logged out!");
				// 		goBack();
				// 	}}
				// 	title="Logout"/>
				// </View>
			//</View>
		);
	}
}
