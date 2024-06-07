import type {Dispatch, SetStateAction} from 'react';
import {UseFormSetValue} from 'react-hook-form';
import {Text, Pressable} from 'react-native';

import {useRepetitionBox} from './useRepetitionBox';
import {defaultColors} from '../../constants/Colors';
import {type Repetition} from '../../types/Repetition/Repetition';
import {type EventSchema} from '../../models/eventSchema';

import styles from './styles';

type RepetitionBoxType = {
  item: Repetition;
  isSelected: string;
  setIsSelected: Dispatch<SetStateAction<string>>;
  setValue: UseFormSetValue<EventSchema>;
};

const RepetitionBox = ({
  item,
  isSelected,
  setIsSelected,
  setValue,
}: RepetitionBoxType) => {
  const {itemName, isChoosen} = useRepetitionBox(item, isSelected);

  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor: isChoosen ? defaultColors.light : 'white'},
      ]}
      onPress={() => {
        setValue('repetition', item);
        setIsSelected(item);
      }}>
      <Text
        style={[styles.containerText, {color: isChoosen ? 'white' : 'black'}]}>
        {itemName}
      </Text>
    </Pressable>
  );
};

export default RepetitionBox;
