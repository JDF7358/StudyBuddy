import React from 'react';
import { Button } from 'react-native';
import { AuthObject, User } from '../model/Auth.js';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import NavigationActions from 'react-navigation';

import Styles from '../components/Styles.js';

const Form = t.form.Form;

const options = {
  fields: {
    name: {
      placeholder: 'First name',
    },
    email: {
      error: 'Please enter a valid email address.',
      autoCapitalize: 'none',
      autoCorrect: false,
    },
    passwordAgain: {
      placeholder: 'Verify Password',
      password: true,
      secureTextEntry: true,
      autoCapitalize: 'none',
      autoCorrect: false,
    },
    password: {
      password: true,
      secureTextEntry: true,
      autoCapitalize: 'none',
      autoCorrect: false,
    },
    major : {
      label: 'Major',
      error: 'Please select a major.',
    },
    year: {
      label: 'Year',
      error: 'Please select a class.',
    }
  },
  auto: 'placeholders',
};

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
  };

  static propTypes = {
    navigation: PropTypes.instanceOf(NavigationActions)
  }

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle = {Styles.RScontainer}>
        <Form
          ref = {c => {this._register = c;}}
          type = {User}
          options = {options}
        />
    
        < Button
          title = 'Create Account'
          onPress = {
            this.register
          }
        />
      </KeyboardAwareScrollView>
    );
  }
  register = async () => {
    const value = this._register.getValue();
    const { goBack } = this.props.navigation;
    if (value) {
      console.log(value);
      if (value.password == value.passwordAgain) {
        if (await AuthObject.getUser(value.email) == null) {
          AuthObject.createAccount(value);
          alert('Account created!');
          goBack();
        } else {
          alert('An account with that email already exists.');
        }
      } else {
        alert('Please make sure your passwords match.');
      }
    }
  }

}