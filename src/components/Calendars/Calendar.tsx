import {SafeAreaView} from 'react-native';
import {Agenda} from 'react-native-calendars';

import {useCalendar} from './useCalendar';

import styles from './styles';

const Calendar = () => {
  const {renderItem, renderDay, renderEmptyData, events} = useCalendar();

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        items={events}
        loadItemsForMonth={() => {}}
        renderItem={renderItem}
        renderDay={renderDay}
        renderEmptyData={renderEmptyData}
        showClosingKnob={true}
      />
    </SafeAreaView>
  );
};

export default Calendar;
