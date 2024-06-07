import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  emptyData: {
    margin: 'auto',
    width: width - 300,
    height: height - 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  knob: {
    width: 30,
    height: 6,
    marginVertical: 5,
    borderRadius: 30,
    backgroundColor: 'lightgrey',
  },
  eventBlock: {
    width: width - 150,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 6,
  },
  eventDay: {
    width: 100,
    height: 50,
    borderColor: 'black',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
