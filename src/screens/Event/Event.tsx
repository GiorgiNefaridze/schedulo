import {Image, SafeAreaView, Text, Pressable} from 'react-native';

import Header from '../../components/Header';
import BottomSheet from '../../components/BottomSheet';
import {useEvent} from './useEvent';

import CreateEvent from '../../assets/createEvent.png';
import styles from './styles';

const Event = () => {
  const {isSheetOpen, toggleBottomSheet} = useEvent();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header toggleBottomSheet={toggleBottomSheet} />

      {!isSheetOpen ? (
        <Pressable style={styles.container} onPress={toggleBottomSheet}>
          <Image style={{width: 150, height: 150}} source={CreateEvent} />
          <Text style={styles.mainText}>CREATE YOUR EVENT</Text>
        </Pressable>
      ) : (
        <BottomSheet />
      )}
    </SafeAreaView>
  );
};

export default Event;
