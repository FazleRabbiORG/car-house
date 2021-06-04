import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    backgroundColor: 'gray',
    paddingLeft:30,
    paddingRight:30,
    borderRadius:20
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
  },
  subtitle: {
    margin:5,
    fontSize: 20,
    color: 'black',
    backgroundColor: 'lightgray',
    paddingLeft:30,
    paddingRight:30,
    borderRadius:20
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});

export default styles;
