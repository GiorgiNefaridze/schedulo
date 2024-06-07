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
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  setValue: UseFormSetValue<EventSchema>;
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
  setValue,
}: DateTimePickerType) => {
  const {isVisible, mode, toggleVisibility, handleConfirm} = useDateTimePicker(
    name,
    openedDate,
    setDate,
    setValue,
    date,
  );

  return (
    <View>
      <View style={styles.dateContainer}>
        <Text style={styles.fieldBlockText}>{label}: </Text>
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

      <FormField
        name={name}
        control={control}
        error={errors?.name}
        hasLabel
        Component={() => {
          return (
            <DatePicker
              modal
              open={isVisible}
              date={date}
              mode={mode}
              onConfirm={curDate => handleConfirm(curDate)}
              onCancel={toggleVisibility}
              minimumDate={new Date()}
            />
          );
        }}
      />
    </View>
  );
};

export default DateTimePicker;
