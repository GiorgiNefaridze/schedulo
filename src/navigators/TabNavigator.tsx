import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Routes} from '../constants/Routes';
import {defaultColors} from '../constants/Colors';

const Tab = createBottomTabNavigator();

const initialRouteName = 'Events';
const routes = Object.values(Routes);

const getProperColor = (isFocused: boolean) => {
  return isFocused ? defaultColors.secondary : 'grey';
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{header: () => null}}>
      {routes?.map(route => {
        return (
          <Tab.Screen
            key={route?.path}
            name={route?.path}
            component={route?.component}
            options={{
              tabBarStyle: {paddingVertical: 10},
              tabBarIcon: ({focused}) => (
                <Icon
                  name={route.icon}
                  size={20}
                  style={{color: getProperColor(focused)}}
                />
              ),
              tabBarLabel: ({focused}) => (
                <Text
                  style={{color: getProperColor(focused), fontWeight: '500'}}>
                  {route?.path}
                </Text>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
