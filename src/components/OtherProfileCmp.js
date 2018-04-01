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
            <Image style = {Styles.profilepic} source = {require('../img/nihjur.jpg')} />
          </View>
          <Text style = {Styles.name}>Nihjur Yarbrough</Text>
          <Text style = {Styles.major_year}>Computer Science</Text>
          <Text style = {Styles.major_year}>Junior</Text>
          <Text />
          <Text style = {Styles.bio}>Bio:</Text>
          <Text style = {Styles.cic}>I'm a CS Junior who's looking for someone to study with.</Text>
          <Text />
          <Text style = {Styles.bio}>Classes in Common:</Text>
          <Text style = {Styles.cic}>CS 3312, LMC 3431, CS 2200, CS 4400, FREN 1001</Text>
		     <Text />
		     <Button
		       style = {{flex: 1, color: 'red'}}
			     title = 'Block'
			     onPress = {() => console.log("Block\n")}
		      />
        </View>
      </View>
    );
  }
}
