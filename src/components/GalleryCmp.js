import React from 'react';
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class GalleryCmp extends React.Component {
    
    static navigationOptions = {
      title: 'Select Photo',
    };
    
    getSelectedImages(image) {
      if (image[0]) {
        alert(image[0].uri);
      }
    }
    
    render() {
      return (
        <CameraRollPicker callback={this.getSelectedImages}
          assetType='Photos' maximum={1} />
      );
    }
    
}