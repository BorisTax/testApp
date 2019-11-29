import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, FlatList} from 'react-native';
import {fetchImages} from './actions';
import ListItem from './ListItem';
import GetMorePhotos from './GetMorePhotos';

const MainScreen = props => {
  useEffect(() => {
    props.fetchImages(1);
  }, []);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={props.images}
        renderItem={({item, index}) =>
          index < props.images.length - 1 ? (
            <ListItem navigation={props.navigation} {...item} />
          ) : (
            <GetMorePhotos
              fetchImages={props.fetchImages}
              fetching={props.fetching}
              page={props.page}
            />
          )
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
MainScreen.navigationOptions = {
  title: 'Simple Image Gallery',
};

const mapStateToProps = store => {
  return {
    images: store.images,
    page: store.page,
    fetching: store.fetching,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchImages: page => dispatch(fetchImages(page)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
