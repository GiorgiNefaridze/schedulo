import {type FieldError} from 'react-hook-form';
import {getFirstUpperLetter} from '../../utils/getFirstUpperLetter';

const useFormField = (name: string, error: FieldError | undefined) => {
  const isError = Boolean(error?.message);
  const labelName = getFirstUpperLetter(name);

  return {labelName, isError};
};

export {useFormField};
