import {View, Text} from 'react-native';
import {Controller} from 'react-hook-form';

import {useFormField} from './useFormField';
import styles from '../BottomSheet/styles';

type FormFieldType = {
  name: unknown;
  control: unknown;
  error: unknown;
  Component: () => JSX.Element;
  noLabel?: boolean;
};

const FormField = ({
  control,
  name,
  error,
  Component,
  noLabel,
}: FormFieldType) => {
  const {labelName, isError} = useFormField(name, error);

  return (
    <View style={styles.fieldBlock}>
      {!noLabel && <Text style={styles.fieldBlockText}>{labelName}:</Text>}
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
