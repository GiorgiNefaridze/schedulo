import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {defaultColors} from '../../constants/Colors';

import styles from './styles';

type HeaderType = {
  toggleBottomSheet: () => void;
};

const Header = ({toggleBottomSheet}: HeaderType) => {
  return (
    <View style={styles.header}>
      <Pressable style={styles.addEventButton} onPress={toggleBottomSheet}>
        <Icon name="add-circle" size={25} color={defaultColors.secondary} />
      </Pressable>
    </View>
  );
};

export default Header;
