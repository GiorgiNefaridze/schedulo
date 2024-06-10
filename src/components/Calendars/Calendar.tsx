import {memo} from 'react';
import {SafeAreaView} from 'react-native';
import {Agenda} from 'react-native-calendars';

import {useCalendar} from './useCalendar';

import styles from './styles';

const Calendar = () => {
  const {renderItem, renderDay, events} = useCalendar();

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        items={events}
        loadItemsForMonth={() => {}}
        renderItem={renderItem}
        renderDay={renderDay}
        showClosingKnob={true}
      />
    </SafeAreaView>
  );
};

export default memo(Calendar);
