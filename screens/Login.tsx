import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useSocket } from '../components/SocketContext';
import { io } from 'socket.io-client';

const Login = () => {
  const userConnection = useSocket();

  return(
    <View>
      <Text>Login Screen</Text>
      <Text>{'connected to ' + userConnection.socket.id}</Text>
    </View>
  );
}

export default Login;
