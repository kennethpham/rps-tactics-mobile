import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';

import SocketProvider from '../components/SocketContext';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <SocketProvider>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
        />
      </Stack.Navigator>

    </SocketProvider>
  );
}

export default Routes;
