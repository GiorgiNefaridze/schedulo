import {SafeAreaView} from 'react-native';

import Header from '../../components/Header';
import BottomSheet from '../../components/BottomSheet';

import {useEvent} from './useEvent';

const Event = () => {
  const {isSheetOpen, toggleBottomSheet} = useEvent();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header toggleBottomSheet={toggleBottomSheet} />

      {isSheetOpen && <BottomSheet />}
    </SafeAreaView>
  );
};

export default Event;
