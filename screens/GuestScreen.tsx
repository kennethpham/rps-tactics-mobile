import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const GuestScreen = () => {
  const [username, setUsername] = useState('');

  return (
    <View>
      <Text style={styles.text}>
        {'Choose a session Username'}
      </Text>
      <TextInput
        placeholder='Username'
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <View style={styles.button}>
        <Button
          onPress={() => { }}
          title={'Continue'}
          color='#f4511e'
        />
      </View>
    </View>
  );
}

export default GuestScreen;
