import {StyleSheet} from 'react-native';

import {defaultColors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  item: {
    backgroundColor: defaultColors.light,
    flex: 1,
    height: 100,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    rowGap: 10,
    position: 'relative',
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
  eventFlag: {
    width: 5,
    height: 100,
    backgroundColor: '#61b3f2',
    position: 'absolute',
    left: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default styles;
