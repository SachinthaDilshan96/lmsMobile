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
import LoginScreen from "./screens/LoginScreen.tsx";
import SignupScreen from "./screens/SignupScreen.tsx";
import AdminHomeScreen from "./screens/admin/AdminHomeScreen.tsx";
import AdminAllProgramsScreen from "./screens/admin/AdminAllProgramsScreen.tsx";
import AdminSubjectScreen from "./screens/admin/AdminSubjectScreen.tsx";
import AdminPayementsScreen from "./screens/admin/AdminPayementsScreen.tsx";
import AdminDashboardScreen from "./screens/AdminDashboardScreen.tsx";
import UserSubjectsScreen from "./screens/user/UserSubjectsScreen.tsx";

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
                iconName = focused ? 'home' : 'home';
                break;
              case 'Programs':
                iconName = focused ? 'book' : 'book';
                break;
              case 'My Programs':
                iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
                break;
              case 'Subjects':
                iconName = focused ? 'widgets' : 'widgets';
                break;
              case 'Payments':
                iconName = focused ? 'contactless-payment' : 'contactless-payment';
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
          name={'Programs'}
          component={UserAllProgramScreen}
        />
        <Tab.Screen
          name={'My Programs'}
          component={UserMyProgramScreen}
        />
        <Tab.Screen
          name={'Subjects'}
          component={UserSubjectsScreen}
        />
        <Tab.Screen
          name={'Payments'}
          component={UserPayementsScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };
  const AdminTabNavigator = () => {
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
              case 'Programs':
                // @ts-ignore
                iconName = focused ? 'book' : 'book';
                break;
              case 'Subjects':
                // @ts-ignore
                iconName = focused ? 'widgets' : 'widgets';
                break;
              case 'Payments':
                // @ts-ignore
                iconName = focused ? 'contactless-payment' : 'contactless-payment';
                break;
            }
            return <Icon size={22} source={iconName} color={color} />;
          },
          tabBarActiveTintColor: '#d35400',
          tabBarInactiveTintColor: '#bdc3c7',
        })}>
        <Tab.Screen
          name={'Home'}
          component={AdminHomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'Programs'}
          component={AdminAllProgramsScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'Subjects'}
          component={AdminSubjectScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'Payments'}
          component={AdminPayementsScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name={'LoginScreen'} component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name={'SignupScreen'} component={SignupScreen} />
        <Stack.Screen options={{headerShown:false}} name={'UserDashboard'} component={UserTabNavigator} />
        <Stack.Screen options={{headerShown:false}} name={'AdminDashboard'} component={AdminTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
