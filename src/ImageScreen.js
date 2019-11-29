import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';

const ImageScreen = props => {
  return (
    <View style={{}}>
      <Image
        style={styles.bigImage}
        source={{uri: props.navigation.getParam('uri')}}
      />
    </View>
  );
};

export default ImageScreen;
