import React from 'react';
import Expo, { SQLite } from 'expo';
import { AppRegistry, StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';

const db = SQLite.openDatabase('db.db');
const users_table = 'users'

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
        this.state = { text_username: '', text_password: ''};
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
            />
            <Button
            	onPress={() => navigate('Login')}
            	title="Login"
            />
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

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql('create table if not exists ? (id integer primary key not null, '
        + 'firstName text, lastName text, password text, username text);', [users_table]);
    });
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
    margin: 'auto',
    width: '100%',
  },
  textboxTop: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
  },
  textboxBottom: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  header: {
    fontSize: 20,
  },
});
