import React from 'react';
import { Text, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthObject } from '../model/Auth.js';
import t from 'tcomb-form-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import Styles from '../components/Styles.js';
import { userInfo } from '../pages/HomeScreen.js';

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
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  static navigationOptions = {
    title: 'Login',
  };

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false
      });
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

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };
  
  render() {
    if (this.state.loading) return null;
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
    const value = this._login.getValue();
    if (value) {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .catch((error) => {
          if (error.code == 'auth/user-not-found') {
            alert('There is no user associated with that email address.');
          } else if (error.code == 'auth/wrong-password') {
            alert('Incorrect password.');
          }
        });
    }
  }
}