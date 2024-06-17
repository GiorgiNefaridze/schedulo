import {useCallback} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {EventsContext} from '../../contexts/EventsContext';
import {defaultColors} from '../../constants/Colors';
import {type Event} from '../../types/Event/Event';

import EmptyData from '../../assets/emptyData.webp';
import styles from './styles';

const useCalendar = () => {
  const {events} = EventsContext();

  const renderItem = (reservation: Event, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = 'black';
    const startTime = reservation.startDate.split(':').slice(0, 2).join(':');
    const endTime = reservation.endDate.split(':').slice(0, 2).join(':');
    const isOutOfdate = Date.now() > reservation?.scheduledAt;

    return (
      <TouchableOpacity
        style={[
          styles.item,
          {
            marginTop: isFirst ? 25 : 10,
            backgroundColor: isOutOfdate ? '#d3d1d1' : defaultColors.light,
          },
        ]}
        onPress={() => Alert.alert(reservation.name)}>
        <View style={styles.eventFlag} />
        <Text style={{fontSize, color, fontWeight: '600'}}>
          {reservation.name}
        </Text>
        <View style={styles.itemBlock}>
          <Icon name="alarm-outline" size={15} color={'black'} />
          <Text style={{fontSize, color, fontWeight: '600'}}>
            {startTime} - {endTime}
          </Text>
        </View>
        <View style={styles.itemBlock}>
          <Icon name="location" size={15} color={'black'} />
          <Text style={{fontSize, color, fontWeight: '600'}}>
            {reservation.location.city ?? 'Not selected'}
          </Text>
        </View>
        {!!reservation.repetition && (
          <View style={styles.itemBlock}>
            <Icon name="refresh-circle-sharp" size={15} color={'black'} />
            <Text style={{fontWeight: '600'}}>
              Every - {reservation.repetition}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderDay = useCallback(_ => {
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
  }, []);

  const renderEmptyData = useCallback(() => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={{width: 150, height: 150}} source={EmptyData} />
      </View>
    );
  }, []);

  return {renderItem, renderDay, renderEmptyData, events};
};

export {useCalendar};
