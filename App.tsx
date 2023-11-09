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
  TextInput

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const os = Platform.OS;

function App(): JSX.Element {

  const [taskList, setTaskList] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
 


  return(
    <View>
      <ToDoList taskList={taskList}/>
      <ToDoForm /> 
    </View>

  )
  
}

const styles = StyleSheet.create({
    mainContainer : {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: os === 'android' ? 30 : 0, 
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
      gap: 10,
    },
    task : {
      marginVertical: 5,
      padding: 10,
      backgroundColor: 'tomato',
      borderRadius: 5, 
    },
    taskText : {
      fontSize: 18,
      color: 'white',
    },
    completed : {
      backgroundColor: 'crimson'
    },
  }
);

export default App;
