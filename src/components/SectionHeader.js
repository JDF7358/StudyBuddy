import React from 'react';
import { View, Text } from 'react-native';

import Styles from '../components/Styles.js';

const SectionHeader = (props) => (
  <View style={Styles.SHcontainer}>
    <Text style={Styles.SHtext}>{props.character}</Text>
  </View>
);

export default SectionHeader;