import React from 'react';
import Expo, { SQLite } from 'expo';
import { AppRegistry, StyleSheet, Text, View, Button, TextInput } from 'react-native';
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
      <View>
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
        this.state = { text: '' };
    }

    render() {
        return (
          <View style = {{padding: 20}}>
          <TextInput
            placeholder = {'Username'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              clearTextOnFocus = {true}/>

            <TextInput
              placeholder = {'Password'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
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
  render() {
    return <Text>This is the 'Register' screen.</Text>;
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
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
