import React from 'react';
import Expo, { SQLite } from 'expo';
import { AppRegistry, StyleSheet, Text, View, Button, Picker, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Auth } from '../model/Auth.js';

export default class LoginScreen extends React.Component {
	static navigationOptions = {
		title: 'Login',
	};
  
	constructor() {
        super();
        this.state = {
			text_username: '',
			text_password: ''
		};
    }

	loggingIn = () => {
		if ((this.state.text_username == "")
			&& (this.state.text_password == "")) {
			alert("Please fill in your username and password.");
		} else if (this.state.text_username == ""
			&& (this.state.text_password != "")) {
			alert("Please fill in your username.");
		} else if ((this.state.text_username != "")
			&& (this.state.text_password == "")) {
			alert("Please fill in your password.");
		} else {	
			const { navigate } = this.props.navigation;
			navigate('MyMatches');
		}
	}
	
    render() {
    	const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
            <Text style={styles.header}>Welcome Back!</Text>
            <TextInput
              placeholder = {'Username'}
              style={[styles.textbox, styles.textboxTop]}
              onChangeText={(text_username) => this.setState({text_username})}
              value={this.state.text_username}
              clearTextOnFocus = {true}
            />
            <TextInput
              placeholder = {'Password'}
              style={[styles.textbox, styles.textboxBottom]}
              onChangeText={(text_password) => this.setState({text_password})}
              value={this.state.text_password}
              clearTextOnFocus = {true}
              secureTextEntry = {true}
            />
            <Button
              onPress={this.loggingIn}
              title="Login"
            />
            <Text style={styles.body}
              onPress={() => console.log('Forgot Password')}>Forgot Password?</Text>
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
    padding: 15,
  },
});