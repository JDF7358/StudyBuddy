import React from 'react';
import Expo, { SQLite } from 'expo';
import { AppRegistry, StyleSheet, Text, View, Button, Picker, TextInput, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Auth } from '../model/Auth.js';

export default class HomeScreen extends React.Component {
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