import {View, Button} from 'react-native'
import { useState } from 'react';
import ToDoForm from "../components/ToDoForm"
import ToDoList from "../components/ToDoList"
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({navigation})
{

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
    

    return(
        <MainLayout>
            <ToDoList taskList={taskList} />
            <ToDoForm onAddTask={addTask} />
            <Button title="Go to About" onPress={() => navigation.navigate('About')}></Button>
        </MainLayout>
    )
}