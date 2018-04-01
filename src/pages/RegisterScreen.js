import React from 'react';
import { Button } from 'react-native';
import { AuthObject, User } from '../model/Auth.js';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import firebase from 'firebase';

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
    navigation: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        AuthObject.getUser(user.email).then((ourUser) => {
          this.props.navigation.navigate('LoggedIn', {user: ourUser});
        });
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription();
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
    if (value) {
      if (value.password == value.passwordAgain) {
        firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
          .error((error) => {
            console.log(error);
            if (error.code == 'auth/email-already-in-use') {
              alert('An account with that email already exists.');
            }
          }).then(() => {
            AuthObject.createAccount(value);
            alert('Account created!');
          });
      } else {
        alert('Please make sure your passwords match.');
      }
    }
  }

}