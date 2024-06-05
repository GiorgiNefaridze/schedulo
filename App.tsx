import {useState} from 'react';
import {SafeAreaView, StyleSheet, LogBox} from 'react-native';

import Header from './src/components/Header';
import BottomSheet from './src/components/BottomSheet';

const App = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  LogBox.ignoreAllLogs();

  return (
    <SafeAreaView style={styles.container}>
      <Header setIsSheetOpen={setIsSheetOpen} />

      {isSheetOpen && <BottomSheet />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
