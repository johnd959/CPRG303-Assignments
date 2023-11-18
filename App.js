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

import {createStackNavigator} from '@react-navigation/native-stack';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const os = Platform.OS;

function App() {
  const Stack = createStackNavigator();

  const [taskList, setTaskList] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  function addTask(task) {
    if (task === '') {
      Alert.alert('Error', 'Please enter a task before adding.');
      return;
    }
    setTaskList([...taskList, task]);
  }

  return (
    <NavigationContainer>
      <View style={styles.mainContainer}>
        <ToDoList taskList={taskList} />
        <ToDoForm onAddTask={addTask} />
      </View>
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
