import {Dimensions, StyleSheet} from 'react-native';

import {defaultColors} from '../../constants/Colors';

const PADDING = 20;
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  fieldBlock: {
    rowGap: 8,
  },
  fieldBlockText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  fieldBlockInput: {
    width: width - 2 * PADDING,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    borderRadius: 10,
  },
  fieldBlockError: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'red',
  },
  button: {
    width: width - 2 * PADDING,
    backgroundColor: 'black',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 19,
    color: 'white',
  },
  mapButton: {
    flexDirection: 'row',
    width: width - 2 * PADDING,
    backgroundColor: defaultColors.light,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    columnGap: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  repetitionSection: {
    columnGap: 20,
    height: 45,
  },
  dateIcon: {
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;
