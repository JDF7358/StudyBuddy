import React from 'react';
import { Text, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthObject } from '../model/Auth.js';
import t from 'tcomb-form-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';

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
<<<<<<< HEAD
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
	} else if ((this.state.text_username == "")
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
          onPress={() => console.log('Forgot Password')}>Forgot Password?
		</Text>
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
=======
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
>>>>>>> 4146ad4f3d970adc3b4720317ec5504b1af7ef95
