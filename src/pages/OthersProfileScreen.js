import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';

import Styles from '../components/Styles.js';
import OtherProfileCmp from '../components/OtherProfileCmp.js';

export default class OthersProfileScreen extends React.Component {

  render() {
    return (
      <View style={Styles.PScontainer}>
        <View style = {Styles.PCcontainer}>
        <View style = {Styles.bgImgPos}>
          <Image style = {Styles.profileBG} source = {require('../img/headerbg.jpeg')} />
        </View>
        <View style = {Styles.PCheader}>
          <View style = {Styles.profilepicWrap}>
            <Image style = {Styles.profilepic} source = {require('../img/defaultprofilepic.png')} />
          </View>
          <Text style = {Styles.name}>Selected Buddy</Text>
          <Text style = {Styles.major_year}>Computer Science</Text>
          <Text style = {Styles.major_year}>Junior</Text>
          <Text />
          <Text style = {Styles.bio}>Bio:</Text>
          <Text style = {Styles.cic}>This is my bio.</Text>
          <Text />
          <Text style = {Styles.bio}>Classes in Common:</Text>
          <Text style = {Styles.cic}>CS 3312, LMC 3431</Text>
		     <Text />
		     <Button
		       style = {{flex: 1, color: 'red'}}
			     title = 'Block'
			     onPress = {() => console.log("Block button pressed.")}
		      />
        </View>
      </View>
      </View>
    );
  }

}