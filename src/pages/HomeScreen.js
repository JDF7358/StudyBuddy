import React from 'react';
import { Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';
import { AuthObject } from '../model/Auth.js';
import firebase from 'firebase';

import Styles from '../components/Styles.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
<<<<<<< HEAD
	header: null
  };
  
  render() {
	const { navigate } = this.props.navigation;
	return (
	  <View style={styles.container}>
		<Text style = {styles.SBTitle}>
		  StudyBuddy
		</Text>
		<Text style = {styles.header}>
		  Georgia Tech
		</Text>
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
  SBTitle: {
	fontSize: 40,
	fontWeight: 'bold',
  }
});
=======
    header: null
  };
  
  static propTypes = {
    navigation: PropTypes.object.isRequired
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
    const { navigate } = this.props.navigation;
    return (
      <View style={Styles.HScontainer}>
        <Text style={Styles.SBtitle}>
          StudyBuddy
        </Text>
        <Text style={Styles.HSheader}>
          Georgia Tech
        </Text>
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
>>>>>>> 4146ad4f3d970adc3b4720317ec5504b1af7ef95
