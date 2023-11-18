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

import {useState} from 'react'; 

export default function ToDoForm({onAddTask})
{
    const [taskText, setTaskText] = useState('');
    
    function handleAddTask()
    {
        onAddTask(taskText); 
        setTaskText(''); 
    }

    return(
        <View style={styles.form}>
        <TextInput
        style={{}}
        value={taskText}
        placeholder='Add a new task ...'
        onChangeText={(text) => setTaskText(text)}
        />
        <Button title='Add Task' onPress={() => handleAddTask()}/>
      </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
      },
})