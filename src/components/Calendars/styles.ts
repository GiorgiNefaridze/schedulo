import {StyleSheet} from 'react-native';

import {defaultColors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: defaultColors.light,
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  customDay: {
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    color: defaultColors.light,
  },
  customDayText: {
    fontSize: 20,
    color: defaultColors.secondary,
  },
  customDayName: {
    fontSize: 13,
    color: defaultColors.secondary,
  },
});

export default styles;
