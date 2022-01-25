import React from 'react';
import { Text, View } from 'react-native';

import { useSocket } from '../components/SocketContext';

const Login = () => {
  const userConnection = useSocket();

  return(
    <View>
      <Text>Login Screen</Text>
      <Text>{`connected with id = ${userConnection.socket.id}`}</Text>
    </View>
  );
}

export default Login;
