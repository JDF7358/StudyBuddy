import React from 'react';
import { StyleSheet, Text, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthObject } from '../model/Auth.js';
import t from 'tcomb-form-native';


const Form = t.form.Form;

const Email = t.subtype(t.Str, (email) => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
});

const options = {
  fields: {
    email: {
      error: 'Please enter a valid email address.',
      autoCapitalize: 'none',
      autoCorrect: false,
    },
    password: {
      password: true,
      secureTextEntry: true,
      autoCapitalize: 'none',
      autoCorrect: false,
      error: 'Please enter your password.',
    },
  },
  auto: 'placeholders',
};

const Login = t.struct({
  email: Email,
  password: t.String,
});

export default class LoginScreen extends React.Component {
	static navigationOptions = {
		title: 'Login',
	};
	
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Welcome Back!</Text>
        <Form
          ref = {c => {this._login = c;}}
          type = {Login}
          options = {options}
        />
        <Button
              title="Login"
          onPress = {this.authenticate}
        />
      </KeyboardAwareScrollView>
    );
  }

  authenticate = async () => {
    const { navigate } = this.props.navigation;
    const value = this._login.getValue();
    if (value) {
    user = await AuthObject.getUser(value.email);
      if (user) {
        if (value.password == user.password) {
          navigate('LoggedIn', {user: user});
        } else {
          alert("Incorrect password.");
        }
      } else {
        alert("There is no user associated with that email address.");
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    padding: 2,
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