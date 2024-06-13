import type {EventSchema} from '../models/eventSchema';

const TriggerNotificationDto = (data: EventSchema) => {
  return {
    eventName: data?.name,
    hour: data?.startDate.toLocaleTimeString().split(':')[0],
    minute: data?.startDate.toLocaleTimeString().split(':')[1],
    startDate: data?.startDate
      .toLocaleTimeString()
      .split(':')
      .slice(0, 2)
      .join(':'),
    endDate: data?.endDate
      .toLocaleTimeString()
      .split(':')
      .slice(0, 2)
      .join(':'),
    year: new Date(data.startDate).getFullYear(),
    month: new Date(data.startDate).getMonth(),
    day: new Date(data.startDate).getDate(),
    repetition: data?.repetition,
  };
};

export {TriggerNotificationDto};
