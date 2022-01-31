import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';
import Button from '../components/User/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

interface LoginProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>
};

const Login = (props: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Username'
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        placeholder='Confirm Password'
        style={styles.input}
        onChangeText={setConfirmPass}
        value={confirmPass}
        secureTextEntry={true}
      />
      <View style={styles.buttonRow}>
        <Button
          onPress={() => { }}
          title={'Create Account'}
          color='#f4511e'
        />
      </View>
      <TextInput
        placeholder='Username'
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <View style={styles.buttonRow}>
        <Button
          onPress={() => { }}
          title={'Login'}
          color='#f4511e'
        />
        <Button
          onPress={() => { props.navigation.navigate('Guest') }}
          title={'Continue as Guest'}
          color='#f4511e'
        />
      </View>
    </View>
  );
}

export default Login;
