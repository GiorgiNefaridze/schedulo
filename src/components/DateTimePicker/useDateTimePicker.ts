import {useState, useEffect} from 'react';

const useDateTimePicker = (name: string, openedDate: string) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(name === openedDate);
  }, [name, openedDate]);

  const mode = name === 'endDate' ? 'time' : 'datetime';

  const getTime = e => {
    const date = new Date(e.nativeEvent.timestamp);
    console.log(date.toLocaleString());
  };

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return {isVisible, getTime, toggleVisibility, mode};
};

export {useDateTimePicker};
