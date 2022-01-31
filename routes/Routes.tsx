import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { RootStackParamList } from '../screens/types';
import Login from '../screens/Login';
import GuestScreen from '../screens/GuestScreen';

import SocketProvider from '../components/SocketContext';

type styles = {
  default: NativeStackNavigationOptions,
};

const styles: styles = {
  default: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
    },
    headerTitleAlign: 'center',
  }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <SocketProvider>
      <Stack.Navigator>
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={styles.default}
        />
        <Stack.Screen
          name={'Guest'}
          component={GuestScreen}
          options={styles.default}
        />
      </Stack.Navigator>

    </SocketProvider>
  );
}

export default Routes;
