import {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Skottie} from 'react-native-skottie';

import EmptyEvent from '../../assets/EmptyEvent.json';

import styles from './styles';

const {width} = Dimensions.get('screen');

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  //Store mwirdeba rame --->

  useEffect(() => {
    if (selectedDate) {
      setEvents(prev => [
        ...prev,
        {[selectedDate]: [].filter(e => e.date === selectedDate)},
      ]);
    }
  }, [selectedDate]);

  console.log({selectedDate});

  return (
    <Agenda
      items={{
        '2024-06-06': [
          {
            name: 'event 1 in 6',
            location: 'Dubai',
            startDate: '17:00',
            endDate: '20:00',
            repetition: 'day',
          },
          {
            name: 'event 2 in 6',
            location: 'Dubai',
            startDate: '17:00',
            endDate: '20:00',
            repetition: 'day',
          },
        ],
        '2024-06-07': [
          {
            name: 'event 1 in 7',
            location: 'Dubai',
            startDate: '17:00',
            endDate: '20:00',
            repetition: 'day',
          },
        ],
        '2024-06-08': [
          {
            name: 'event 1 in 8',
            location: 'Dubai',
            startDate: '17:00',
            endDate: '20:00',
            repetition: 'day',
          },
          {
            name: 'event 2 in 8',
            location: 'Dubai',
            startDate: '17:00',
            endDate: '20:00',
            repetition: 'day',
          },
        ],
      }}
      onDayPress={day => {
        setSelectedDate(day.dateString);
      }}
      renderItem={item => {
        return (
          <View style={styles.eventBlock}>
            <Text>
              {item?.startDate} - {item?.endDate}
            </Text>
            <Text>{item?.name}</Text>
            <Text>{item?.location}</Text>
          </View>
        );
      }}
      renderDay={date => {
        const digit = new Date(date)
          .toLocaleString()
          .split(',')[0]
          .split('/')[1];
        const day = new Date(date).toDateString().split(' ')[0];

        return (
          <View style={styles.eventDay}>
            {!!digit && (
              <>
                <Text>{digit}</Text>
                <Text>{day}</Text>
              </>
            )}
          </View>
        );
      }}
      rowHasChanged={(r1, r2) => {
        return r1.name !== r2.name;
      }}
      renderEmptyDate={() => {
        return (
          <View>
            <Text>renderEmptyDate</Text>
          </View>
        );
      }}
      renderKnob={() => {
        return <View style={styles.knob} />;
      }}
      renderEmptyData={() => {
        return (
          <Skottie
            source={EmptyEvent}
            autoPlay={true}
            style={styles.emptyData}
          />
        );
      }}
      hideKnob={false}
      showClosingKnob={true}
      markedDates={{
        '2024-06-06': {marked: true, selected: true},
        '2024-06-07': {marked: true},
      }}
      onRefresh={() => console.log('refreshing...')}
      refreshing={false}
    />
  );
};

export default Calendar;
