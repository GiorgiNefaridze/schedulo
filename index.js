/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import App from './App';
import EventsContextProvider from './src/contexts/EventsContext';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => () => (
  <GestureHandlerRootView>
    <EventsContextProvider>
      <App />
    </EventsContextProvider>
  </GestureHandlerRootView>
));
