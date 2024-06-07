import {StyleSheet} from 'react-native';

import {defaultColors} from '../../constants/Colors';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: defaultColors.primary,
  },
  addEventButton: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
