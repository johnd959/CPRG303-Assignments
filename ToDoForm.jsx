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

export default function ToDoForm({styles})
{
    return(
        <View style={styles.form}>
        <TextInput
        style={{}}
        placeholder='Add a new task ...'
        />
        <Button title='Add'/>
      </View>
    )
}