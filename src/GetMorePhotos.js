import React from 'react';
import {View, TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import {styles} from './styles';

export default GetMorePhotos = props => {
    return (
      <View>
        {props.fetching ? (
          <ActivityIndicator size="large" />
        ) : (
          <TouchableOpacity onPress={() => props.fetchImages(props.page + 1)}>
            <Text style={styles.morePhotosText}>more photos ...</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };