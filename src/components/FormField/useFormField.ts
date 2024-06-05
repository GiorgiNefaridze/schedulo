import {getFirstLetterUpper} from '../../utils/getFirstLetterUpper';

const useFormField = (name: string, error: string) => {
  const isError = Boolean(error?.message);
  const labelName = getFirstLetterUpper(name);

  return {labelName, isError};
};

export {useFormField};
