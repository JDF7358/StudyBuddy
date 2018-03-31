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
<<<<<<< HEAD
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
=======
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
>>>>>>> 4146ad4f3d970adc3b4720317ec5504b1af7ef95

}