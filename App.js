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
			<View>
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
		return <Text>This is the 'Login' screen.</Text>;
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green',
		alignItems: 'center',
		justifyContent: 'center'
	}
});