import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Styles from '../components/Styles.js'

const Row = (props) => (
	<View style={Styles.Rcontainer}>
		<Image source = {require('../img/defaultprofilepic.png')} style={Styles.Rphoto} />
		<Text style={Styles.Rtext}>
			{`${props.name.first} ${props.name.last}`}
		</Text>
	</View>
);

export default Row;