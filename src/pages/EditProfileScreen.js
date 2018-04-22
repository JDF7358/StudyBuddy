import React from 'react';
import { Stylesheet, Text, TextInput, Button, View, Image, TouchableOpacity, Picker } from 'react-native';
import { AuthObject, User, Majors, Years } from '../model/Auth.js';
import t from 'tcomb-form-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Styles from '../components/Styles.js';
import { userInfo } from '../pages/HomeScreen.js';

const Form = t.form.Form;

const options = {
  fields: {
    major : {
      label: 'Major',
    },
    year: {
      label: 'Year',
    },
  }
};

const EPform = t.struct({
  major: Majors,
  year: Years,
});

export default class EditProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Edit Profile',
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      fname: userInfo.name,
      lname: userInfo.lastName,
      bio: userInfo.bio
    };
  }

  render() {
    return (
      <View style={Styles.PScontainer}>
        <KeyboardAwareScrollView contentContainerStyle={Styles.PCcontainer}>
          <View style={Styles.bgImgPos}>
            <Image style={Styles.profileBG} source={require('../img/headerbg.jpeg')} />
          </View>
          <View style={Styles.EPcontainer}>
            <View style={Styles.EPPPwrap}>
              <Image style={Styles.EPPP} source={require('../img/defaultprofilepic.png')} />
            </View>
            <Button
              title="Choose Picture"
              onPress={this.goToGallery}
            />
            <TextInput
              placeholder="First Name"
              style={Styles.tb}
              onChangeText={(fname) => this.setState({ fname })}
              value={this.state.fname}
            />
            <Text />
            <TextInput
              placeholder="Last Name"
              style={Styles.tb}
              onChangeText={(lname) => this.setState({ lname })}
              value={this.state.lname}
            />
            <Text />
            <Text />
            <TextInput
              placeholder="Give a short bio of yourself!"
              style={{ fontSize: 20, padding: '2%', color: 'white' }}
              onChangeText={(bio) => this.setState({ bio })}
              value={this.state.bio}
            />
            <Text />
            <Form
              ref={c => { this._saveChanges = c; }}
              type={EPform}
              options={options}
            />
            <Button
              title="Update"
              onPress={this.saveChanges}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
  
  saveChanges = async() => {
    const { navigate } = this.props.navigation;
    const value = this._saveChanges.getValue();
    if (value) {
      console.log(value);
      userInfo.name = this.state.fname;
      userInfo.lastName = this.state.lname;
      userInfo.bio = this.state.bio;
      userInfo.major = value.major;
      userInfo.year = value.year;
      AuthObject.updateUser(userInfo.email, userInfo);
      console.log(userInfo);
      navigate('MyProfile');
    }
  }
  
  goToGallery = async () => {
    const { navigate } = this.props.navigation;
    navigate('ChoosePicture');
  }

}