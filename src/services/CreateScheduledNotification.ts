import notifee, {
  TimestampTrigger,
  TriggerType,
  AndroidImportance,
} from '@notifee/react-native';

import {type Repetition} from '../types/Repetition/Repetition';
import {transformRepeatFrequency} from '../utils/transformRepeatFrequency';

type TriggerNotificationType = {
  eventName: string;
  hour: number;
  minute: number;
  year: number;
  month: number;
  day: number;
  startDate: string;
  endDate: string;
  repetition: Repetition | '';
};

const CreateScheduledNotification = () => {
  const onCreateTriggerNotification = async ({
    eventName,
    hour,
    minute,
    startDate,
    endDate,
    year,
    month,
    day,
    repetition,
  }: TriggerNotificationType) => {
    await notifee.requestPermission();

    const date = new Date(Date.now());
    date.setHours(hour);
    date.setMinutes(minute);
    date.setFullYear(year, month, day);

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    const trigger: TimestampTrigger = {
      alarmManager: {
        allowWhileIdle: true,
      },
      type: TriggerType.TIMESTAMP,
      repeatFrequency: transformRepeatFrequency(repetition),
      timestamp: date.getTime(),
    };

    await notifee.createTriggerNotification(
      {
        title: 'Event reminder',
        body:
          'You have scheduled event ' +
          eventName +
          ', at ' +
          startDate +
          ' - ' +
          endDate,
        android: {
          channelId: channelId,
        },
      },
      trigger,
    );
  };

  return {onCreateTriggerNotification};
};

export {CreateScheduledNotification};
