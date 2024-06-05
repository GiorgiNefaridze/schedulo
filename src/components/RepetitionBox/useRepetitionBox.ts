import {useState, useEffect} from 'react';

import {getFirstLetterUpper} from '../../utils/getFirstLetterUpper';

const useRepetitionBox = (itemName: string, isSelected: string) => {
  const [isChoosen, setIsChoosen] = useState(false);

  useEffect(() => {
    setIsChoosen(itemName === isSelected);
  }, [isSelected, itemName]);

  return {itemName: getFirstLetterUpper(itemName), isChoosen};
};

export {useRepetitionBox};
