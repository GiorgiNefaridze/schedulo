import {type Dispatch, type SetStateAction} from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

type HeaderType = {
  setIsSheetOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({setIsSheetOpen}: HeaderType) => {
  return (
    <View style={styles.header}>
      <Pressable
        style={styles.addEventButton}
        onPress={() => setIsSheetOpen(prev => !prev)}>
        <Icon name="add-circle" size={25} color="#a3dd38" />
      </Pressable>
    </View>
  );
};

export default Header;
