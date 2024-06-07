import {useState} from 'react';

const useEvent = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleBottomSheet = () => {
    setIsSheetOpen(prev => !prev);
  };

  return {isSheetOpen, toggleBottomSheet};
};

export {useEvent};
