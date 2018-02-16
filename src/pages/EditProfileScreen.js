import React from 'react';
import { Stylesheet, Text, TextInput, Button, View, Image, TouchableOpacity, Picker } from 'react-native';
import { AuthObject, User, Majors, Years } from '../model/Auth.js';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Styles from '../components/Styles.js';

const Form = t.form.Form;

const options = {
  fields: {
    major : {
      label: 'Major',
    },
    year: {
      label: 'Year',
    },
  }
};

const EPform = t.struct({
  major: Majors,
  year: Years,
});

export default class EditProfileScreen extends React.Component {

  static navigationOptions = {
    title: "Edit Profile",
  };
  
  constructor(props) {
	  super(props);
	  
	  this.state = {
		  fname: user.name,
		  lname: user.lastName,
		  bio: user.bio
	  };
  }

  render() {
	return (
	  <View style = {Styles.PScontainer}>
		<KeyboardAwareScrollView contentContainerStyle = {Styles.PCcontainer}>
		  <View style = {Styles.bgImgPos}>
		    <Image style = {Styles.profileBG} source = {require('../img/headerbg.jpeg')} />
		  </View>
	      <View style = {Styles.EPcontainer}>
		    <View style = {Styles.EPPPwrap}>
		      <Image style = {Styles.EPPP} source = {require('../img/defaultprofilepic.png')} />
			</View>
		    <TextInput
			  placeholder = "First Name"
			  style = {Styles.tb}
			  onChangeText = {(fname) => this.setState({fname})}
			  value = {this.state.fname}
			/>
			<Text />
			<TextInput
			  placeholder = "Last Name"
			  style = {Styles.tb}
			  onChangeText = {(lname) => this.setState({lname})}
			  value = {this.state.lname}
			/>
			<Text />
			<Text />
			<TextInput
			  placeholder = "Give a short bio of yourself!"
			  style = {{fontSize: 20, padding: '2%', color: 'white'}}
			  onChangeText = {(bio) => this.setState({bio})}
			  value = {this.state.bio}
			/>
			<Text />
		    <Form
			  ref = {c => {this._saveChanges = c;}}
			  type = {EPform}
			  options = {options}
			/>
			<Button
			  title = "Save Changes"
			  onPress = {this.saveChanges}
			/>
		  </View>
		</KeyboardAwareScrollView>
	  </View>
	);  
  }
  
  saveChanges = async() => {
	const { navigate } = this.props.navigation;
	const value = this._saveChanges.getValue();
    if (value) {
	  console.log(value);
	  user.name = this.state.fname;
	  user.lastName = this.state.lname;
	  user.bio = this.state.bio;
	  user.major = value.major;
	  user.year = value.year;
	  AuthObject.updateAccountItem(user.name, this.state.fname);
	  AuthObject.updateAccountItem(user.lastName, this.state.lname);
	  AuthObject.updateAccountItem(user.bio, this.state.bio);
	  AuthObject.updateAccountItem(user.major, value.major);
	  AuthObject.updateAccountItem(user.year, value.year);
	  console.log(user);
	  navigate('MyProfile');
    }
  }

}