/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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

  const [modalVisibility, setModalVisibility] = React.useState(false); 
 
  console.log(os); 


  return(
    <View>
      <ToDoList styles={styles}/>
      <ToDoForm styles={styles}/> 
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
