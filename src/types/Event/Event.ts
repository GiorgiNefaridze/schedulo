type Event = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    city?: string | undefined;
  };
  startDate?: any;
  endDate?: any;
  repetition?: string;
};

type EventType = {
  [key: string]: Event[];
};

export {type EventType, type Event};
