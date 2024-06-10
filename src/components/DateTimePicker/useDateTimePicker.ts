import {useState, useEffect} from 'react';
import {type UseFormSetValue} from 'react-hook-form';

import {type EventSchema} from '../../models/eventSchema';

const useDateTimePicker = (
  name: keyof EventSchema,
  openedDate: string,
  setValue: UseFormSetValue<EventSchema>,
  setCurrentDate: any,
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    setIsVisible(name === openedDate);
  }, [name, openedDate]);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  const handleConfirm = datetime => {
    const time = datetime?.toLocaleString()?.split(' ')[1];
    const date = datetime?.toLocaleString()?.split(',')[0];

    const displayDate = time + '-' + date;
    setIsVisible(false);

    if (name === 'endDate') {
      setValue('endDate', datetime);
    } else {
      setValue('startDate', datetime);
    }

    setCurrentDate(datetime);

    setSelectedDate(displayDate);
  };

  return {isVisible, toggleVisibility, handleConfirm, selectedDate};
};

export {useDateTimePicker};
