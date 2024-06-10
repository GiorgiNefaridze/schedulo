import {getFirstUpperLetter} from '../utils/getFirstUpperLetter';

const eventDto = event => {
  return {
    ...event,
    name: getFirstUpperLetter(event?.name),
    startDate: event?.startDate?.toLocaleString()?.split(' ')[1],
    endDate: event?.endDate?.toLocaleString()?.split(' ')[1],
  };
};

export {eventDto};
