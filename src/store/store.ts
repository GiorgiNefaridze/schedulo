import {MmkvStore} from '.';
import {eventsQuery} from './queries';
import {formatDate} from '../utils/formatDate';
import {eventDto} from '../dtos/EventDto';
import {type EventSchema} from '../models/eventSchema';

const getEvents = () => {
  const events = MmkvStore.getString(eventsQuery);

  return JSON.parse(events || '{}');
};

const storeEvent = (event: EventSchema) => {
  const events = getEvents();

  const eventKey = formatDate(
    event?.startDate?.toLocaleString()?.split(',')[0].replaceAll('/', '-'),
  );

  const newEvents = {
    ...events,
    [eventKey]: [...(events[eventKey] || []), eventDto(event)],
  };

  MmkvStore.set(eventsQuery, JSON.stringify(newEvents));

  return newEvents;
};

export {storeEvent, getEvents};
