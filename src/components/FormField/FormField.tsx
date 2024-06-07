import {View, Text} from 'react-native';
import {type Control, Controller, type FieldError} from 'react-hook-form';

import {useFormField} from './useFormField';
import {type EventSchema} from '../../models/eventSchema';
import styles from '../BottomSheet/styles';

type FormFieldType = {
  name: keyof EventSchema;
  control: Control<EventSchema>;
  error: FieldError | undefined;
  Component: () => JSX.Element;
  hasLabel?: boolean;
};

const FormField = (props: FormFieldType) => {
  const {name, hasLabel, control, error, Component} = props;
  const {labelName, isError} = useFormField(name, error);

  return (
    <View style={styles.fieldBlock}>
      {!hasLabel && <Text style={styles.fieldBlockText}>{labelName}:</Text>}
      <Controller
        name={name}
        control={control}
        render={({field}) => <Component field={field} />}
      />
      {isError && <Text style={styles.fieldBlockError}>{error?.message}</Text>}
    </View>
  );
};

export default FormField;
