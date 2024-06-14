import {
  useEffect,
  type ReactNode,
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

import {type EventType} from '../types/Event/Event';
import {getEvents} from '../store/store';

const eventsContext = createContext<EventsContextType>({} as EventsContextType);

type EventsContextType = {
  events: EventType;
  setEvents: Dispatch<SetStateAction<EventType>>;
};

const EventsContext = () => {
  return useContext(eventsContext);
};

const EventsContextProvider = ({children}: {children: ReactNode}) => {
  const [events, setEvents] = useState({});

  const allEvents = getEvents();

  useEffect(() => {
    setEvents(allEvents);
  }, []);

  return (
    <eventsContext.Provider value={{events, setEvents}}>
      {children}
    </eventsContext.Provider>
  );
};

export {EventsContext};
export default EventsContextProvider;
