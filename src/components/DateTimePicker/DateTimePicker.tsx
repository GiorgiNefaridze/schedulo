import {type Dispatch, type SetStateAction} from 'react';
import {View, Pressable, Text} from 'react-native';
import type {Control, FieldErrors, UseFormSetValue} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import FormField from '../FormField/FormField';
import {useDateTimePicker} from './useDateTimePicker';
import {defaultColors} from '../../constants/Colors';
import {type EventSchema} from '../../models/eventSchema';

import styles from '../BottomSheet/styles';

type DateTimePickerType = {
  label: string;
  name: keyof EventSchema;
  errors: FieldErrors<EventSchema>;
  control: Control<EventSchema>;
  openedDate: string;
  setOpenedDate: Dispatch<SetStateAction<string>>;
  setValue: UseFormSetValue<EventSchema>;
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

const DateTimePicker = ({
  label,
  name,
  control,
  errors,
  openedDate,
  setOpenedDate,
  setValue,
  currentDate,
  setCurrentDate,
}: DateTimePickerType) => {
  const {isVisible, toggleVisibility, handleConfirm, selectedDate} =
    useDateTimePicker(name, openedDate, setValue, setCurrentDate);

  return (
    <View>
      <View style={styles.dateContainer}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', columnGap: 10}}>
          <Text style={styles.fieldBlockText}>{label}: </Text>
          <Text>{selectedDate}</Text>
        </View>
        <Pressable
          onPress={() => setOpenedDate(prev => (prev === name ? '' : name))}
          style={[
            styles.dateIcon,
            {
              backgroundColor: isVisible
                ? defaultColors.light
                : defaultColors.secondary,
            },
          ]}>
          <Icon name="calendar-sharp" size={15} color={'white'} />
        </Pressable>
      </View>

      {isVisible && (
        <FormField
          name={name}
          control={control}
          error={errors?.name}
          hasLabel
          Component={() => (
            <DatePicker
              modal
              open
              date={currentDate}
              mode={name === 'endDate' ? 'time' : 'datetime'}
              onConfirm={curDate => handleConfirm(curDate)}
              onCancel={toggleVisibility}
            />
          )}
        />
      )}
    </View>
  );
};

export default DateTimePicker;
