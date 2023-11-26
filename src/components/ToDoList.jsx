import {
StyleSheet,
Platform,
SafeAreaView,
ScrollView,
Pressable,
View,
Text,
TextInput,
Button,

} from 'react-native';
import Todo from '../../todo'; 

export default function ToDoList({taskList})
{
  
    return(
        <SafeAreaView style={[styles.mainContainer]}>
        <ScrollView>
        {taskList.map((task) => <Todo task={task}/>)}
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? 30 : 0, 
    },
  }
);