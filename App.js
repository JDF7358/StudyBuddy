import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'StudyBuddy',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Button
					onPress={() => navigate('Login')}
					title="Login"
				/>
				<Button
					onPress={() => navigate('Register')}
					title="Register"
				/>
			</View>
		);	
	}
}

// if local: force push

class LoginScreen extends React.Component {
	static navigationOptions = {
		title: 'Login',
	};
	render() {
		return (
      <View style={styles.container}>
        <Text>This is the 'Login' screen.</Text>
      </View>
    );
	}
}

class RegisterScreen extends React.Component {
	static navigationOptions = {
		title: 'Register',
	};
	render() {
		return (
      <View style={styles.container}>
        <Text>This is the 'Register' screen.</Text>
      </View>
    );
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	}
});