import {useState, useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {SafeAreaView, StyleSheet, LogBox} from 'react-native';

import Header from './src/components/Header';
import BottomSheet from './src/components/BottomSheet';
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  LogBox.ignoreAllLogs();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header setIsSheetOpen={setIsSheetOpen} />

      {isSheetOpen && <BottomSheet />}
      <Calendar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
