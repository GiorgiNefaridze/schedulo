import {SafeAreaView, View, Image, Text, Pressable} from 'react-native';

import Header from '../../components/Header';
import BottomSheet from '../../components/BottomSheet';
import {defaultColors} from '../../constants/Colors';
import {useEvent} from './useEvent';

import Calendar from '../.././assets/calendar.png';

const Event = () => {
  const {isSheetOpen, toggleBottomSheet} = useEvent();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header toggleBottomSheet={toggleBottomSheet} />

      {!isSheetOpen ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: 20,
          }}>
          <Image source={Calendar} style={{width: 100, height: 100}} />
          <Pressable onPress={toggleBottomSheet}>
            <Text
              style={{
                color: defaultColors.light,
                fontWeight: '700',
                fontSize: 20,
              }}>
              Create new event
            </Text>
          </Pressable>
        </View>
      ) : (
        <BottomSheet />
      )}
    </SafeAreaView>
  );
};

export default Event;
