import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-paper';
import { useAppDispatch, useAppSelector } from './src/redux/hooks';

import { signup } from './src/redux/user/userSlice';

export default function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button onPress={() => dispatch(signup())}>
        signup
      </Button>
      <Text>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
