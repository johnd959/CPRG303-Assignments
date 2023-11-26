/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PropsWithChildren, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  Button,
  Pressable,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen'

const os = Platform.OS;
const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer style={styles.mainContainer}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: os === 'android' ? 30 : 0,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    gap: 10,
  },
  task: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'tomato',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
    color: 'white',
  },
  completed: {
    backgroundColor: 'crimson',
  },
});

export default App;
