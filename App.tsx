import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';
import UserHomeScreen from './screens/user/UserHomeScreen.tsx';
import UserAllProgramScreen from './screens/user/UserAllProgramScreen.tsx';
import UserMyProgramScreen from './screens/user/UserMyProgramScreen.tsx';
import UserPayementsScreen from './screens/user/UserPayementsScreen.tsx';
import UserNotificationScreen from './screens/user/UserNotificationScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  const UserTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                // @ts-ignore
                iconName = focused ? 'home' : 'home';
                break;
              case 'All Programs':
                // @ts-ignore
                iconName = focused ? 'home' : 'home';
                break;
              case 'My Programs':
                // @ts-ignore
                iconName = focused ? 'home' : 'home';
                break;
              case 'Subjects':
                // @ts-ignore
                iconName = focused ? 'home' : 'home';
                break;
              case 'Payments':
                // @ts-ignore
                iconName = focused ? 'home' : 'home';
                break;
              case 'Notifications':
                // @ts-ignore
                iconName = focused ? 'home' : 'home';
                break;
            }
            return <Icon size={22} source={iconName} color={color} />;
          },
          tabBarActiveTintColor: '#d35400',
          tabBarInactiveTintColor: '#bdc3c7',
        })}>
        <Tab.Screen
          name={'Home'}
          component={UserHomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'All Programs'}
          component={UserAllProgramScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'My Programs'}
          component={UserMyProgramScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'Subjects'}
          component={UserAllProgramScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'Payments'}
          component={UserPayementsScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'Notifications'}
          component={UserNotificationScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'UserDashboard'} component={UserTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
