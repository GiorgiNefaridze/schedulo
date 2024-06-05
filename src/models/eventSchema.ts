import {z} from 'zod';

import {REPETITION} from '../constants/Repetition';

const eventSchema = z.object({
  name: z.string().min(3, 'Event name must be at least 3 character'),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  startDate: z.string(),
  endDate: z.string(),
  repetition: z.enum(REPETITION).default(''),
});

type EventSchema = z.infer<typeof eventSchema>;

export {eventSchema, type EventSchema};
