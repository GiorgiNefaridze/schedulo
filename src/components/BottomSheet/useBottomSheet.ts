import {useState} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {pickPlace} from 'react-native-place-picker';

import {type EventSchema, eventSchema} from '../../models/eventSchema';
import {storeEvent} from '../../store/store';
import {defaultColors} from '../../constants/Colors';
import {CreateScheduledNotification} from '../../services/CreateScheduledNotification';
import {TriggerNotificationDto} from '../../dtos/TriggerNotificationDto';
import {EventsContext} from '../../contexts/EventsContext';

const snapPoints = ['80%', '95%'];

const useBottomSheet = () => {
  const [isSelected, setIsSelected] = useState('');
  const [openedDate, setOpenedDate] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  const {onCreateTriggerNotification} = CreateScheduledNotification();
  const {setEvents} = EventsContext();

  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
    reset,
  } = useForm<EventSchema>({
    resolver: zodResolver(eventSchema),
  });

  const submitForm = handleSubmit(data => {
    setEvents(storeEvent(data));
    onCreateTriggerNotification(TriggerNotificationDto(data));
    reset();
  });

  const handleOpenMap = () => {
    pickPlace({
      enableUserLocation: true,
      enableGeocoding: true,
      color: defaultColors.light,
    })
      .then(res =>
        setValue('location', {
          latitude: res?.coordinate.latitude,
          longitude: res?.coordinate?.longitude,
          city: res.address?.city,
        }),
      )
      .catch(console.log);
  };

  return {
    control,
    submitForm,
    errors,
    setValue,
    snapPoints,
    isSelected,
    setIsSelected,
    handleOpenMap,
    openedDate,
    setOpenedDate,
    currentDate,
    setCurrentDate,
  };
};

export {useBottomSheet};
