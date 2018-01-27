import React from 'react';
import Expo, { SQLite } from 'expo';
import { AppRegistry, StyleSheet, Text, View, Button, Picker, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Auth } from '../model/Auth.js';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
	title: 'Register',
  };
	
  constructor() {
	super();
	this.state = {
      text_fn: '',
	  text_ln: '',
	  text_gtea: '',
	  text_pw: '',
	  text_repw: '',
	  year_value: '',
	  major_value: ''
	};
  }
	
  creAcc = () => {
	if ((this.state.text_fn == "")
	  || (this.state.text_ln == "")
	  || (this.state.text_gtea == "")
	  || (this.state.text_pw == "")
	  || (this.state.text_repw == "")
	  || (this.state.year_value == "")
	  || (this.state.major_value == "")) {
		alert("Please fill in the missing sections.");
	} else {
	  const { navigate } = this.props.navigation;
	  navigate('AccountCreated');
	}
  }
	
  render() {
	const { navigate } = this.props.navigation;
	return (
      <View style = {styles.container}>
	    <TextInput
		  style = {styles.textbox}
		  placeholder = "First Name"
		  onChangeText = {(text_fn) => this.setState({text_fn})}
		  value = {this.state.text_fn}
		  clearTextOnFocus = {true}
		/>
		<TextInput
		  style = {styles.textbox}
		  placeholder = "Last Name"
		  onChangeText = {(text_ln) => this.setState({text_ln})}
		  value = {this.state.text_ln}
		  clearTextOnFocus = {true}
		/>
		<TextInput
		  style = {styles.textbox}
		  placeholder = "GT Email Address"
		  onChangeText = {(text_gtea) => this.setState({text_gtea})}
		  value = {this.state.text_gtea}
		  clearTextOnFocus = {true}
		/>
		<TextInput
		  style = {styles.textbox}
		  placeholder = "Password"
		  onChangeText = {(text_pw) => this.setState({text_pw})}
		  value = {this.state.text_pw}
		  clearTextOnFocus = {true}
		  secureTextEntry = {true}
		/>
		<TextInput
		  style = {styles.textbox}
		  placeholder = "Re-enter Password"
		  onChangeText = {(text_repw) => this.setState({text_repw})}
		  value = {this.state.text_repw}
		  clearTextOnFocus = {true}
		  secureTextEntry = {true}
		/>
		<Picker
		  style = {{width: '80%'}}
		  selectedValue = {this.state.year_value}
		  onValueChange = {(itemValue, itemIndex) =>
			this.setState({year_value: itemValue})}>
		<Picker.Item label = "Select your year." color = '#D3D3D3' value = "" />
		<Picker.Item label = "Freshman" value = "fr" />
		<Picker.Item label = "Sophomore" value = "so" />
		<Picker.Item label = "Junior" value = "jr" />
		<Picker.Item label = "Senior/5th Year" value = "sr5" />
		</Picker>
		
		<Picker
		  style = {{width: '80%'}}
		  selectedValue = {this.state.major_value}
		  onValueChange = {(itemValue, itemIndex) =>
			this.setState({major_value: itemValue})}>
		<Picker.Item label = "Select your major." color = '#D3D3D3' value = "" />
		<Picker.Item label = "Computer Science" value = "cs" />
		<Picker.Item label = "Computational Media" value = "cm" />
		</Picker>
		
		<Button
          title="Create Account"
		  onPress = {this.creAcc}
		/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
  textbox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    margin: 2,
    width: '100%',
  },
  textboxTop: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    margin: 'auto',
  },
  textboxBottom: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    margin: 'auto',
  },
  header: {
    fontSize: 20,
  },
});