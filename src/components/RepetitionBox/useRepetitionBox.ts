import {useState, useEffect} from 'react';

import {getFirstUpperLetter} from '../../utils/getFirstUpperLetter';
import {type UseFormSetValue} from 'react-hook-form';
import {type EventSchema} from '../../models/eventSchema';

const useRepetitionBox = (
  itemName: string,
  isSelected: string,
  setValue: UseFormSetValue<EventSchema>,
) => {
  const [isChoosen, setIsChoosen] = useState(false);

  useEffect(() => {
    setIsChoosen(itemName === isSelected);
    setValue('repetition', isSelected);
  }, [isSelected, itemName]);

  return {itemName: getFirstUpperLetter(itemName), isChoosen};
};

export {useRepetitionBox};
