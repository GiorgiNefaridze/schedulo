import {
  TextInput,
  Pressable,
  Text,
  FlatList,
  View,
  ScrollView,
} from 'react-native';
import RNBottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';

import FormField from '../FormField/FormField';
import RepetitionBox from '../RepetitionBox';
import DateTimePicker from '../DateTimePicker';
import {REPETITION} from '../../constants/Repetition';
import {useBottomSheet} from './useBottomSheet';

import styles from './styles';

const BottomSheet = () => {
  const {
    control,
    submitForm,
    errors,
    snapPoints,
    isSelected,
    setValue,
    setIsSelected,
    handleOpenMap,
    openedDate,
    setOpenedDate,
    currentDate,
    setCurrentDate,
    maxDate,
    setMaxDate,
  } = useBottomSheet();

  return (
    <View style={styles.container}>
      <RNBottomSheet snapPoints={snapPoints}>
        <BottomSheetView style={{flex: 1}}>
          <ScrollView
            style={styles.contentContainer}
            contentContainerStyle={{rowGap: 30}}>
            <FormField
              name={'name'}
              control={control}
              error={errors.name}
              noLabel={false}
              Component={({field}) => (
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  onSubmitEditing={submitForm}
                  style={styles.fieldBlockInput}
                />
              )}
            />

            <DateTimePicker
              name="startDate"
              label="Start Date"
              errors={errors}
              control={control}
              openedDate={openedDate}
              setOpenedDate={setOpenedDate}
              date={currentDate}
              setDate={setCurrentDate}
            />

            <DateTimePicker
              name="endDate"
              label="End Date"
              errors={errors}
              control={control}
              openedDate={openedDate}
              setOpenedDate={setOpenedDate}
              date={maxDate}
              setDate={setMaxDate}
            />

            <FormField
              name={'location'}
              control={control}
              error={errors.location}
              Component={() => (
                <Pressable style={styles.mapButton} onPress={handleOpenMap}>
                  <Icon name="map" size={15} color={'white'} />
                  <Text style={styles.buttonText}>Open map</Text>
                </Pressable>
              )}
            />

            <FormField
              name={'repetition'}
              control={control}
              error={errors.repetition}
              Component={() => (
                <FlatList
                  data={REPETITION}
                  renderItem={({item}) => (
                    <RepetitionBox
                      item={item}
                      isSelected={isSelected}
                      setIsSelected={setIsSelected}
                      setValue={setValue}
                    />
                  )}
                  keyExtractor={item => item}
                  contentContainerStyle={{
                    columnGap: 20,
                    height: 45,
                  }}
                  horizontal
                />
              )}
            />

            <Pressable style={styles.button} onPress={submitForm}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </ScrollView>
        </BottomSheetView>
      </RNBottomSheet>
    </View>
  );
};

export default BottomSheet;
