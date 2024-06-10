type EventType = {
  [key: string]: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      city?: string | undefined;
    };
    startDate?: any;
    endDate?: any;
    repetition?: string;
  }[];
};

export {type EventType};
