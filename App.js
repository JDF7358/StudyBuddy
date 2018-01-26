import React from 'react';
import Expo, { SQLite } from 'expo';
import { AppRegistry, StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Auth } from './src/model/Auth.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'StudyBuddy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('Login')}
          title="Login" />
        <Button
          onPress={() => navigate('Register')}
          title="Register" />
      </View>
    );  
  }
}

// if local: force push

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  
  constructor(props) {
        super(props);
        this.state = { text: ''};
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.header}>Welcome Back!</Text>
            <TextInput
              placeholder = {'Username'}
              style={[styles.textbox, styles.textboxTop]}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              clearTextOnFocus = {true}/>
            <TextInput
              placeholder = {'Password'}
              style={[styles.textbox, styles.textboxBottom]}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              clearTextOnFocus = {true}/>
          </View>
        );
    }
}

class RegisterScreen extends React.Component {
	static navigationOptions = {
		title: 'Register',
	};
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}
	render() {
		return (
      <View style = {styles.container}>
	    <TextInput
		  style = {styles.textbox}
		  placeholder = "First Name"
		  onChangeText = {(text) => this.setState({text})}
		  value = {this.state.text}
		  clearTextOnFocus = {true}
		/>
		<TextInput
		  style = {styles.textbox}
		  placeholder = "Last Name"
		  onChangeText = {(text) => this.setState({text})}
		  value = {this.state.text}
		  clearTextOnFocus = {true}
		/>
		<TextInput
		  style = {styles.textbox}
		  placeholder = "GT Email Address"
		  onChangeText = {(text) => this.setState({text})}
		  value = {this.state.text}
		  clearTextOnFocus = {true}
		/>
		<TextInput
		  style = {styles.textbox}
		  placeholder = "Classification"
		  onChangeText = {(text) => this.setState({text})}
		  value = {this.state.text}
		  clearTextOnFocus = {true}
		/>
		<TextInput
		  style = {styles.textbox}
		  placeholder = "Major"
		  onChangeText = {(text) => this.setState({text})}
		  value = {this.state.text}
		  clearTextOnFocus = {true}
		/>
      </View>
    );
	}
}

export const StudyBuddy = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
});

export default class App extends React.Component {
  render() {
    return <StudyBuddy />;
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
