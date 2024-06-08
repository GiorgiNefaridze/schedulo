import {SafeAreaView} from 'react-native';
import {Agenda} from 'react-native-calendars';

import {useCalendar} from './useCalendar';
import styles from './styles';

const Calendar = () => {
  const {renderItem, loadItems, renderDay, EVENTS} = useCalendar();

  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        testID={'agendaId'}
        items={EVENTS}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
        renderDay={renderDay}
        showClosingKnob={true}
        markedDates={{
          '2024-06-08': {textColor: 'red'},
          '2024-06-07': {textColor: 'red'},
          '2024-06-06': {startingDay: true, endingDay: true, color: 'yellow'},
          '2024-06-05': {startingDay: true, color: 'red'},
        }}
      />
    </SafeAreaView>
  );
};

export default Calendar;
