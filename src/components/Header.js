import React from 'react';
import { View, TextInput } from 'react-native';

import Styles from '../components/Styles.js';

const Header = () => (
  <View style={Styles.Hcontainer}>
    <TextInput
      style={Styles.Hinput}
      placeholder="Search..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);

export default Header;