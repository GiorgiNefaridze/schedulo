import {useState, useEffect, Dispatch, SetStateAction} from 'react';
import {type UseFormSetValue} from 'react-hook-form';

import {type EventSchema} from '../../models/eventSchema';

const useDateTimePicker = (
  name: keyof EventSchema,
  openedDate: string,
  setDate: Dispatch<SetStateAction<Date>>,
  setValue: UseFormSetValue<EventSchema>,
  date: Date,
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(name === openedDate);
    if (name === 'endDate') {
      setValue('endDate', date);
    } else {
      setValue('startDate', date);
    }
  }, [name, openedDate]);

  const mode = name === 'endDate' ? 'time' : 'datetime';

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  const handleConfirm = date => {
    setDate(date);
    setIsVisible(false);
  };

  return {isVisible, mode, toggleVisibility, handleConfirm};
};

export {useDateTimePicker};
