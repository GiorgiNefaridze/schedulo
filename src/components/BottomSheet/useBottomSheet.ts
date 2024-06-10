import {useState} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {pickPlace} from 'react-native-place-picker';

import {type EventSchema, eventSchema} from '../../models/eventSchema';
import {eventDto} from '../../dtos/EventDto';
import {EventsContext} from '../../contexts/EventsContext';
import {defaultColors} from '../../constants/Colors';
import {formatDate} from '../../utils/formatDate';

const snapPoints = ['80%', '95%'];

const useBottomSheet = () => {
  const [isSelected, setIsSelected] = useState('');
  const [openedDate, setOpenedDate] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  const {setEvents, events} = EventsContext();

  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
  } = useForm<EventSchema>({
    resolver: zodResolver(eventSchema),
  });

  const submitForm = handleSubmit(data => {
    const eventKey = formatDate(
      data?.startDate?.toLocaleString()?.split(',')[0].replaceAll('/', '-'),
    );

    setEvents(prev => ({
      ...prev,
      [eventKey]: [...(events[eventKey] || []), eventDto(data)],
    }));
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
