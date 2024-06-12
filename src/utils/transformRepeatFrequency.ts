import {RepeatFrequency} from '@notifee/react-native';

import {type Repetition} from '../types/Repetition/Repetition';

type TransformRepeatFrequency = Repetition | '';

const transformRepeatFrequency = (interval: TransformRepeatFrequency) => {
  switch (interval.toLowerCase()) {
    case 'day':
      return RepeatFrequency.DAILY;
    case 'week':
      return RepeatFrequency.WEEKLY;
    case 'hour':
      return RepeatFrequency.HOURLY;
    default:
      return RepeatFrequency.NONE;
  }
};

export {transformRepeatFrequency};
