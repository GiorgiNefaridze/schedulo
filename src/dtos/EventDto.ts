import {getFirstUpperLetter} from '../utils/getFirstUpperLetter';

const createEventDto = event => {
  return {
    ...event,
    name: getFirstUpperLetter(event?.name),
    startDate: new Date(event?.startDate)?.toLocaleTimeString(),
    endDate: new Date(event?.endDate)?.toLocaleTimeString(),
  };
};

export {createEventDto};
