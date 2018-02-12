import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

import Styles from '../components/Styles.js';

export default class LoggedIn extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    user = this.props.navigation.state.params.user;
    const { navigate } = this.props.navigation;
    return (<View style={Styles.LIcontainer}>
      <Text>Logged in as {user.name} {user.lastName} with email {user.email}!</Text>
	  <Button
          onPress={() => navigate('MyProfile')}
          title="Go to My Profile"
		/>
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