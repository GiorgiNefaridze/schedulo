import {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const EVENTS = {
  '2024-06-08': [
    {
      name: 'Event 1',
      startDate: '2024-06-08T18:00:09.000Z',
      endDate: '2024-06-08T17:40:04.687Z',
      location: {latitude: 25.209924247875552, longitude: 55.2707827858451},
      repetition: 'day',
    },
    {
      name: 'Event 2',
      startDate: '2024-06-08T18:00:09.000Z',
      endDate: '2024-06-08T17:40:04.687Z',
      location: {latitude: 25.209924247875552, longitude: 55.2707827858451},
      repetition: 'day',
    },
  ],
};

const useCalendar = () => {
  const [items, setItems] = useState({});

  const renderItem = (reservation, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = 'black';

    return (
      <TouchableOpacity
        style={[styles.item, {marginTop: isFirst ? 25 : 10}]}
        onPress={() => Alert.alert(reservation.name)}>
        <Text style={{fontSize, color}}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  const loadItems = (day: DateData) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = new Date(time).toISOString().split('T')[0];

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          // for (let j = 0; j < numItems; j++) {
          //   items[strTime].push({
          //     name: 'item for ' + strTime + ' #' + j,
          //     day: strTime,
          //   });
          // }
        }
      }

      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      // setItems(newItems);
    }, 1000);
  };

  const renderDay = _ => {
    const dayName = new Date(_).toDateString()?.split(' ')[0];
    const day = new Date(_)?.toLocaleDateString()?.split('/')[1];

    if (day) {
      return (
        <View style={styles.customDay}>
          <Text style={styles.customDayText}>{day}</Text>
          <Text style={styles.customDayName}>{dayName}</Text>
        </View>
      );
    }
    return <View style={styles.customDay} />;
  };

  return {renderItem, loadItems, items, renderDay, EVENTS};
};

export {useCalendar};
