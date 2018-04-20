import React from 'react';
import { View, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Styles from '../components/Styles.js';

const Header = () => (
  //<View style={Styles.Hcontainer}>
    // <TextInput
    //   style={Styles.Hinput}
    //   placeholder="Search..."
    //   onChangeText={(text) => console.log('searching for ', text)}
    // />
    <SearchBar
     	lightTheme
    	onChangeText={(text) => console.log('searching for', text)}
    	placeholder="Search" /> 
  //</View>
);

export default Header;