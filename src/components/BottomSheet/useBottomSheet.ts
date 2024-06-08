import {useState} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {pickPlace} from 'react-native-place-picker';

import {type EventSchema, eventSchema} from '../../models/eventSchema';
import {createEventDto} from '../../dtos/EventDto';
import {defaultColors} from '../../constants/Colors';

const snapPoints = ['80%', '95%'];

const useBottomSheet = () => {
  const [isSelected, setIsSelected] = useState('');
  const [openedDate, setOpenedDate] = useState('');

  const [currentDate, setCurrentDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  const {
    control,
    formState: {errors},
    handleSubmit,
    setValue,
  } = useForm<EventSchema>({
    resolver: zodResolver(eventSchema),
  });

  const submitForm = handleSubmit(data => {
    console.log('Form data: ', createEventDto(data));
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
    maxDate,
    setMaxDate,
  };
};

export {useBottomSheet};
