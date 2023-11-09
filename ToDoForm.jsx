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

export default function ToDoForm()
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

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        gap: 10,
      },
})