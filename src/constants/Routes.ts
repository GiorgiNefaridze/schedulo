import Calendar from '../components/Calendars';
import Event from '../screens/Event/Event';

import {type Routes as RoutesType} from '../types/Routes/Routes';

const Routes: Record<'Calendar' | 'Events', RoutesType> = {
  Events: {
    path: 'Events',
    component: Event,
    icon: 'bookmarks-sharp',
  },
  Calendar: {
    path: 'Calendar',
    component: Calendar,
    icon: 'calendar',
  },
};

export {Routes};
