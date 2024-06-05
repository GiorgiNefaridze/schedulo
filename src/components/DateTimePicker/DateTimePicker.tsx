import type {Dispatch, SetStateAction} from 'react';
import {View, Platform, Pressable, Text} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import FormField from '../FormField/FormField';

import {useDateTimePicker} from './useDateTimePicker';
import {getDateFormat} from '../../utils/getDateFormat';

import styles from '../BottomSheet/styles';

type DateTimePickerType = {
  label: string;
  name: string;
  errors: unknown;
  control: unknown;
  openedDate: unknown;
  setOpenedDate: unknown;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
};

const DateTimePicker = ({
  label,
  name,
  control,
  errors,
  openedDate,
  setOpenedDate,
  date,
  setDate,
}: DateTimePickerType) => {
  const {isVisible, mode} = useDateTimePicker(name, openedDate);

  return (
    <View>
      <View style={styles.dateContainer}>
        <Text style={styles.fieldBlockText}>{label}: </Text>
        <Pressable
          onPress={() => setOpenedDate(name)}
          style={{
            padding: 10,
            backgroundColor: isVisible ? '#a3dd38' : 'black',
            borderRadius: 10,
          }}>
          <Icon name="calendar-sharp" size={15} color={'white'} />
        </Pressable>
      </View>

      {isVisible && (
        <FormField
          name={name}
          control={control}
          error={errors?.name}
          noLabel
          Component={() => (
            <RNDateTimePicker
              mode={mode}
              display={Platform.OS === 'android' ? 'default' : 'spinner'}
              value={date}
              onChange={date =>
                setDate(new Date(getDateFormat(date.nativeEvent.timestamp)))
              }
              minimumDate={new Date()}
              maximumDate={
                name === 'endDate'
                  ? new Date(getDateFormat(date, 1))
                  : undefined
              }
            />
          )}
        />
      )}
    </View>
  );
};

export default DateTimePicker;
