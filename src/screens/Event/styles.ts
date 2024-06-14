import {StyleSheet} from 'react-native';

import {defaultColors} from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 15,
  },
  mainText: {
    fontSize: 20,
    fontWeight: '600',
    opacity: 0.5,
    color: defaultColors.primary,
  },
});

export default styles;
