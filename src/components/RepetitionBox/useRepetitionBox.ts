import {useState, useEffect} from 'react';

import {getFirstUpperLetter} from '../../utils/getFirstUpperLetter';

const useRepetitionBox = (itemName: string, isSelected: string) => {
  const [isChoosen, setIsChoosen] = useState(false);

  useEffect(() => {
    setIsChoosen(itemName === isSelected);
  }, [isSelected, itemName]);

  return {itemName: getFirstUpperLetter(itemName), isChoosen};
};

export {useRepetitionBox};
