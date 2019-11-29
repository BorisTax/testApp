import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

export default ListItem = props => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            props.navigation.push('Image', {uri: props.urlMaxImage});
          }}>
          <Image style={styles.image} source={{uri: props.urlMiniImage}} />
        </TouchableOpacity>
        <View style={styles.listItemText}>
          <Text style={styles.listItemTitle}>{props.author}</Text>
          <Text style={styles.listItemDesc}>{props.title}</Text>
        </View>
      </View>
    );
  };