import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {flex: 1, width: '100%', height: 100, resizeMode: 'contain'},
  bigImage: {width: "100%", height: "100%", resizeMode: 'contain'},
  mainScreenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  listItemText: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  listItemTitle: {
    textAlign: 'center',
    fontWeight:'bold',
  },
  listItemDesc: {
    textAlign: 'center',
  },
  morePhotosText:{
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    padding: 10,
  },
});
