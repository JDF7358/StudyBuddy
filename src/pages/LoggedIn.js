import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class LoggedIn extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    user = this.props.navigation.state.params.user;
    return (<View style={styles.container}>
      <Text>Logged in as {user.name} {user.lastName} with email {user.email}!</Text>
      <Button
        onPress={() => {
          const { goBack } = this.props.navigation;
          alert("Logged out!");
          goBack();
        }}
        title="Logout"
        />
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
});