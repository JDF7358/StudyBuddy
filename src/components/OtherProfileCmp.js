import React from 'react';
import {Text, View, Image, Button} from 'react-native';

import { other } from '../pages/LoggedIn.js';
import Styles from '../components/Styles.js';

export default class OtherProfileCmp extends React.Component {
  render() {
    return (
      <View style = {Styles.PCcontainer}>
        <View style = {Styles.bgImgPos}>
          <Image style = {Styles.profileBG} source = {require('../img/headerbg.jpeg')} />
        </View>
        <View style = {Styles.PCheader}>
          <View style = {Styles.profilepicWrap}>
            <Image style = {Styles.profilepic} source = {require('../img/defaultprofilepic.png')} />
          </View>
          <Text style = {Styles.name}>{other.name} {other.lastName}</Text>
          <Text style = {Styles.major_year}>{other.major}</Text>
          <Text style = {Styles.major_year}>{other.year}</Text>
          <Text />
          <Text style = {Styles.bio}>Bio:</Text>
          <Text style = {Styles.cic}>{other.bio}</Text>
          <Text />
          <Text style = {Styles.bio}>Classes in Common:</Text>
          <Text style = {Styles.cic}>CS 3312, LMC 3431, CS 2200, CS 4400</Text>
		     <Text />
		     <Button
		       style = {{flex: 1, color: 'red'}}
			     title = 'Block'
			     onPress = {null}
		      />
        </View>
      </View>
    );
  }
}
