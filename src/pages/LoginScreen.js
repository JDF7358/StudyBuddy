import React from 'react';
import { Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthObject } from '../model/Auth.js';
import t from 'tcomb-form-native';
import PropTypes from 'prop-types';

import Styles from '../components/Styles.js';

const Form = t.form.Form;

const Email = t.subtype(t.Str, (email) => {
  const reg = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

  static propTypes = {
    navigation: PropTypes.instanceOf(NavigationActions)
  };
  
  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={Styles.LScontainer}>
        <Text style={Styles.LSheader}>Welcome Back!</Text>
        <Form
          ref={c => { this._login = c; }}
          type={Login}
          options={options}
        />
        <Button
          title='Login'
          onPress={this.authenticate}
        />
      </KeyboardAwareScrollView>
    );
  }

  authenticate = async () => {
    const { navigate } = this.props.navigation;
    const value = this._login.getValue();
    if (value) {
      let user = await AuthObject.getUser(value.email);
      if (user) {
        if (value.password == user.password) {
          navigate('LoggedIn', { user: user });
        } else {
          alert('Incorrect password.');
        }
      } else {
        alert('There is no user associated with that email address.');
      }
    }
  }
}